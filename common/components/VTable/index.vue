<template>
  <div
    class="v-table"
    :class="{
      loading: loading,
    }"
  >
    <template v-if="!loading && hasSlot('header')">
      <div class="v-table--header">
        <slot name="header"></slot>
      </div>
    </template>
    <template v-if="!loading && hasSlot('body')">
      <div class="v-table--body">
        <slot name="body"></slot>
      </div>
    </template>
    <template v-if="!loading && paginateOption && !paginateOption.hidden">
      <template v-if="paginateOption.totalPage">
        <v-paginate
          v-model="currentPage"
          :page-count="paginateOption.totalPage"
          :first-last-button="paginateOption.firstLast"
          :first-button-text="paginateOption.firstText"
          :last-button-text="paginateOption.lastText"
          :pre-text="paginateOption.prevText"
          :next-text="paginateOption.nextText"
          class="v-table--paginate"
        />
      </template>
    </template>
    <v-loading :show="loading" position="absolute" />
  </div>
</template>

<script>
export default {
  name: 'VTable',
  props: {
    header: {
      type: Array,
      default: () => [],
    },
    data: {
      type: [Object, Array],
      default: null,
    },
    paginate: {
      type: [Object, Boolean],
      default: false,
    },
    responsive: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      totalPage: 0,
      currentPage: 1,
      paginateOption: {
        limit: 0,
        totalPage: 0,
        hidden: false,
        firstLast: false,
        firstText: '',
        lastText: '',
        prevText: '',
        nextText: '',
        page: null,
      },
    }
  },
  watch: {
    paginate: {
      handler(value) {
        if (typeof value === 'boolean') {
          this.paginateOption.hidden = !value
        } else {
          this.paginateOption = {
            ...this.paginateOption,
            ...value,
          }
          this.paginateOption.hidden = false
          this.paginateOption.limit = value.limit
          this.paginateOption.totalPage = Math.ceil(value.count / value.limit)
        }
      },
      immediate: true,
      deep: true,
    },
    currentPage: {
      handler(value) {
        if (typeof this.paginateOption.page === 'function') {
          this.paginateOption.page(value)
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    hasSlot(name = 'default') {
      return !!this.$slots[name]
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
