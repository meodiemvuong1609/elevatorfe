<template>
  <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.125 7.8125C2.3125 6.79688 0.5 4.375 0.5 3C0.5 1.34375 1.82812 0 3.5 0C5.15625 0 6.5 1.34375 6.5 3C6.5 4.375 4.67188 6.79688 3.85938 7.8125C3.67188 8.04688 3.3125 8.04688 3.125 7.8125ZM3.5 4C4.04688 4 4.5 3.5625 4.5 3C4.5 2.45312 4.04688 2 3.5 2C2.9375 2 2.5 2.45312 2.5 3C2.5 3.5625 2.9375 4 3.5 4Z"
      :fill="color" />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#EF5149',
    },
  },
}
</script>

<style></style>