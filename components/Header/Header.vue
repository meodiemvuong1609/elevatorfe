<template>
  <div class="header flex h-[110px] custom-gradient ">
    <div class="flex items-center mx-auto w-3/4 justify-between">
      <div class="logo flex ">
        <img src="~/assets/img/logo.png" class=" max-h-[80px]" alt="">
        <div class="flex-row ml-2 ">
          <div class="bo font-bold text-2xl text-white">
            THANG MÁY HƯNG PHÁT
          </div>
          <div class=" text-white font-normal text-lg">
            HUNG PHAT ELEVATOR
          </div>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <nuxt-link to="">
          <div class="text-white text-lg">Trang chủ</div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="text-white text-lg">Dịch vụ</div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="text-white text-lg">Sản phẩm</div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="text-white text-lg">Liên hệ</div>
        </nuxt-link>

      </div>
      <div class="flex items-end justify-between">
        <div class="relative w-full">
          <v-input 
            :height="45" 
            placeholder="Tìm kiếm" 
            input-classes="!pl-7" 
          />
          <Icons-Search class="absolute top-1/2 left-4 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      title: 'My App'
    }
  }
}
</script>

<style lang="scss" scoped>

@import 'Header.scss';

</style>