<template>
  <div class="grid">
    <div class="bg-banner">
      <div class="fill w-full h-full flex justify-center items-center">
        <p class="font-bold text-2xl sm:text-3xl text-white text-center px-4">DỊCH VỤ CỦA CHÚNG TÔI</p>
      </div>
    </div>
    <!-- <p class="text-center font-bold text-3xl pt-5">DỊCH VỤ CỦA CHÚNG TÔI</p> -->

    

    <div class="px-6 py-12 max-sm:p-4">
      <div
        class="content grid grid-cols-2 w-3/4 mx-auto gap-4 sm:gap-12 mt-4 max-sm:grid-cols-1 max-sm:w-full"
      >
        <div class="rounded-lg">
          <img
            src="https://thangmaytienphat.vn/wp-content/uploads/2020/12/Tieu-chuan-thang-may-700x393.jpg"
            class="w-full h-auto object-cover rounded-lg"
            alt=""
          />
        </div>
        <div class="grid gap-4">
          <p class="text-2xl font-bold text-green-dark">LẮP ĐẠT THANG MÁY</p>
          <P
            >Với đặc thù thang máy là sản phẩm kết tinh của hàng ngàn cấu kiện
            thiết bị. Chúng tôi hiểu rằng để một cỗ máy vận hành êm ái thì tất
            cả các chi tiết đều phải lắp đặt chính xác và phải thực sự haonf
            hảo.</P
          >
          <p>
            Vì vậy việc đào tạo đội ngũ lắp đặt vận hành một yếu tố thiết yếu để
            không ngừung nâng cao chất lượng hoạt động của
            <b>Thang máy Hưng Phát</b>. Hướng đến mục đích cao nhất là chất
            lượng hoạt động của thang máy luôn an toàn, êm ái, nâng cao tổi thọ
            của thang máy
          </p>
        </div>
      </div>
    </div>
    <div class="px-6 py-12 max-sm:p-4">
      <div
        class="content grid grid-cols-2 w-3/4 mx-auto gap-4 sm:gap-12 mt-4 max-sm:grid-cols-1 max-sm:w-full"
      >
        <div class="grid gap-4">
          <p class="text-2xl font-bold text-green-dark">BẢO TRÌ THANG MÁY</p>
          <P
            >Thang máy ra đời là bước ngoạt giúp con người đạt tới các đỉnh cao
            mới của các toà nhà chọc trời. Với những lợi ích mang lại như tiện
            lợi, nhanh chóng thực sự hiệu quả về kinh tế, thực tế thang máy hiện
            nay không thể thiếu trong các cáo ốc, toà nhà văn phòng, trung tâm
            thương mại và thậm chí trong các biệt thự nhà phố, gia đình,...
          </P>
          <p>
            Tuy nhiên do hoạt động với cường độ cao nên cũng không tránh khỏi
            những lúc thang máy xảy ra sự cố không thể hoạt động. Dịch vụ bảo
            trì bảo dưỡng 24/7 của <b>Thang máy Hưng Phát</b> luôn lắng nghe và
            sẵn sàng đáp ứng tất cả các yêu cầu dịch vụ của Quý khách hàng. Luôn
            luôn đồng hành, phục vụ kịp thời, nhanh chóng là phương châm hành
            động của chúng tôi nhằm mang lại sự tin tưởng tuyệt đối của khách
            hàng với <b>Thang máy Hưng Phát</b>.
          </p>
        </div>
        <div class="rounded-lg">
          <img
            src="https://tapchithangmay.vn/apps/uploads/2021/11/DAV_2464-scaled.jpg"
            class="w-full h-auto object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-light-1 py-20">
      <div
        class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center"
      >
        DỊCH VỤ HỖ TRỢ
      </div>
      <div class="flex items-center justify-center p-4">
        <div class="line"></div>
      </div>
      <div
        class="w-3/4 mx-auto grid grid-cols-3 gap-3 p-4 max-sm:grid-cols-1 sm:gap-6 max-sm:w-full sm:p-6"
      >
        <div class="p-6 boxshadow flex flex-col gap-4 items-center justify-between">
          <p class="text-xl font-bold">Tư vấn miễn phí</p>
          <p class="text-center">
            Khảo sát nhu cầu sử dụng, tư vấn giải pháp thang máy phù hợp với nhu
            cầu và ngân sách của khách hàng.
          </p>
          <v-button type="primary" class="w-full"  @click="$router.push('/contact')">Liên hệ ngay</v-button>
        </div>
        <div class="p-6 boxshadow flex flex-col gap-4 items-center justify-between">
          <p class="text-xl font-bold">Thiết kế bản vẽ</p>
          <p class="text-center">
            Cung cấp bản vẽ thiết kế chi tiết cho hố thang máy, phòng máy và các
            chi tiết kỹ thuật khác.
          </p>
          <v-button type="primary" class="w-full" @click="$router.push('/contact')">Liên hệ ngay</v-button>
        </div>
        <div class="p-6 boxshadow flex flex-col gap-4 items-center justify-between">
          <p class="text-xl font-bold">Báo giá</p>
          <p class="text-center">
            Cung cấp báo giá chi tiết cho thang máy, bao gồm giá sản phẩm, chi
            phí lắp đặt, thuế VAT, bảo hành...
          </p>
          <v-button type="primary" class="w-full" @click="$router.push('/contact')">Liên hệ ngay</v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dịch vụ",
      meta: [{ hid: "description", name: "description", content: "Dịch vụ lắp đặt, bảo trì thang máy 24/7, tư vấn miễn phí, thiết kế bản vẽ và báo giá chi tiết từ Thang máy Hưng Phát." }],
    };
  },
  name: "IndexPage",
  created() {},
  methods: {
  }
};
</script>

