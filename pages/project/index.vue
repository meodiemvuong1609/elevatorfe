<template>
  <div class="flex flex-col gap-0 max-sm:gap-4">
    <div class="bg-banner">
      <div class="fill w-full h-full flex justify-center items-center">
        <p class="font-bold text-3xl text-white">DỰ ÁN</p>
      </div>
    </div>
    <!-- <div>
      <Flickity
        class="carousel hidden sm:block"
        :options="{
          wrapAround: true,
          pageDots: false,
          prevNextButtons: false,
        }"
        ref="flickity"
      >
        <div class="carousel-cell">
          <img src="~/assets/img/banner-intro.jpeg" alt="">
        </div>
      </Flickity>

        <Flickity
        class="carousel sm:hidden"
        :options="{
          wrapAround: true,
          pageDots: false,
          prevNextButtons: true,
          autoPlay: 5000
        }"
        ref="flickity"
      >
        <div class="carousel-cell">
          <img src="~/assets/img/banner-sm.png" alt="">
        </div>

      </Flickity>
    </div> -->
    <ProjectCard />
    <Products/>
    <div class="section-connect w-full h-fit mt-20 max-sm:mt-5">
      <div class="fill w-full flex justify-center pb-10">
        <div class="content px-4 py-10 w-full sm:w-[450px]">
          <p class="text-white text-3xl font-bold text-center my-5">TƯ VẤN VÀ BÁO GIÁ</p>
          <div class="flex flex-col gap-3">
            <v-input placeholder="Họ và tên"/>
            <v-input placeholder="Email"/>
            <v-input placeholder="Số điện thoại liên hệ"/>
            <v-input type="textarea" :resize="false" :rows="5" placeholder="Chúng tôi có thể giúp gì cho bạn?"/>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[40px]"></div>
  </div>
</template>

<script>
export default {
  name: 'Project',

}
</script>

<style>

</style>
