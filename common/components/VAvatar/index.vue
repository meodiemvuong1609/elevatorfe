<template>
  <div v-if="src" class="v-avatar" :style="styles">
    <img :src="src" :alt="src" draggable="false" />
  </div>
  <div v-else class="v-avatar" :style="styles">
    <svg :width="size" :height="size" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#C7C7C9" />
      <path d="M8 28C8 23.5817 11.5817 20 16 20H23C27.4183 20 31 23.5817 31 28V40H8V28Z" fill="white" />
      <circle cx="19.5" cy="12.5" r="6.5" fill="white" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'VAvatar',
  props: {
    size: {
      type: [String, Number],
      default: 40,
    },
    src: {
      type: String,
      default: '',
    },
  },
  computed: {
    styles() {
      const size = Number(this.size) ? this.size + 'px' : this.size
      return {
        width: size,
        height: size,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.v-avatar {
  border-radius: 8px;
  background: #c7c7c9;
  border: 1px solid #c7c7c9;
  overflow: hidden;
  object-fit: contain;
  display: inline-block;

  & img {
    width: 100%;
    height: 100%;
    border-style: none;
    vertical-align: middle;
    object-fit: contain;
    border-radius: 8px;
  }
}
</style>
