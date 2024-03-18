<template>
  <div class="layout__forgot-password p-4 flex items-center">
    <!-- <Header :has-menu="false" :has-icon-back="true" /> -->
    <div class="relative w-full p-5 bg-white rounded-2xl h-fit">
      <nuxt-child />
      <Icons-Logo width="64" class="absolute top-[-32px] left-5"/>
    </div>
    <p
      v-if="$route.path != '/login'"
      width="100%"
      type="primary"
      class=" text-blue absolute left-0 right-0 bottom-0 mx-auto text-center mb-5"
      @click="$router.push('/login')"
    >
      Quay lại đăng nhập
    </p>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordLayout',
}
</script>

<style lang="scss" scoped>

.layout__forgot-password {
  @apply bg-gray-light-1;
  min-height: 100vh;
}
</style>
