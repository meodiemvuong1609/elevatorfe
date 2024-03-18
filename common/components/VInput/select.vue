<template>
  <div class="input__container" :style="maxWidth">
    <label class="input__label h6 bold">
      <span>{{ label }} </span>
    </label>
    <div class="relative">
      <client-only>
        <v-select
          :options="options"
          :multiple="multiple"
          :reduce="reduce"
          :placeholder="placeholder"
          :style="styleSelect"
          :value="value"
          :autofocus="autofocus"
          :disabled="disabled"
          :searchable="searchable"
          :clearable="clearable"
          :label="labelOption"
          :class="isNull ?'border--danger' :''"
          @input="onInput"
          @change="onChange"
        >
        <span slot="no-options">{{ noOption }}</span>
        </v-select>
      </client-only>
    </div>
    <p v-if="isNull" class="p7 red bold mt025 shaking">
      Vui lòng chọn
    </p>
  </div>
</template>

<script>
export default {
  name: 'VInputSelect',
  props: {
    label: {
      type: String,
      default: () => '',
    },

    placeholder: {
      type: String,
      default: () => '',
    },

    value: {
      type: [String, Array, Object],
      default: () => '',
    },

    width: {
      type: [String, Number],
      default: () => 400,
    },

    height: {
      type: String,
      default: () => '45px',
    },

    disabled: {
      type: Boolean,
      default: () => false,
    },

    autofocus: {
      type: Boolean,
      default: () => false,
    },

    options: {
      type: Array,
      default() {
        return []
      },
    },

    labelOption: {
      type: String,
      default: 'label',
    },

    noOption: {
      type: String,
      default: 'Không có dữ liệu',
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    reduce: {
      type: Function,
      default: (option) => option,
    },

    searchable: {
      type: Boolean,
      default: true,
    },

    clearable: {
      type: Boolean,
      default: true,
    },

    required: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      isNull: false,
      isSuccess: false,
    }
  },

  computed: {
    styleSelect() {
      return {
        height: `${this.height}`,
        border: this.isNull && !this.isSuccess ? '1px solid #EF4923' : (this.isSuccess && '1px solid #06C270'),
        borderRadius: '8px',
      }
    },
    maxWidth() {
      return {
        maxWidth: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: `${this.height}`,
      }
    },

    valueData() {
      return this.value
    }
  },

  watch: {
    value: {
      handler(val) {
        this.checkNullFeild(val)
      },
      deep: true
    }
  },

  methods: {
    onInput(event) {
      this.$emit('input', event)
    },
    onChange(event) {
      this.$emit('change', event)
    },

    checkNullFeild() {
      if(this.required) {
        const valueCheck = this.value
        if(valueCheck) {
          if(typeof valueCheck === 'object' && valueCheck.length && valueCheck.length === 0) {
            this.isNull = true
          } else {
            this.isNull = false
          }
        } else {
          this.isNull = true
        }
        this.isSuccess = !this.isNull
      }
      return this.isNull
    }
  },
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
