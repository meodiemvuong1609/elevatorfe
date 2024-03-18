<template>
  <div ref="infiniteScroll" class="infinite-scroll__container" :class="overflow && 'overflow'" :style="overflow && `height: ${height} !important`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'InfiniteScroll',
  props: {
    length: {
      type: Number,
      default: 0
    },

    total: {
      type: Number,
      default: 0
    },

    overflow: {
      type: Boolean,
      default: true
    },

    height: {
      type: String,
      default: '60vh'
    }
  },

  computed: {
    arrayLength() {
      return this.length
    },
    arrayTotal() {
      return this.total
    }
  },

  mounted() {
    const scroll = (e) => {
      if(this.length < this.total) {
        e.preventDefault()
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
          return this.$emit('get-data')
        }
      }
    }
    window.addEventListener('scroll', scroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', scroll)
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

.infinite-scroll{
  &__container{
    height: auto;
  }
}

.overflow {
  overflow: auto;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
