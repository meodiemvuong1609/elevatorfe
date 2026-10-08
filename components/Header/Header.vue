<template>
  <header class="flex h-[80px] custom-gradient fixed top-0 left-0 right-0 z-50">
    <div
      class="flex items-center mx-auto w-full px-3 sm:px-6 xl:w-5/6 xl:px-0 justify-between gap-3"
    >
      <nuxt-link to="/" class="flex items-center shrink-0" aria-label="Trang chủ Thang máy Hưng Phát">
        <img
          src="~/assets/img/hungphat.png"
          class="h-[44px] min-[375px]:h-[48px] sm:h-[56px] w-auto shrink-0"
          alt="Logo Thang máy Hưng Phát"
        />
        <div class="ml-2 min-w-0">
          <div class="font-bold text-sm min-[375px]:text-base sm:text-xl 2xl:text-2xl text-header whitespace-nowrap leading-tight">
            THANG MÁY HƯNG PHÁT
          </div>
          <div class="text-header font-normal text-xs min-[375px]:text-sm sm:text-base 2xl:text-lg leading-tight whitespace-nowrap">
            HUNG PHAT ELEVATOR
          </div>
        </div>
      </nuxt-link>
      <nav class="hidden lg:flex items-center gap-5 text-gray-dark whitespace-nowrap">
        <nuxt-link to="/" exact-active-class="exact-active"> Trang chủ </nuxt-link>
        <nuxt-link to="/introduce" exact-active-class="exact-active"> Giới thiệu </nuxt-link>
        <nuxt-link to="/products" exact-active-class="exact-active"> Sản phẩm </nuxt-link>
        <nuxt-link to="/service" exact-active-class="exact-active"> Dịch vụ </nuxt-link>
        <nuxt-link to="/project" exact-active-class="exact-active"> Dự án </nuxt-link>
        <nuxt-link to="/contact" exact-active-class="exact-active"> Liên hệ </nuxt-link>
      </nav>
      <div class="hidden 2xl:flex items-end justify-between">
        <div class="relative w-full">
          <v-input :height="45" placeholder="Tìm kiếm" input-classes="!pl-7" />
          <Icons-Search
            class="absolute top-1/2 left-4 transform -translate-y-1/2"
          />
        </div>
      </div>
      <button
        type="button"
        class="lg:hidden p-2 -mr-2 shrink-0"
        aria-label="Mở menu"
        @click="menushow = true"
      >
        <Icons-List />
      </button>
      <popup-menu :is-show="menushow" @close="menushow = false" />
    </div>
  </header>
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
