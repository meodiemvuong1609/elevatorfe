<template>
  <div>
    <div class=" grid gap-4">
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

      <div class="p-6">
        <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
          HUNG PHAT ELEVATOR
        </div>
        <div class="flex items-center justify-center p-4">
          <div class="line"></div>
        </div>
        <div class=" w-3/5 mx-auto text mt-4">
          <div class=" text-gray-1 text-center">
            Bắt đầu từ những chiếc thang máy gia đình có trải nghiệm tốt nhất, an toàn nhất, thẩm mỹ cá nhân hóa với giá cả cạnh tranh. Thang máy Hưng Phát không ngừng nỗ lực và cải tiến để mang đến cho khách hàng trải nghiệm mua hàng tốt nhất, dịch vụ sau mua hàng chất lượng và tận tâm.
          </div>
        </div>
      </div>

      <div class="p-6 bg-gray-light-1">
        <div>
          <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
            GIÁ TRỊ CỐT LỖI CỦA CHÚNG TÔI
          </div>
          <div class="flex items-center justify-center p-4">
            <div class="line"></div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script src="https://sp.zalo.me/plugins/sdk.js"></script>

<script>
export default {
  name: 'Introduce',

}
</script>

<style lang="scss" scoped>

.carousel-cell {
  width: 100%;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 500px;
  }
}

.line {
  background: #004c84;
  width: 100px;
  height: 2px;
}

</style>