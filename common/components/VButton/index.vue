<template>
  <button
    :type="htmlType"
    :style="style"
    :class="[
      'flex items-center text-sm rounded-lg font-medium',
      { 'py-2.5 px-4': type !== 'terminate' },
      { 'bg-red text-white hover:bg-red-dark-1 focus:bg-red-light-1': disabled === false && type === 'primary' },
      { 'bg-gray-light text-gray-dark hover:bg-gray-light-1 focus:bg-gray-light focus:text-black': type === 'infor' },
      { 'bg-white text-gray-dark hover:bg-white focus:bg-white': type === 'none' },
      { 'button--secondary border border-solid borer-gray-light-100 bg-white  text-black hover:bg-gray-light-1' : type === 'secondary' },
      { 'p-0 button--secondary border-solid bg-gray-light text-black': type === 'terminate' },
      { 'text-red border border-dashed border-red font-medium text-sm': type === 'dashed' },
      { 'text-blue border border-dashed border-blue font-medium text-sm': type === 'dashed-blue' },
      { 'bg-gray-light text-white': disabled === true && type === 'primary' },
      { '!bg-gray-light borer-gray-light-1 text-gray': disabled === true && type === 'secondary' },
      { 'justify-center': align === 'center' },
      { 'justify-start': align === 'left' },
      { 'justify-end': align === 'right' },
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'primary', // ['primary', 'secondary']
    },
    outLine: {
      type: Boolean,
      default: false,
    },
    htmlType: {
      type: String,
      default: 'button', // ['button', 'submit']
    },
    size: {
      type: String,
      default: 'default', // ['mini', 'default', 'large']
    },
    background: {
      type: Boolean,
      default: true,
    },
    align: {
      type: String,
      default: 'center',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: '',
    },
    height: {
      type: [String, Number],
      default: '45px',
    },
  },
  computed: {
    style() {
      const width = typeof this.width === 'number' ? `${this.width}px` : `${this.width}`
      const height = typeof this.height === 'number' ? `${this.height}px` : `${this.height}`
      return `width: ${width}; height: ${height};`
    },
  },
}
</script>
