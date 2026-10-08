<template>
  <div class="border-b border-gray-light-1">
    <Flickity
      class="carousel max-sm:hidden"
      :options="{
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: 5000,
      }"
    >
      <div class="carousel-cell">
        <img src="~/assets/img/banner-lg.jpg" alt="Thang máy Hưng Phát" />
      </div>
      <div class="carousel-cell">
        <img src="~assets/img/banner2.jpg" alt="Thang máy gia đình Hưng Phát" />
      </div>
    </Flickity>
    <Flickity
      class="carousel sm:hidden"
      :options="{
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: 5000,
      }"
    >
      <div class="carousel-cell">
        <img src="~/assets/img/banner-sm.jpg" alt="Thang máy Hưng Phát" />
      </div>
      <div class="carousel-cell">
        <img src="~assets/img/products/img3.webp" alt="Thang máy gia đình" />
      </div>
    </Flickity>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
.carousel-cell {
  width: 100%;
  // margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>
