<template>
  <div class="date-picker__container w-full">
    <client-only>
      <vc-date-picker :value="value" :mode="mode" @input="onChangeDate">
        <template #default="{ inputValue, inputEvents }">
          <div class="relative w-full text-sm" >
            <input
              :style="style"
              :class="[inputClasses, isError && 'border--danger', isSuccess && 'border--success']"
              type="text"
              :value="inputValue"
              :placeholder="placeholder"
              v-on="inputEvents"
              @blur="validateValue(inputValue)"
            >
            <p
              v-if="icon !== ''"
              class="input__icon absolute flex justify-center items-center"
              :class="iconPosition"
              :style="`width: ${height};`"
            >
              <v-icon :size="14">{{ icon }}</v-icon>
            </p>
          </div>
          <p v-if="isError" class="text-xs text-red font-medium mt-1 shaking">
            {{ errorMessage }}
          </p>
        </template>
      </vc-date-picker>
    </client-only>
  </div>
</template>

<script>

export default {
  name: 'VDatePicker',
  props: {
    value: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: ''
    },
    inputClasses: {
      type: String,
      default: 'pl-4'
    },
    icon: {
      type: String,
      default: 'calendar'
    },
    iconPosition: {
      type: String,
      default: 'right'
    },
    placeholder: {
      type: String,
      default: ''
    },
    rules: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      default: 'date'
    },
  },

  data() {
    return {
      isError: false,
      errorMessage: null,
      isSuccess: false,
    }
  },

  computed: {
    style() {
      const style = {
        width: `${this.width}`,
        height: `${this.height}`,
        padding: `${this.padding}`,
        borderRadius: '8px'
      }
      return style
    },
    // valueInput() {
    //   const date = new Date(this.value)
    //   const yyyy = date.getFullYear()
    //   const mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    //   const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    //   return dd + '-' + mm + '-' + yyyy
    // }
  },

  watch: {
    value: {
      handler(val) {
        this.checkValidate(val)
      },
      deep: true
    }
  },

  methods: {
    onChangeDate(e) {
      const date = new Date(e)
      const yyyy = date.getFullYear()
      const mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      const dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const mn = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const dateFormat = yyyy + '-' + mm + '-' + dd + '-' + hh + '-' + mn
      const timeFormat = hh + ':' + mn
      if (this.mode === 'time') {
        this.$emit('input', timeFormat)
      } else if (this.mode === 'date') {
        this.$emit('input', dateFormat)
      }
    },

    validateValue(value) {
      value = value.trim()
      this.rules.every((rule) => {
        const next = typeof rule === 'function' ? rule(value) : ''
        if (typeof next === 'string') {
          this.isError = true
          this.errorMessage = next
          return false
        } else {
          this.isError = false
          this.errorMessage = ''
          return true
        }
      })
      this.$emit('isValid', !this.isError)
    },

    checkValidate() {
      this.validateValue(this.value)
      this.isSuccess = !this.isError
      return this.isError
    }
  }
}
</script>

<style lang="scss" scoped>
@import "date-picker.scss";
</style>
