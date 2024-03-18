<template>
  <div class="checkbox__type--switch">
    <label class="f aic">
      <input 
        :class="className"
        type="checkbox" 
        :name="name" 
        :value="value"
        :checked="checked"
        class="switch"
        :disabled="disabled"
        @change="onChange"
      />
      <div class="label" :class="disabled && 'lable--disable'"></div>
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'VInputSwitch',
  props: {
    name: {
      type: String,
      default: () => '',
    },

    value: {
      type: Boolean,
      default: () => false,
    },

    label: {
      type: String,
      default: () => '',
    },

    color: {
      type: String,
      default: () => 'primary', // 'primary' | 'danger' | 'warning' | 'info' | 'success'
    },

    disabled: {
      type: Boolean,
      default: () => false,
    },
  },

  computed: {
    className() {
      return [this.color, this.iconChecked]
    },

    checked() {
      return this.value
    }
  },

  methods: {
    onChange(e) {
      this.$emit('input', e.target.checked);
    }
  }
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>