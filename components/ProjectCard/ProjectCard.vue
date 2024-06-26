<template>
   <div class="p-[10%] py-[90px] max-sm:p-4">
    <div class="">
      <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
        MỘT SỐ DỰ ÁN ĐÃ VÀ ĐANG THỰC HIỆN
      </div>
      <div class="flex items-center justify-center p-4">
        <div class="line"></div>
      </div>
      <div class="content grid grid-cols-3 mx-auto gap-4 mt-4 max-sm:grid-cols-1 max-sm:w-full">
        <div v-for="(item, index) in data" :key="index" class="bg-gray-light-1 border border-gray-light" >
          <Flickity
            class="carousel"
            :options="{
              pageDots: false,
              prevNextButtons: true,
              autoPlay: 5000
            }"
            ref="flickity"
          >
            <div v-for="(img, indexImg) in item.imgs" :key="indexImg" class="carousel-cell w-full">
              <img :src="img" alt="" class="h-[410px] w-full object-cover">
            </div>
          </Flickity>
          <div class="p-4 grid gap-3">
            <div class="font-bold">{{ item.name }}</div>
            <div class="flex items-center gap-2"><icons-building/>{{ item.building }}</div>
            <div class="flex items-center gap-2"><icons-weight/>{{ item.weight }}</div>
            <div class="flex items-center gap-2"><icons-speed/>{{ item.speed }}</div>
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
      data: [
        {
        name: 'Anh Linh – Xã Đàn – Đống Đa – Hà Nội',
        imgs: [require('~/assets/img/project/p11.jpg'),require('~/assets/img/project/p12.jpg')],
        building: '4 tầng',
        weight: '400kg',
        speed: '0.3m/s',
      },

        {
        name: 'Anh Quyền – Khu đô thị Vinhomes Thanh Hóa',
        imgs: [require('~/assets/img/project/p21.jpg'),require('~/assets/img/project/p22.jpg')],
        building: '4 tầng',
        weight: '400kg',
        speed: '0.3m/s',
      },
      {
        name: 'Anh Năm – Khu đô thị Văn Quán – Hà Đông – Hà Nội',
        imgs: [require('~/assets/img/project/p31.jpg'),require('~/assets/img/project/p32.jpg')],
        building: '4 tầng',
        weight: '400kg',
        speed: '0.3m/s',
      },
    ]
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
