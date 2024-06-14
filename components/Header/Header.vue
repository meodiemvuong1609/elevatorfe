<template>
  <div class="flex h-[80px] custom-gradient fixed top-0 left-0 right-0 z-50">
    <div
      class="flex items-center mx-auto w-5/6 justify-between sm:gap-4 max-sm:w-full"
    >
      <div class="flex items-center justify-center">
        <div class="flex items-center sm:ml-4">
          <img src="~/assets/img/hungphat.png" class="h-[150px] mt-4" alt="" />
        </div>
        <div class="flex-row ml-2">
          <div
            class="bo font-bold text-2xl max-sm:text-xl text-header text-nowrap"
          >
            THANG MÁY HƯNG PHÁT
          </div>
          <div class="text-header font-normal text-lg">HUNG PHAT ELEVATOR</div>
        </div>
      </div>
      <div class="flex items-center gap-5 max-sm:hidden text-gray-dark">
        <nuxt-link to="/" exact-active-class="exact-active"> Trang chủ </nuxt-link>
        <nuxt-link to="/introduce" exact-active-class="exact-active"> Giới thiệu </nuxt-link>
        <nuxt-link to="/products" exact-active-class="exact-active"> Sản phẩm </nuxt-link>
        <nuxt-link to="/service" exact-active-class="exact-active"> Dịch vụ </nuxt-link>
        <nuxt-link to="/project" exact-active-class="exact-active"> Dự án </nuxt-link>
        <nuxt-link to="/contact" exact-active-class="exact-active"> Liên hệ </nuxt-link>
      </div>
      <div class="flex items-end justify-between max-sm:hidden">
        <div class="relative w-full">
          <v-input :height="45" placeholder="Tìm kiếm" input-classes="!pl-7" />
          <Icons-Search
            class="absolute top-1/2 left-4 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div class="">
        <div class="sm:hidden max-sm:pr-4" @click="menushow = true">
          <Icons-List />
        </div>
        <popup-menu :is-show="menushow" @close="menushow = false" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menushow: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import 'Header.scss';
// .nuxt-link-active {
//   @apply text-black;
//   font-weight: 500;
// }
.exact-active {
  @apply text-black;
  font-weight: 500;
}

</style>
