<template>
  <div class="contact-container">
    <div class="bg-banner flex justify-center items-center">
      <p class="font-bold text-3xl text-white">LIÊN HỆ</p>
    </div>
    <div class="flex flex-col p-4 sm:flex-row gap-5 mt-10 sm:px-[15%]">
      <div class="w-full sm:w-1/2 flex flex-col gap-5">
        <div class="">
          <p class="font-bold text-lg mb-10">
            CÔNG TY TNHH CÔNG NGHỆ THANG MÁY HƯNG PHÁT
          </p>
          <!-- <p class="font-bold text-base">HUNG PHAT EVEVATOR TECHNOLAGY COMPANY LIMITED</p> -->
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-12">
            <div
              v-for="(item, index) in contactData"
              :key="index"
              class="flex flex-col gap-2 text-sm"
            >
              <div class="flex gap-4 items-center title font-bold text-lg">
                <span>{{ item.title }}</span>
              </div>
              <!-- <div class="w-[300px] h-[180px] rounded-lg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QjWZ4HN4mVML0loV7HCQ_upXCmogUiX0Xw&s" alt="" class="w-full h-full rounded-lg object-cover">
              </div> -->
              <div class="flex items-start gap-1 address">
                <div class="pt-1 pr-1">
                  <Icons-Location />
                </div>
                : {{ item.address }}
              </div>

              <div class="flex gap-1 items-center phone text-blue">
                <Icons-Phone /> :
                <a :href="`tel:${item.phone}`">{{ item.phone }}</a>
              </div>
              <div class="flex gap-1 items-center email text-blue">
                <Icons-Email /> :
                <a :href="`mailto:${item.email}`"> {{ item.email }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2">
        <MapLocation :height="isMobile ? '40vh' : '80vh'" :isBorderRadius="true" />
      </div>
    </div>
    <div class="section-connect w-full h-fit mt-8">
      <div class="fill w-full flex justify-center pb-10">
        <div class="content px-4 py-10 w-full sm:w-[450px]">
          <p class="text-white text-3xl font-bold text-center my-5">TƯ VẤN VÀ BÁO GIÁ</p>
          <div class="flex flex-col gap-3">
            <v-input placeholder="Họ và tên"/>
            <v-input placeholder="Email"/>
            <v-input placeholder="Số điện thoại liên hệ"/>
            <v-input type="textarea" :resize="false" :rows="5" placeholder="Chúng tôi có thể giúp gì cho bạn?"/>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[100px]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactData: [
        {
          title: "Trụ sở chính",
          address: "Số 8, ngõ 9, Dương Quảng Hàm, Quan Hoa, Cầu Giấy, Hà Nội",
          phone: "090.1987.666",
          email: "hungphatlift@elevator.vn",
        },
        {
          title: "Văn phòng Quảng Ninh",
          address:
            "Số 100, Đ. Đội Cấn, Tổ 7, Khu 5, P.Giếng Đáy, TP.Hạ Long, T.Quảng Ninh",
          phone: "090.1987.666",
          email: "hungphatlift@elevator.vn",
        },
        {
          title: "Văn phòng Thanh Hoá",
          address: "Số 8, ngõ 9, Dương Quảng Hàm, Quan Hoa, Cầu Giấy, Hà Nội",
          phone: "090.1987.666",
          email: "hungphatlift@elevator.vn",
        },
        {
          title: "Văn phòng Hồ Chí Minh",
          address: "Số 22 đường Phú Thứ, Phường Phú Sơn, Thanh phố Thanh Hoá",
          phone: "090.1987.666",
          email: "hungphatlift@elevator.vn",
        },
        {
          title: "Nhà máy sản xuất",
          address:
            "Số 497/73/14 Phan Văn Trí, Phường 5, Quận Gò Vấp, Thành phố Hồ Chí Minh",
          phone: "090.1987.666",
          email: "hungphatlift@elevator.vn",
        },
      ],
    };
  },
  mounted() {
  }
};
</script>

<style>
.bg-banner {
  height: 200px;
  background-image: url("@/assets/img/feature3.jpeg");
  background-size: cover;
  background-position: start;
}
.section-connect {
  background-image: url(https://thangmayght.com/wp-content/uploads/2022/11/thang-may-van-phong-9.png);
  background-position: 50% 50%;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.fill{

  background-color: rgba(0, 0, 0, 0.5);
}
</style>
