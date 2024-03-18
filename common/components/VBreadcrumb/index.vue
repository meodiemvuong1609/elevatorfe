<template>
  <div class="breadcrumb f aic">
    <div v-for="(item, index) in breadcrumbArray" :key="index">
      <nuxt-link 
        :to="item.href" 
        :class="item?.disabled ? [className, 'disabled'] :className"
        class="f aic"
        >
        <span v-if="index !== 0">/&nbsp;</span> <p>{{ item.label }} </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VBreadCrumb',
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
    textCss: {
      type: String,
      default: '', // use class in scss base
    },
    color: {
      type: String,
      default: 'primary', // 'primary' | 'danger' | 'warning' | 'info' | 'success'
    },
  },

  computed: {
    breadcrumbArray () {
      return this.breadcrumbs
    },

    className () {
      return [this.textCss, 'breadcrumb--' + this.color]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "breadcrumb.scss"
</style>