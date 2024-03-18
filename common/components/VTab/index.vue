<template>
  <div class="v-tab relative">
    <div v-if="tabItems" class="p-4 v-tab__header bg-white">
      <div class="v-tab__header--body">
        <template v-for="(item, index) in tabItems">
          <div
            v-if="checkItem(item, 'string')"
            :key="index"
            class="text-sm cursor-pointer v-tab__item"
            :class="{
              'text-black font-bold': tabActive === index,
              'text-gray-dark': tabActive !== index,
              [item.class]: item.class,
            }"
            :style="{ width: Number(item.width) ? item.width + 'px' : item.width }"
            @click="handleTab(index)"
          >
            {{ item }}
          </div>
          <div
            v-if="checkItem(item, 'object')"
            :key="index"
            class="text-sm cursor-pointer v-tab__item"
            :class="{
              'text-black font-bold': tabActive === item.key,
              'text-gray-dark': tabActive !== item.key,
              'v-tab__item--active': tabActive == item.key,
              'v-tab__item--disabled': item.disabled,
            }"
            :style="{ width: Number(item.width) ? item.width + 'px' : item.width }"
            @click="handleTab(item.key)"
          >
            {{ item.label }}
          </div>
        </template>
      </div>
    </div>
    <div class="v-tab__body">
      <template v-if="slots && slots.length > 0">
        <div v-for="(item, index) in slots" :key="index" class="v-tab__body--item">
          <slot v-if="item == tabActive" :name="item"></slot>
        </div>
      </template>
      <slot v-if="$slots.default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTab',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    defaultTab: {
      type: [Number, String],
      default: () => 0,
    },
  },
  data() {
    return {
      tabItems: [],
      tabActive: null,
      left: 0,
      originX: 0,
      originLeft: 0,
    }
  },
  computed: {
    slots() {
      return Object.keys(this.$slots)
    },
  },
  watch: {
    items: {
      handler(value) {
        this.tabItems = value
        this.checkActive()
      },
      immediate: true,
      deep: true,
    },

    defaultTab: {
      handler(value) {
        this.tabActive = value
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.checkActive()
  },
  methods: {
    handleTab(index) {
      this.tabActive = index
      this.$emit('active', index)
    },
    checkItem(item, type) {
      return typeof item === type
    },
    checkActive() {
      if (this.tabItems) {
        const filterDisabled = this.tabItems.filter((item) => !item.disabled)
        if (!this.tabActive && this.checkItem(this.tabItems[0], 'object')) {
          this.tabActive = filterDisabled[0].key
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './tab.scss';
</style>
