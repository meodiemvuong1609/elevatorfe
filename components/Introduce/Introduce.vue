<template>
  <div class="p-4 sm:px-[10%]">
    <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
      CÔNG TY TNHH CÔNG NGHỆ THANG MÁY HƯNG PHÁT
    </div>
    <div class="flex items-center justify-center p-4">
      <div class="line"></div>
    </div>
    <div class="mx-auto grid grid-cols-2 gap-3 max-sm:grid-cols-1 sm:gap-6 max-sm:w-full">
      <div class="">
        <div class="">
          <div class="flex py-3 font-bold text-xl items-center justify-start ">
            Giới thiệu về chúng tôi
          </div>
          <div class=" text-gray-1">
            Hoạt động trong lĩnh vực thang máy gia đình trên 10 năm giúp chúng tôi hiểu được ngôi nhà của bạn. Hưng Phát luôn đồng hành cùng công trình ngay từ khi thai nghén ý tưởng, tư vấn phương án thang máy tối ưu, phối hợp cùng các đơn vị thi công liên quan, thực hiện công tác chuẩn bị, triển khai lắp đặt và vận hành thang máy theo đúng tiêu chuẩn an toàn.
          </div>
          <div class=" mt-2 text-gray-1">
            Chuyên gia tư vấn giải pháp, nhà cung cấp, lắp đặt và bảo hành, bảo trì thang máy cho Villa, biệt thự, Shophouse, nhà cải tạo, nhà văn phòng cho thuê, nhà ống, chung cư, bệnh viện ...
          </div>
        </div>
        <button class="w-full self-end py-2 px-4 mt-6 flex items-end justify-center bg-red-dark-2 text-white rounded-large font-bold rounded-lg" @click="$router.push('/introduce')">Đọc thêm</button>
      </div>
      <div class="">
        <div class="flex items-center justify-between">
          <img src="~/assets/img/feature5.jpeg" class=" h-[320px] w-full rounded-lg border border-gray-light-1 max-sm:h-[250px]" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduce',
  data() {
    return {
    }
  },

}
</script>

<style scoped>
.line {
  background: #004c84;
  width: 100px;
  height: 2px;
}
</style>