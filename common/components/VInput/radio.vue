<template>
  <div class="checkbox__type--radio ">
    <label class="f aic">
      <input 
        type="radio"
        :name="name" 
        :value="value"
        :checked="isChecked"
        :disabled="disabled"
        :class="className"
        @change="$emit('change', $event.target.value)"
      />
      <span class="ml05 mr05">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'VInputCheckBox',

  model: {
    prop: 'modelValue',
    event: 'change'
  },

  props: {
    name: {
      type: String,
      default: () => '',
    },

    value: {
      type: [String, Number, Object, Array],
      default: () => '',
    },

    label: {
      type: String,
      default: () => '',
    },

    color: {
      type: String,
      default: () => 'warning', // 'primary' | 'danger' | 'warning' | 'info' | 'success'
    },

    disabled: {
      type: Boolean,
      default: () => false,
    },

    checked: {
      type: Boolean,
      default: () => false,
    },

    modelValue: {
      type: [String, Number, Object, Array],
      default: () => '',
    }

  },

  computed: {
    className() {
      return [this.color, this.iconChecked]
    },

    isChecked() {
      return this.modelValue ? this.modelValue === this.value : this.checked
    }
  },
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>