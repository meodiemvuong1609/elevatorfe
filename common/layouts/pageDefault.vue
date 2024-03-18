<template>
  <div class="layout__default">
    <div >
      <Header :is-hidden="isClose" :has-icon-back="hasIconBackHeader" />
    </div>
    <div class="layout__content">
      <nuxt-child />
      <Navbar/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageDefaultLayout',

  data() {
    return {
      isClose: false,
    }
  },

  computed: {
    hasIconBackHeader() {
      return this.$store.state.hasIconBackHeader
    }
  },

  mounted () {
    this.getMessageFromIframe()
  },

  methods: {
    getMessageFromIframe() {
      // TODO: get data from iframe to close header and navigation bar
      window.onmessage = ({ data }) => {
        if (data.type && data.type === 'POST') {
          this.isClose = data.data.isCloseHeaderAndFooter
          if (data.data.isCheckedIn) {
            this.$store.commit('SET_IS_CHECKED_IN', data.data.isCheckedIn)
          }
          if (data.data.isCheckedOut) {
            this.$store.commit('SET_IS_CHECKED_OUT', data.data.isCheckedOut)
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/base/variables";

.layout__default {
  min-height: 100vh;
  background: $c-gray-5 !important;
}
</style>
