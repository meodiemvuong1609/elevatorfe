<template>
  <div class="product-container flex flex-col gap-4">
    <div data-aos="zoom-in" data-aos-delay="100" class="w-full sm:h-[400px]">
      <img
        src="~assets/img/banner2.png"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex flex-col p-4 gap-12 sm:gap-20 mt-5 sm:px-[10%]">
      <p class="text-center text-xl font-bold">SẢN PHẨM</p>
      <div class="content">
        <p class="text-center text-3xl font-bold mb-12">THANG MÁY TẢI KHÁCH</p>
        <p>
          <b>Thang máy tải khách</b> có kích thước tải trọng từ 200kg, 300kg,
          400kg, 450kg, 500kg được nhập khẩu nguyên chiếc từ Châu Âu. Với thiết
          kế linh hoạt theo thực tế ngôi nhà, mẫu mã đa dạng, chất lượng Châu
          Âu.
        </p>
      </div>
      <div class="infor">
        <p class="text-center text-3xl font-bold mb-12">KÍCH THƯỚC THANG MÁY</p>
        <img src="~assets/img/products/information1.png" alt="" />
      </div>
      <div class="safe-feature">
        <p class="text-center text-3xl font-bold mb-12">
          TÍNH NĂNG AN TOÀN TIÊU CHUẨN
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div
            v-for="(item, index) in freature"
            :key="index"
            class="flex flex-col gap-4"
          >
            <div class="title flex gap-4">
              <component :is="item.icon" />
              <p class="font-bold text-base pt-2">{{ item.title }}</p>
            </div>
            <p>{{ item.des }}</p>
          </div>
        </div>
      </div>
      <div class="cabin-feature">
        <p class="text-center text-3xl font-bold mb-12">CABIN THANG MÁY</p>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div
            v-for="(item, index) in cabinDatas.slice(0, 10)"
            :key="index"
            class="flex flex-col boxshadow relative h-full pb-14"
          >
            <img :src="item.img" alt="" class="h-[300px]" />
            <div class="p-4">
              <p class="text-xl font-bold">{{ item.code }}</p>
              <p class="text-sm"><b>Vách: </b>{{ item.wall }}</p>
              <p class="text-sm"><b>Cửa: </b>{{ item.door }}</p>
              <p class="text-sm"><b>Trần: </b>{{ item.ceiling }}</p>
              <p class="text-sm"><b>Sàn: </b>{{ item.floor }}</p>
              <p class="text-sm"><b>Tay vịn: </b>{{ item.handrail }}</p>
              <p class="text-sm">
                <b>Bảng điều khiển: </b>{{ item.controlPanel }}
              </p>
            </div>
            <div class="p-4 absolute bottom-0 w-full">
              <v-button
                type="primary"
                class="w-full"
                @click="$router.push('/cabins')"
                >Xem thêm</v-button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="img-feature flex flex-col gap-5">
        <p class="text-center text-3xl font-bold mb-12">
          ẢNH & THIẾT KẾ THANG MÁY
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <img
            data-aos="fade-right"
            src="~assets/img/products/img3.webp"
            alt=""
            class="h-[280px] w-full"
          />
          <img
          data-aos="fade-left"
            src="~assets/img/products/img6.webp"
            alt=""
            class="h-[280px] w-full"
          />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col gap-4">
            <img
              src="~assets/img/products/img17.webp"
              alt=""
              class="h-[320px]"
            />
            <img
              src="~assets/img/products/img2.webp"
              alt=""
              class="h-[180px]"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="300" class="grid grid-cols-1 sm:grid-rows-2 gap-4">
            <img
              src="~assets/img/products/img5.webp"
              alt=""
              class="max-h-[250px]"
            />
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <img
                src="~assets/img/products/img6.webp"
                alt=""
                class="max-h-[250px]"
              />
              <img
                src="~assets/img/products/img8.webp"
                alt=""
                class="max-h-[250px]"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div data-aos="fade-right" class="flex flex-col gap-4">
            <img
              src="~assets/img/products/img12.webp"
              alt=""
              class="h-[500px]"
            />
          </div>
          <div data-aos="fade-left" class="grid grid-cols-1 sm:grid-rows-2 gap-4">
            <img
              src="~assets/img/products/img19.webp"
              alt=""
              class="max-h-[250px]"
            />
            <div data-aos="fade-up" class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <img
                src="~assets/img/products/img14.webp"
                alt=""
                class="max-h-[234px]"
              />
              <img
                src="~assets/img/products/img15.webp"
                alt=""
                class="max-h-[234px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-center text-3xl font-bold mb-12">
          CÁC DÒNG THANG MÁY HƯNG PHÁT
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div
            v-for="(item, index) in productDatas"
            :key="index"
            class="flex flex-col boxshadow relative h-full"
          >
            <img :src="item.img" alt="" class="h-[280px]" />
            <div class="p-4">
              <p class="text-xl font-bold">{{ item.title }}</p>
              <p class="text-sm">{{ truncateText(item.des) }}</p>
            </div>
            <!-- <div class="p-4 absolute bottom-0 w-full">
              <v-button type="primary" class="w-full" @click="$router.push('/products')">Xem thêm</v-button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <ProjectCard />
    <div class="section-connect w-full h-fit mt-8">
      <div class="fill w-full flex justify-center pb-10">
        <div class="content px-4 py-10 w-full sm:w-[450px]">
          <p class="text-white text-3xl font-bold text-center my-5">
            TƯ VẤN VÀ BÁO GIÁ
          </p>
          <div class="flex flex-col gap-3">
            <v-input placeholder="Họ và tên" />
            <v-input placeholder="Email" />
            <v-input placeholder="Số điện thoại liên hệ" />
            <v-input
              type="textarea"
              :resize="false"
              :rows="5"
              placeholder="Chúng tôi có thể giúp gì cho bạn?"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="h-[40px]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productDatas: [
        {
          title: "Thang máy tải khách",
          des: "Thang máy tải khách là loại thang máy dùng để chở người di chuyển giữa các tầng khác nhau trong các tòa nhà và công trình xây dựng. Các công trình sử dụng thang máy tải khách rất đa dạng như nhà ở gia đình, chung cư, tòa nhà văn phòng, khách sạn, trung tâm thương mại và nhiều dạng công trình khác.",
          img: require("~/assets/img/project/p11.jpg"),
        },
        {
          title: "Thang máy quan sát",
          des: "Thang máy quan sát là thang máy được thiết kế bởi 4 mặt kính bao xung quanh mang đến một vẻ đẹp của sự hiện đại, sang trọng nhưng vẫn giúp con người gần gũi với thiên nhiên hơn bao giờ hết",
          img: "https://thangmayhaiphat.com/wp-content/uploads/2023/07/Thang-may-quan-sat-Mitsubishi-6.jpg",
        },
        {
          title: "Thang máy Home lift",
          des: "Thang Home Life là dòng thang máy gia đình nhỏm tiết kiệm diện tích. Dòng thang này phù hợp với những gia đình có diện tích nhỏ, vì vậy việc lựa chọn dòng thang máy home-lift là sưj lựa chọn tối ưu nhất",
          img: "https://vietdonghai.com/wp-content/uploads/2022/11/thang-may-homelift.jpg",
        },
        {
          title: "Thang máy cửa bản lề",
          des: "Đây là loại thang được thiết kế và chế tạo như một cánh cửa thông thường, có tay nắm, ổ khóa,v.v… Cửa mở bản lề được làm bằng kính cường lực, kết hợp với khung thép hoặc inox. Thang được sử dụng rộng rãi và có kích thước siêu nhỏ",
          img: "https://thangmayklift.vn/upload/attachment/2535z3376839558331_2e7b313b33e7c4735afc0ca015516e33.jpg",
        },
        {
          title: "Thang máy bệnh viện",
          des: "Thang máy bệnh viện là dòng thang chuyên dụng nhằm mục đích vận chuyển bệnh nhân, các thiết thiết bị y tế, băng ca, giường bệnh, hỗ trợ các y bác sĩ thăm khám và cấp cứu bệnh nhân.",
          img: "https://vietchao.vn/wp-content/uploads/2024/05/14.jpg",
        },
        {
          title: "Thang máy tải hàng",
          des: "Thang máy nâng hàng (ký hiệu là chữ F : Freight) (thang máy tải hàng) là các loại thang máy chuyên dụng sử dụng để nâng hàng hóa. Trong một số tòa nhà văn phòng, tòa chung cư cao tầng. Thường thang máy tải hàng hóa sẽ được lắp đặt riêng, không sử dụng chung với thang máy vận chuyển người.",
          img: "https://thangmayanhung.com/wp-content/uploads/2018/06/1.png",
        },
        {
          title: "Thang máy xe hơi",
          des: "Thang máy tải ô tô hay (hay thang máy chở xe hơi) là một dạng thang máy tải hàng đặc biệt. Được thiết kế đặc biệt chuyên chở ô tô, có thiết kế Kích thước và tải trọng phù hợp với nhóm xe 4 chỗ, 7 chỗ hoặc 16 chỗ thường được dùng cho các chung cư, khu để xe ô tô trong tòa nhà hoặc showroom.",
          img: "https://thangmayhaiphat.com/wp-content/uploads/2023/08/thang-may-tai-o-to.jpg",
        },
        {
          title: "Thang máy thực phẩm",
          des: "Thang máy tải thực phẩm hay còn được coi là dạng thang máy tải hàng cỡ nhỏ dùng chuyên biệt cho vận chuyển thực phẩm tại các nhà hàng hay các trung tâm thương mại, bệnh viện. Nhờ có thang máy thực phẩm mà giảm bớt được phần nào sức người và cũng đảm bảo cho cho việc vận chuyển thực phẩm diễn ra thuận lợi hơn.",
          img: "https://thangmayght.com/wp-content/uploads/2022/11/lap-dat-thang-tai-thuc-pham.jpg",
        },
      ],
      freature: [
        {
          title: "Đồng bộ cứu hộ tự động",
          icon: "IconsFeature1",
          des: "Một nguồn Ắc quy dự trữ sẽ được cung cấp cho thang máy khi có sự cố mất điện, giúp đưa thang về tầng thấp nhất và mở cửa để hành khách thoát ra ngoài ",
        },
        {
          title: "Chuông báo quá tải",
          icon: "IconsFeature2",
          des: "Khi số người trong cabin vượt quá tải trọng định mức, chuông báo quá tải sẽ kêu và thang máy dừng hoạt động cho đến khi tải trọng trở về định mức cho phép",
        },
        {
          title: "Dừng tầng an toàn",
          icon: "IconsFeature3",
          des: " Trường hợp thang bị dừng ở khoảng giữa các tầng vì một sự cố chưa xác định, thang sẽ tự động kiểm tra nguyên nhân và nếu an toàn thì phòng thang sẽ được di chuyển tới tầng gần nhất với tốc độ thấp và mở cửa để hành khách ra ngoài",
        },
        {
          title: "Cửa mở an toàn ",
          icon: "IconsFeature4",
          des: "Thang tự ngừng hoạt động khi cửa không đóng hoặc mở hoàn toàn nhằm đảm bảo an toàn cho khách đi thang.",
        },
        {
          title: "Công tắc chống vượt hành trình",
          icon: "IconsFeature5",
          des: "Công tắc được đặt ở đầu trên và đầu dưới của hành trình nhằm ngăn chặn cabin vượt quá hành trình cho phép đã được cài đặt sẵn",
        },
        {
          title: "Đèn cabin tự động tắt",
          icon: "IconsFeature6",
          des: "Đèn tự động tắt khi thang không hoạt động để tiết kiệm điện và tự khởi động lại khi có lệnh gọi",
        },
        {
          title: "Chống mất pha, ngược pha",
          icon: "IconsFeature7",
          des: "Khi mất pha hoặc ngược pha điện lưới cung cấp thì thang sẽ tự động dừng để bảo vệ hệ thống điện",
        },
        {
          title: "Hệ thống an toàn hồng ngoại",
          icon: "IconsFeature8",
          des: " Hệ thống hồng ngoại được tích hợp, khi có vật cản tia thì thang sẽ không chạy cho đến khi không còn vật cả.",
        },
      ],
      cabinDatas: [
        {
          code: "HPE 01",
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa, đèn LED",
          floor: "Đá lựa chọn",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require("~/assets/img/cabins/Cabin1.jpg"),
        },
        {
          code: "HPE 12",
          wall: "Inox sọc nhuyễn màu vàng, inox gương màu vàng, inox chạm khắc màu vàng",
          door: "Inox gương màu vàng",
          ceiling: "Inox gương màu vàng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn màu vàng, hiển thị ma trận điểm LED",
          img: require("~/assets/img/cabins/Cabin12.jpg"),
        },
        {
          code: "HPE 13",
          wall: "Inox sọc nhuyễn, inox gương, inox chạm khắc",
          door: "Inox gương",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require("~/assets/img/cabins/Cabin13.jpg"),
        },
        {
          code: "HPE 14",
          wall: "Inox sọc nhuyễn màu vàng, inox gương màu vàng, inox chạm khắc màu vàng",
          door: "Inox gương màu vàng",
          ceiling: "Inox gương màu vàng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn màu vàng, hiển thị ma trận điểm LED",
          img: require("~/assets/img/cabins/Cabin14.jpg"),
        },

        {
          code: "HPE 17",
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa đèn led",
          floor: "Đá lựa chọn",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm led",
          img: require("~/assets/img/cabins/Cabin17.jpg"),
        },
        {
          code: "HPE 19",
          wall: "Inox sọc nhuyễn màu đồng, inox gương màu đồng, tranh kính trang trí",
          door: "Inox sọc nhuyễn màu đồng",
          ceiling: "Inox gương màu đồng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu đồng",
          controlPanel: "Inox gương màu đồng, hiển thị ma trận điểm LED",
          img: require("~/assets/img/cabins/Cabin19.jpg"),
        },
        {
          code: "HPE 21",
          wall: "Inox sọc nhuyễn, kính cường lực",
          door: "Inox sọc nhuyễn, kính cường lực",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require("~/assets/img/cabins/Cabin21.jpg"),
        },
        {
          code: "HPE 22",
          wall: "Inox sọc nhuyễn màu đồng, kính cường lực",
          door: "Inox gương màu đồng, kính cường lực",
          ceiling:
            "Inox sọc nhuyễn màu đồng, inox gương màu đồng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu đồng",
          controlPanel: "Inox gương màu đồng, hiển thị ma trận điểm LED",
          img: require("~/assets/img/cabins/Cabin22.jpg"),
        },
      ],
    };
  },
  mounted() {},
  methods: {
    truncateText(text) {
      if (text.length > 100) {
        return text.substring(0, 100) + "...";
      }
      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-banner {
  height: 200px;
  background-image: url("~/assets/img/banner-intro.jpeg");
  background-size: cover;
  background-position: bottom;
}
.section-connect {
  background-image: url(https://thangmayght.com/wp-content/uploads/2022/11/thang-may-van-phong-9.png);
  background-position: 50% 50%;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.fill {
  background-color: rgba(0, 0, 0, 0.5);
}
.img-feature{
}
  img {
    width: 100%;
    object-fit: cover;
  }
@media (max-width: 768px) {
  .img-feature  {
    img{
      height: 300px !important;
      width: 100%;
    }
  }
}
</style>
