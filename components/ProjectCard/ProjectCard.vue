<template>
   <div class="p-6 max-sm:p-4">
    <div>
      <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
        MỘT SỐ DỰ ÁN ĐÃ VÀ ĐANG THỰC HIỆN
      </div>
      <div class="flex items-center justify-center p-4">
        <div class="line"></div>
      </div>
      <div class="content grid grid-cols-3 w-5/6 mx-auto gap-4 mt-4 max-sm:grid-cols-1 max-sm:w-full">
        <div class="bg-gray-light-1 border border-gray-light" >
          <Flickity
            class="carousel" 
            :options="{
              pageDots: false,
              prevNextButtons: true,
              autoPlay: 5000
            }"
            ref="flickity"
          >
            <div class="carousel-cell">
              <img src="~/assets/img/project/p11.jpg" alt="">
            </div>
            <div class="carousel-cell">
              <img src="~/assets/img/project/p12.jpg" alt="">
            </div>
          </Flickity>
          <div class="p-4">
            <p class=" font-bold">Anh Linh – Xã Đàn – Đống Đa – Hà Nội</p>
            <p class=" font-bold">4 tầng</p>
            <p class=" font-bold">400kg</p>
          </div>
        </div>
        <div class="bg-gray-light-1 border border-gray-light" >
          <Flickity
            class="carousel" 
            :options="{
              pageDots: false,
              prevNextButtons: true,
              autoPlay: 5000
            }"
            ref="flickity"
          >
            <div class="carousel-cell">
              <img src="~/assets/img/project/p21.jpg" alt="">
            </div>
            <div class="carousel-cell">
              <img src="~/assets/img/project/p22.jpg" alt="">
            </div>
          </Flickity>
          <div class="p-4">
            <p class=" font-bold">Anh Quyền – Khu đô thị Vinhomes Thanh Hóa</p>
            <p class=" font-bold">4 tầng</p>
            <p class=" font-bold">400kg</p>
          </div>
        </div>

        <div class="bg-gray-light-1 border border-gray-light" >
          <Flickity
            class="carousel" 
            :options="{
              pageDots: false,
              prevNextButtons: true,
              autoPlay: 5000
            }"
            ref="flickity"
          >
            <div class="carousel-cell">
              <img src="~/assets/img/project/p31.jpg" alt="">
            </div>
            <div class="carousel-cell">
              <img src="~/assets/img/project/p32.jpg" alt="">
            </div>
          </Flickity>
          <div class="p-4">
            <p class=" font-bold">Anh Năm – Khu đô thị Văn Quán – Hà Đông – Hà Nội</p>
            <p class=" font-bold">5 tầng</p>
            <p class=" font-bold">400kg</p>
          </div>
        </div>

      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
.line {
  background: #004c84;
  width: 100px;
  height: 2px;
}


</style>
