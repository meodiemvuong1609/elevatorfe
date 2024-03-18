<template>
  <div id="layout-page" class="bg-gray-light-1 min-h-screen h-full">
    <nuxt-child />
    <Navbar/>
  </div>
</template>

<script>
export default {
  name: 'HomePageLayout',
  middleware: 'authenticated',
  data () {
    return {
      
    }
  },
  created() {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped></style>
