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
          <img src="~/assets/img/banner-sm.jpg" alt="">
        </div>

      </Flickity>
    </div> -->
    <ProjectCard />
    <Products/>
    <ConsultForm wrapper-class="mt-20 max-sm:mt-5" />
    <div class="h-[40px]"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dự án",
      meta: [{ hid: "description", name: "description", content: "Một số dự án thang máy gia đình Hưng Phát đã và đang thực hiện tại Hà Nội, Thanh Hóa và các tỉnh thành." }],
    };
  },
  name: 'Project',

}
</script>

