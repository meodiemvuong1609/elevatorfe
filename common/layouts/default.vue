<template>
  <div id="layout-page" class="bg-gray-light-1 min-h-screen h-full pt-[60px]">
    <div class="fixed top-0 w-full z-[2005] custom-gradient">
      <Header />
    </div>
    <nuxt-child />
  </div>
</template>

<script>

export default {
  name: 'PageDefaultLayout',
  data () {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

.custom-gradient {
  background: linear-gradient(0deg, #FFA07A 0%, #FF6347 100%);


}

</style>
