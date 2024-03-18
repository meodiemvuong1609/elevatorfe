<template>
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 2H8.59375L7.0625 0.59375C6.6875 0.21875 6.1875 0 5.65625 0H2C0.875 0 0 0.90625 0 2V12C0 13.125 0.875 14 2 14H14C15.0938 14 16 13.125 16 12V4C16 2.90625 15.0938 2 14 2ZM2 1.5H5.65625C5.78125 1.5 5.90625 1.5625 6 1.65625L8 3.5H14C14.25 3.5 14.5 3.75 14.5 4V5H1.5V2C1.5 1.75 1.71875 1.5 2 1.5ZM14 12.5H2C1.71875 12.5 1.5 12.2812 1.5 12V6.5H14.5V12C14.5 12.2812 14.25 12.5 14 12.5Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconFolder',
  props: {
    color: {
      type: String,
      default: '#A7AEB8',
    },
  },
}
</script>

<style>
</style>