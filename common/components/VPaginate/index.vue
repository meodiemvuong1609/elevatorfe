<template>
  <div v-if="!noLiSurround" :class="containerClass">
    <div v-if="firstLastButton" :class="[pageClass, firstPageSelected() ? disabledClass : '']">
      <button
        :class="pageLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
      >
        <template v-if="firstButtonText">
          {{ firstButtonText }}
        </template>
        <template v-else>
          <i class="v-icon chervon-left"></i>
        </template>
      </button>
    </div>

    <div v-if="!(firstPageSelected() && hidePrevNext)" :class="[prevClass, firstPageSelected() ? disabledClass : '']">
      <button :class="prevLinkClass" :tabindex="firstPageSelected() ? -1 : 0" @click="prevPage()" @keyup.enter="prevPage()">
        <template v-if="prevText">
          {{ prevText }}
        </template>
        <template v-else>
          <i class="v-icon chervon-left"></i>
        </template>
      </button>
    </div>

    <div
      v-for="(page, index) in pages"
      :key="index"
      :class="[
        pageClass,
        page.selected ? activeClass : '',
        page.disabled ? disabledClass : '',
        page.breakView ? breakViewClass : '',
      ]"
    >
      <button v-if="page.breakView" :class="[pageLinkClass, breakViewLinkClass]" tabindex="0">
        <slot name="breakViewContent">{{ breakViewText }}</slot>
      </button>
      <button v-else-if="page.disabled" :class="pageLinkClass" tabindex="0">
        {{ page.content }}
      </button>
      <button
        v-else
        tabindex="0"
        :class="pageLinkClass"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >
        {{ page.content }}
      </button>
    </div>

    <div v-if="!(lastPageSelected() && hidePrevNext)" :class="[nextClass, lastPageSelected() ? disabledClass : '']">
      <button :class="nextLinkClass" :tabindex="lastPageSelected() ? -1 : 0" @click="nextPage()" @keyup.enter="nextPage()">
        <template v-if="nextText">
          {{ nextText }}
        </template>
        <template v-else>
          <i class="v-icon chervon-right"></i>
        </template>
      </button>
    </div>

    <div v-if="firstLastButton" :class="[pageClass, lastPageSelected() ? disabledClass : '']">
      <button
        :class="pageLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click="selectLastPage()"
        @keyup.enter="selectLastPage()"
      >
        <template v-if="lastButtonText">
          {{ lastButtonText }}
        </template>
        <template v-else>
          <i class="v-icon chervon-right"></i>
        </template>
      </button>
    </div>
  </div>
  <div v-else :class="containerClass">
    <button
      v-if="firstLastButton"
      :class="[pageLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="selectFirstPage()"
      @keyup.enter="selectFirstPage()"
    >
      <template v-if="firstButtonText">
        {{ firstButtonText }}
      </template>
      <template v-else>
        <i class="v-icon chervon-left"></i>
      </template>
    </button>
    <button
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="prevPage()"
      @keyup.enter="prevPage()"
    >
      <template v-if="prevText">
        {{ prevText }}
      </template>
      <template v-else>
        <i class="v-icon chervon-left"></i>
      </template>
    </button>
    <template v-for="(page, index) in pages">
      <button
        v-if="page.breakView"
        :key="index"
        :class="[pageLinkClass, breakViewLinkClass, page.disabled ? disabledClass : '']"
        tabindex="0"
      >
        <slot name="breakViewContent">{{ breakViewText }}</slot>
      </button>
      <button
        v-else-if="page.disabled"
        :key="index + 'A'"
        :class="[pageLinkClass, page.selected ? activeClass : '', disabledClass]"
        tabindex="0"
      >
        {{ page.content }}
      </button>
      <button
        v-else
        :key="index + 'B'"
        :class="[pageLinkClass, page.selected ? activeClass : '']"
        tabindex="0"
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >
        {{ page.content }}
      </button>
    </template>
    <button
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="nextPage()"
      @keyup.enter="nextPage()"
    >
      <template v-if="nextText">
        {{ nextText }}
      </template>
      <template v-else>
        <i class="v-icon chervon-right"></i>
      </template>
    </button>
    <button
      v-if="firstLastButton"
      :class="[pageLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click="selectLastPage()"
      @keyup.enter="selectLastPage()"
    >
      <template v-if="lastButtonText">
        {{ lastButtonText }}
      </template>
      <template v-else>
        <i class="v-icon chervon-right"></i>
      </template>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VPaginate',
  props: {
    value: {
      type: Number,
      default: null,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    forcePage: {
      type: Number,
      default: null,
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    marginPages: {
      type: Number,
      default: 1,
    },
    prevText: {
      type: String,
      default: '',
    },
    nextText: {
      type: String,
      default: '',
    },
    breakViewText: {
      type: String,
      default: '…',
    },
    containerClass: {
      type: String,
      default: 'paginate',
    },
    pageClass: {
      type: String,
      default: 'paginate-item',
    },
    pageLinkClass: {
      type: String,
      default: 'paginate-item-link paginate-button',
    },
    prevClass: {
      type: String,
      default: 'paginate-prev',
    },
    prevLinkClass: {
      type: String,
      default: 'paginate-button--prev paginate-button',
    },
    nextClass: {
      type: String,
      default: 'paginate-next',
    },
    nextLinkClass: {
      type: String,
      default: 'paginate-button--next paginate-button',
    },
    breakViewClass: {
      type: String,
      default: '',
    },
    breakViewLinkClass: {
      type: String,
      default: '',
    },
    activeClass: {
      type: String,
      default: 'paginate-item--active',
    },
    disabledClass: {
      type: String,
      default: 'disabled',
    },
    noLiSurround: {
      type: Boolean,
      default: false,
    },
    firstLastButton: {
      type: Boolean,
      default: false,
    },
    firstButtonText: {
      type: String,
      default: 'Đầu',
    },
    lastButtonText: {
      type: String,
      default: 'Cuối',
    },
    hidePrevNext: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      innerValue: 1,
    }
  },
  computed: {
    selected: {
      get: function () {
        return this.value || this.innerValue
      },
      set: function (newValue) {
        this.innerValue = newValue
      },
    },
    pages: function () {
      const items = {}
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          const page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1,
          }
          items[index] = page
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2)

        const setPageItem = (index) => {
          const page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1,
          }

          items[index] = page
        }

        const setBreakView = (index) => {
          const breakView = {
            disabled: true,
            breakView: true,
          }

          items[index] = breakView
        }

        // 1st - loop thru low end of margin pages
        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i)
        }

        // 2nd - loop thru selected range
        let selectedRangeLow = 0
        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange
        }

        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
          setPageItem(i)
        }

        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1)
        }

        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1)
        }

        // 3rd - loop thru high end of margin pages
        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i)
        }
      }
      return items
    },
  },
  beforeUpdate() {
    if (this.forcePage === undefined) return
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage
    }
  },
  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return

      this.innerValue = selected
      this.$emit('input', selected)
      this.clickHandler(selected)
    },
    prevPage() {
      if (this.selected <= 1) return

      this.handlePageSelected(this.selected - 1)
    },
    nextPage() {
      if (this.selected >= this.pageCount) return

      this.handlePageSelected(this.selected + 1)
    },
    firstPageSelected() {
      return this.selected === 1
    },
    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0
    },
    selectFirstPage() {
      if (this.selected <= 1) return

      this.handlePageSelected(1)
    },
    selectLastPage() {
      if (this.selected >= this.pageCount) return

      this.handlePageSelected(this.pageCount)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
