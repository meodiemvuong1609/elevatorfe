<template>
  <div class="input__container" :style="maxWidth">
    <label v-if="label" :class="['text-sm text-black font-medium', labelClass]">
      {{ label }}
      <span v-if="rules && rules.length" class="text-red">*</span>
    </label>
    <div v-if="type !== 'textarea'" class="relative input__content">
      <input
        :type="passwordShow ? 'text' : type"
        class="relative"
        :class="[border, inputClasses]"
        :style="styleInput"
        :placeholder="placeholder"
        :value="valueInput"
        :disabled="disabled"
        :maxlength="maxlength"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        @keypress.enter="onEnter"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <span v-show="false" class="multiselect__single">{{ valueInput }}</span>
      <slot name="inputContent" />
      <span v-if="type === 'password'" class="flex absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
        <v-icon v-show="passwordShow" :size="18" @click="passwordShow = !passwordShow">eye</v-icon>
        <v-icon v-show="!passwordShow" :size="18" @click="passwordShow = !passwordShow">eye-slash</v-icon>
      </span>
      <span
        v-if="type !== 'password' && icon"
        class="input__icon absolute flex items-center justify-center"
        :class="iconOption.align"
        :style="`width: ${height}px;`"
      >
        <v-icon :size="iconOption.size">{{ iconOption.name }}</v-icon>
      </span>
    </div>
    <div v-else class="input__content relative">
      <textarea
        class="relative"
        :class="[border, inputClasses]"
        :style="styleTextarea"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :maxlength="maxlength"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :rows="rows"
        :cols="cols"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      ></textarea>
      <span
        v-if="type !== 'password' && icon"
        class="absolute right-0 top-[50%] -translate-y-1/2"
        :class="iconOption.align"
        :style="typeof height === 'number' ? `width: ${height}px;` : `width: 55px;`"
      >
        <v-icon :size="iconOption.size">{{ iconOption.name }}</v-icon>
      </span>
    </div>
    <p v-if="errorInput.isError" class="text-red text-xs">
      {{ errorInput?.errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    label: {
      type: String,
      default: () => '',
    },

    labelClass: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: () => '',
    },

    type: {
      type: String,
      default: () => 'text',
    },

    autocomplete: {
      type: String,
      default: () => 'off',
    },

    icon: {
      type: [String, Object],
      default: () => '',
    },

    value: {
      type: [String, Array, Number],
      default: () => '',
    },

    width: {
      type: [String, Number],
      default: () => '100%',
    },

    height: {
      type: [String, Number],
      default: () => 45,
    },

    maxlength: {
      type: Number,
      default: () => 255,
    },

    disabled: {
      type: Boolean,
      default: () => false,
    },

    autofocus: {
      type: Boolean,
      default: () => false,
    },

    rules: {
      type: Array,
      default: () => [],
    },

    rows: {
      type: [String, Number],
      default: '',
    },
    cols: {
      type: [String, Number],
      default: '',
    },
    resize: {
      type: Boolean,
      default: true,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
    paddingLeft: {
      type: Number,
      default: 0,
    },
    inputClasses: {
      type: String,
      default: () => '',
    },
    format: {
      type: Function,
      default: () => false,
    },

    accept: {
      type: String,
      default: 'string', // number || string
    },
    isPrice: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      errorInput: {
        isError: undefined,
        errorMessage: '',
      },
      border: this.noBorder ? 'border--white' : 'border--default',
      passwordShow: false,
    }
  },
  computed: {
    maxWidth() {
      return {
        maxWidth: typeof this.width === 'number' ? `${this.width}px` : this.width,
      }
    },

    styleInput() {
      const passwordType = this.type === 'password'
      return {
        height: typeof this.height === 'number' ? `${this.height}px` : `${this.height}`,
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        paddingLeft:
          this.paddingLeft !== 0
            ? `${this.paddingLeft}px`
            : !passwordType && this.icon && this.iconOption.align === 'left'
            ? `${this.height - 4}px`
            : '12px',
        paddingRight: passwordType || (this.icon && this.iconOption.align === 'right') ? `${this.height - 2}px` : '12px'
      }
    },

    styleTextarea() {
      return {
        resize: !this.resize ? 'none' : 'auto',
        height: this.rows ? 'auto' : typeof this.height === 'number' ? `${this.height}px` : `${this.height}`,
        paddingLeft: this.paddingLeft !== 0 && `${this.paddingLeft}px`,
      }
    },

    iconOption() {
      const iconName = typeof this.icon === 'string' ? this.icon : this.icon.name
      return {
        name: iconName,
        size: this.icon.size || 14,
        align: this.icon.align || 'left',
      }
    },

    valueInput() {
      if (this.accept === 'number') {
        const res = (this.value + '').replace(/\D/g, '')
        const dataFormat = this.format(Number(res))
        return dataFormat === false || dataFormat === '0' ? this.value : dataFormat
      } else return this.value
    },
  },
  methods: {
    onInput(event) {
      if (this.accept === 'number') {
        const res = event.target.value.replace(/\D/g, '')
        const dataFormat = this.format(Number(res))
        this.$emit('input', dataFormat === false || dataFormat === '0' ? res : dataFormat)
      } else {
        this.$emit('input', event.target.value)
      }
    },
    onFocus(event) {
      this.border = 'border--info'
      if (this.errorInput.isError) {
        this.border = 'border--danger'
      }
      this.$emit('focus', event.target.value)
    },
    onBlur(event) {
      this.validateValue(event.target.value)
      this.border = this.noBorder ? 'border--white' : 'border--default'
      if (this.rules.length > 0) {
        if (this.errorInput.isError) {
          this.border = 'border--danger'
        } else {
          this.border = 'border--success'
        }
      }
      const dataEmit = {
        value: event.target.value,
        error: this.errorInput.isError,
        errorMessage: this.errorInput.errorMessage,
      }
      this.$emit('blur', dataEmit)
      this.$emit('isValid', !this.errorInput.isError)
    },

    hidePassword() {
      if (this.type === 'password') {
        this.passwordShow = false
      }
    },

    validateValue(value) {
      value = value.trim()
      this.rules.every((rule) => {
        const next = typeof rule === 'function' ? rule(value) : rule || ''
        if (typeof next === 'string') {
          this.errorInput.isError = true
          this.errorInput.errorMessage = next
          this.borderColor('danger')
          return false
        } else {
          this.errorInput.isError = false
          this.errorInput.errorMessage = ''
          this.borderColor('success')
          return true
        }
      })
    },

    borderColor(value) {
      this.border = 'border--' + value
    },

    checkValidate() {
      this.validateValue(this.value)
      return this.errorInput.isError
    },

    onEnter() {
      this.$emit('enter')
    },
  },
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
