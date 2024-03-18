<template>
  <i class="v-icon" :style="styles" :class="iconName" @click="handleClick"></i>
</template>

<script>
export default {
  name: 'VIcon',
  props: {
    size: {
      type: [String, Number],
      required: false,
      default: null,
    },
  },
  data() {
    return {
      iconName: this.$slots.default[0].text,
    }
  },
  computed: {
    styles() {
      const size = Number(this.size) ? `${this.size}px` : this.size
      return {
        width: size,
        height: size,
      }
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './icon.scss';
</style>
