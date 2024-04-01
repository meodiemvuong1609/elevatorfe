<template>
  <div>
    <Header />
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

      <div class="p-4">
        <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
          CÔNG TY TNHH CÔNG NGHỆ THANG MÁY HƯNG PHÁT
        </div>
        <div class=" w-2/3 mx-auto text text-lg mt-4">
          <div class=" text-gray-1 text-center">
            Hoạt động trong lĩnh vực thang máy gia đình trên 10 năm giúp chúng tôi hiểu được ngôi nhà của bạn. Hưng Phát luôn đồng hành cùng công trình ngay từ khi thai nghén ý tưởng, tư vấn phương án thang máy tối ưu, phối hợp cùng các đơn vị thi công liên quan, thực hiện công tác chuẩn bị, triển khai lắp đặt và vận hành thang máy theo đúng tiêu chuẩn an toàn.
          </div>
          <div class=" mt-2 text-gray-1">
            Chuyên gia tư vấn giải pháp, nhà cung cấp, lắp đặt và bảo hành, bảo trì thang máy cho Villa, biệt thự, Shophouse, nhà cải tạo, nhà văn phòng cho thuê, nhà ống, chung cư, bệnh viện ...
          </div>
        </div>
      </div>

    </div>
    <Footer />
    
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

</style>