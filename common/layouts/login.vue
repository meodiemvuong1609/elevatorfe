<template>
  <div id="layout-login" class="bg-gray-light-1 h-screen p-4 flex items-center">
    <div class="relative w-full p-5 bg-white rounded-2xl h-fit">
      <nuxt-child />
      <Icons-Logo width="64" class="absolute top-[-32px] left-5"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
}
</script>

<style lang="scss" scoped></style>
