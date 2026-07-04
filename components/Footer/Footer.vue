<template>
  <div class="footer">
    <div class="w-full custom-gradient">
      <div class="px-4 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:px-[15%]">
        <div class="block" >
          <div>
            <div class="text-white text-xl">GIỚI THIỆU</div>
            <div class="text-white box-border mt-4 mr-5"><strong>Hưng Phát</strong> luôn xác định và hiểu rõ nhu cầu của khách hàng, cung cấp giải pháp cá nhân hóa nhanh chóng, phù hợp với thiết kế của từng ngôi nhà cũng như nhu cầu sử dụng của khách hàng <br>
            </div>
          </div>
          <div>
            <div class="text-white text-xl pt-6">THÔNG TIN LIÊN HỆ</div>
            <div class="flex pt-4 gap-2 items-center">
              <Icons-Phone />
              <div class="text-white "> 090.1987.666 </div>
            </div>
            <div class="flex pt-2 gap-2 items-center">
              <Icons-Email />
              <div class="text-white "> hungphatlift@elevator.vn </div>
            </div>
            <div class="flex pt-2 gap-2 items-center">
              <Icons-Facebook />
              <div class="text-white"> facebook.com/hungphatelevator </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="text-white text-xl">ĐỊA CHỈ CÔNG TY</div>
          <div class="flex pt-4 gap-2 items-start">
            <div class="pt-2">
              <Icons-Location />
            </div>
            <div class="text-white "> Số 51, Lô F3, KĐT Đại Kim, phường Định Công, Hà Nội </div>
          </div>
          <div class="flex pt-2 gap-2 items-start">
            <div class="pt-2">
              <Icons-Location />
            </div>
            <div class="text-white "> Lô LK23-09, KĐT Xuân Hưng, phường Đông Quang, tỉnh Thanh Hóa </div>
          </div>
          <div class="flex pt-2 gap-2 items-start">
            <div class="pt-2">
              <Icons-Location />
            </div>
            <div class="text-white "> Số 100, đường Đội Cấn, Tổ 7, Khu 5, phường Việt Hưng, tỉnh Quảng Ninh </div>
          </div>
          <div class="flex pt-2 gap-2 items-start">
            <div class="pt-2">
              <Icons-Location />
            </div>
            <div class="text-white "> Khu phố Trà Thượng, xã Thiệu Trung, tỉnh Thanh Hóa </div>
          </div>
          <div class="flex pt-2 gap-2 items-start">
            <div class="pt-2">
              <Icons-Location />
            </div>
            <div class="text-white "> Số 497/73/14 Phan Văn Trị, Phường An Nhơn, Thành phố Hồ Chí Minh </div>
          </div>
        
        </div>
        <div class="">
          <div class="text-white text-xl">KẾT NỐI VỚI HƯNG PHÁT</div>
          <div class="pt-4">
            <MapLocation />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright flex items-center justify-center text-white p-2 gap-1">
      Copyright 2024 © <p><strong> Hưng Phát</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      
    }
  },


}
</script>

<style lang="scss" scoped>
@import 'Footer.scss';
</style>