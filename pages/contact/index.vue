<template>
  <div class="contact-container p-5">
    <div class="flex justify-center items-center">
      <p>LIÊN HỆ</p>
    </div>
    <div class="flex flex-col sm:flex-row mt-10">
      <div class="w-full sm:w-1/2 flex flex-col gap-5">
        <div class="">
          <p class="font-bold text-lg text-center">CÔNG TY TNHH CÔNG NGHỆ THANG MÁY HƯNG PHÁT</p>
          <p class="font-bold text-base text-center">HUNG PHAT EVEVATOR TECHNOLAGY COMPANY LIMITED</p>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col sm:flex-row gap-10">
            <div
              v-for="(item, index) in contactData"
              :key="index"
              class="flex flex-col gap-2 text-sm"
            >
              <p class="title font-bold text-lg">{{ item.title }}</p>
              <p class="address">{{ item.address }}</p>
              <p class="phone">{{ item.phone }}</p>
              <p class="email">{{ item.email }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2"></div>
    </div>
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
};
</script>

<style></style>
