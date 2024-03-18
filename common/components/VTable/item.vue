<template>
  <nuxt-link v-if="to" :to="to" :class="classes">
    <slot></slot>
  </nuxt-link>
  <div v-else :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTableItem',
  props: {
    row: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default: null,
    },
  },
  computed: {
    classes() {
      return `v-table${this.row ? `--row` : '--item'}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
