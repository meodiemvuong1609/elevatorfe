<template>
  <div class="w-3/4 mx-auto grid grid-cols-2 gap-3 p-4 max-sm:grid-cols-1 sm:gap-6 max-sm:w-full sm:p-6">
    <div class="relative ">
      <img src="~/assets/img/feature1.jpeg" alt="">
      
      <div class="absolute inset-0 flex items-center p-2 justify-center">
        <div class="text-center text-xl text-white font-bold">AN TOÀN TUYỆT ĐỐI</div>
      </div>
    </div>

    <div class="relative">
      <img src="~/assets/img/feature2.jpeg" alt="">
      
      <div class="absolute inset-0 flex items-center p-2 justify-center">
        <div class="text-center text-xl text-white font-bold">TRẢI NGHIỆM TUYỆT VỜI</div>
      </div>
    </div>

    <div class="relative">
      <img src="~/assets/img/feature3.jpeg" alt="">
      
      <div class="absolute inset-0 flex items-center p-2 justify-center">
        <div class="text-center text-xl text-white font-bold">THẨM MỸ CÁ NHÂN</div>
      </div>
    </div>

    <div class="relative">
      <img src="~/assets/img/feature4.jpeg" alt="">
      
      <div class="absolute inset-0 flex items-center p-2 justify-center">
        <div class="text-center text-xl text-white font-bold">DỊCH VỤ TRỌN ĐỜI</div>
      </div>
    </div>

    <div class="relative">
      <img src="~/assets/img/feature5.jpeg" alt="">
      
      <div class="absolute inset-0 flex items-center p-2 justify-center">
        <div class="text-center text-xl text-white font-bold">CHI PHÍ TỐI ƯU</div>
      </div>
    </div>

    <div class="relative">
      <img src="~/assets/img/feature6.jpeg" alt="">
      
      <div class="absolute inset-0 flex items-center p-2 justify-center">
        <button class="text-center text-lg text-white font-bold bg-red px-4 py-2 rounded-[95px]">

          ĐẶT LỊCH TƯ VẤN
        </button>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'Feature'

}
</script>

<style lang="scss" scoped>

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  opacity:  0.9;
  
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.04);
  }
  filter: brightness(0.5);
}

</style>