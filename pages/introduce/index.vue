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

      <div class="p-6 max-sm:p-4">
        <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
          HUNG PHAT ELEVATOR
        </div>
        <div class="flex items-center justify-center p-4">
          <div class="line"></div>
        </div>
        <div class=" w-3/5 mx-auto text mt-4 max-sm:w-full max-sm:px-4">
          <div class=" text-gray-1 text-center">
            Bắt đầu từ những chiếc thang máy gia đình có trải nghiệm tốt nhất, an toàn nhất, thẩm mỹ cá nhân hóa với giá cả cạnh tranh. Thang máy Hưng Phát không ngừng nỗ lực và cải tiến để mang đến cho khách hàng trải nghiệm mua hàng tốt nhất, dịch vụ sau mua hàng chất lượng và tận tâm.
          </div>
        </div>
      </div>

      <div class="px-6 bg-gray-light-1 py-12 max-sm:p-4">
        <div>
          <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
            GIÁ TRỊ CỐT LỖI CỦA CHÚNG TÔI
          </div>
          <div class="flex items-center justify-center p-4">
            <div class="line"></div>
          </div>
          <div class="content grid grid-cols-3 w-3/4 mx-auto gap-4 mt-4 max-sm:grid-cols-1 max-sm:w-full">
            <div class="bg-white p-6 border border-gray-light" >
              <p class=" text-xl font-bold text-center pb-4">Chất lượng vượt trội</p>
              <div class="text-center">
                Chúng tôi sử dụng công nghệ hiện đại, vật liệu cao cấp và quy trình sản xuất nghiêm ngặt để đảm bảo mỗi thang máy đều đạt tiêu chuẩn chất lượng cao nhất trên thị trường.
              </div>
            </div>
            <div class="bg-white p-6 border border-gray-light">
              <p class=" text-xl font-bold text-center pb-4">An toàn tuyệt đối</p>
              <div class="text-center">Thang máy của Hưng Phát được trang bị hệ thống an toàn tiên tiến như phanh khẩn cấp, cảm biến va chạm, đảm bảo an toàn tuyệt đối cho người sử dụng trong mọi tình huống.</div>
            </div>

            <div class="bg-white p-6 border border-gray-light">
              <p class=" text-xl font-bold text-center pb-4">Thiết kế hiện đại</p>
              <div class="text-center">Thang máy Hưng Phát có thiết kế hiện đại, sang trọng, phù hợp với nhiều kiểu kiến trúc khác nhau, mang đến vẻ đẹp và sự hài hòa cho không gian sống.</div>
            </div>
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