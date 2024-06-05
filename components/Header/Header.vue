<template>
  <div class="flex h-[110px] custom-gradient relative">
    <div class="flex items-center mx-auto w-5/6 justify-between sm:gap-4 max-sm:w-full">
      <div class="flex items-center justify-center">
        <div class="flex items-center sm:ml-4">
          <img src="~/assets/img/hungphat.png" class=" h-[150px] mt-4" alt="">
        </div>
        <div class="flex-row ml-2">
          <div class="bo font-bold text-2xl max-sm:text-xl text-header text-nowrap">
            THANG MÁY HƯNG PHÁT
          </div>
          <div class=" text-header font-normal text-lg ">
            HUNG PHAT ELEVATOR
          </div>
        </div>
      </div>
      <div class="flex items-center gap-5 max-sm:hidden">
        <nuxt-link to="/">
          <div class=" text-lg text-nowrap">Trang chủ</div>
        </nuxt-link>
        <nuxt-link to="/introduce">
          <div class=" text-lg text-nowrap">Giới thiệu</div>
        </nuxt-link>
        <nuxt-link to="">
          <div class=" text-lg text-nowrap">Sản phẩm</div>
        </nuxt-link>
        <nuxt-link to="/project">
          <div class=" text-lg text-nowrap">Dự án</div>
        </nuxt-link>
        <nuxt-link to="">
          <div class=" text-lg text-nowrap">Liên hệ</div>
        </nuxt-link>

      </div>
      <div class="flex items-end justify-between max-sm:hidden">
        <div class="relative w-full">
          <v-input 
            :height="45" 
            placeholder="Tìm kiếm" 
            input-classes="!pl-7" 
          />
          <Icons-Search class="absolute top-1/2 left-4 transform -translate-y-1/2" />
        </div>
      </div>
      <div class="">
        <div class="sm:hidden max-sm:pr-4" @click="menushow=true">
          <Icons-List />
        </div>
        <popup-menu :is-show="menushow" @close="menushow = false"/>
        <!-- <div v-if="menushow" class="">
          <div class="absolute sidebar">
            <div class="my-6 text-red font-semibold " @click="handleRoute('/')">Trang chủ</div>
            <div class="my-6 text-red font-semibold " @click="handleRoute('/introduce')">Giới thiệu</div>
            <div class="my-6 text-red font-semibold " @click="handleRoute('/')">Sản phẩm</div>
            <div class="my-6 text-red font-semibold " @click="handleRoute('/project')">Dự án</div>
            <div class="my-6 text-red font-semibold " @click="handleRoute('/')">Liên hệ</div>
          </div>
        </div> -->
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      menushow: false
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

@import 'Header.scss';

</style>