<template>
  <div class="checkbox__type--checkbox">
    <label class="f aic">
      <input 
        type="checkbox"
        :class="className"
        :name="name" 
        :value="value"
        :checked="value"
        :disabled="disabled"
        @change="onChange"
      />
      <span :class="labelClass">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'VInputCheckBox',
  props: {
    name: {
      type: String,
      default: () => '',
    },

    label: {
      type: String,
      default: () => '',
    },

    color: {
      type: String,
      default: () => 'primary', // 'primary' | 'danger' | 'warning' | 'info' | 'success'
    },

    type: {
      type: String,
      default: () => 'checkbox',
    },

    disabled: {
      type: Boolean,
      default: () => false,
    },

    value: {
      type: Boolean,
      default: () => false,
    },

    iconChecked: {
      type: String,
      default : 'stick', // 'hyphen' | 'stick'
    },

    labelClass: {
      type: String,
      default : 'gray-5', // class color in base scss
    }
  },

  computed: {
    className() {
      return [this.color, this.iconChecked]
    }
  },

  methods: {
    onChange(e) {
      this.$emit('input', e.target.checked);
      this.$emit('checked');
    }
  }
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>