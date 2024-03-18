<template>
  <svg :class="type" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.31641 5.60156L5.78125 1.10156C6.02734 0.890625 6.30859 0.75 6.625 0.75C6.90625 0.75 7.1875 0.890625 7.39844 1.10156L11.8633 5.60156C12.1797 5.91797 12.2852 6.41016 12.1094 6.83203C11.9336 7.25391 11.5469 7.5 11.0898 7.5H2.125C1.66797 7.5 1.24609 7.25391 1.07031 6.83203C0.894531 6.41016 1 5.91797 1.31641 5.60156Z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconArrow',
  props: {
    color: {
      type: String,
      default: () => '#35DB7B',
    },
    type: {
      type: String,
      default: () => 'up', // 'up' || 'down' || 'right' || 'left'
     }
  },
}
</script>

<style lang="scss" scoped>
.down {
  transform: rotate(180deg);
}

.left {
  transform: rotate(-90deg);
}

.right {
  transform: rotate(90deg);
}
</style>