<template>
  <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6484 1.93359L7.18359 6.43359C6.9375 6.64453 6.65625 6.75 6.375 6.75C6.05859 6.75 5.77734 6.64453 5.56641 6.43359L1.10156 1.93359C0.75 1.61719 0.644531 1.125 0.820312 0.703125C0.996094 0.28125 1.41797 0 1.875 0H10.8398C11.2969 0 11.6836 0.28125 11.8594 0.703125C12.0352 1.125 11.9648 1.61719 11.6484 1.93359Z" :fill="color"/>
  </svg>
</template>
<script>
export default {
  name: 'IconArrowLeft',
  props: {
    color: {
      type: String,
      default: '#AAAAAA',
    },
  },
}
</script>
  
<style></style>