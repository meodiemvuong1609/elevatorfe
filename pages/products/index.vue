<template>
  <div class="product-container flex flex-col gap-4">
    <div class="w-full h-[400px]">
      <img src="~assets/img/banner2.png" alt="" class="w-full h-full object-cover"/>
    </div>
    <div class="flex flex-col p-4 gap-5 mt-5 sm:px-[15%]">
      <p class="text-center text-xl font-bold">SẢN PHẨM</p>
      <p class="text-center text-3xl font-bold mb-4">CÁC DÒNG THANG MÁY HƯNG PHÁT</p>
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div v-for="(item, index) in productDatas" :key="index" class="flex flex-col boxshadow">
          <img :src="item.img" alt="" class="h-[280px]">
          <div class="p-4 ">
            <p class="text-xl font-bold">{{ item.title }}</p>
            <p class="text-sm">{{ item.des }}</p>
          </div>
        </div>
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
          img: require('~/assets/img/project/p11.jpg'),
          key: 1,
        },
        {
          title: "Thang máy quan sát",
          des: "Thang máy quan sát là thang máy được thiết kế bởi 4 mặt kính bao xung quanh mang đến một vẻ đẹp của sự hiện đại, sang trọng nhưng vẫn giúp con người gần gũi với thiên nhiên hơn bao giờ hết",
          img: require('~/assets/img/project/p12.jpg'),
          key: 2
        },
        {
          title: "Thang máy Home lift",
          des: "Thang Home Life là dòng thang máy gia đình nhỏm tiết kiệm diện tích. Dòng thang này phù hợp với những gia đình có diện tích nhỏ, vì vậy việc lựa chọn dòng thang máy home-lift là sưj lựa chọn tối ưu nhất",
          img: require('~/assets/img/project/p11.jpg'),
          key: 3,
        },
        {
          title: "Thang máy cửa bản lề",
          des: "Đây là loại thang được thiết kế và chế tạo như một cánh cửa thông thường, có tay nắm, ổ khóa,v.v… Cửa mở bản lề được làm bằng kính cường lực, kết hợp với khung thép hoặc inox. Thang được sử dụng rộng rãi và có kích thước siêu nhỏ",
          img: require('~/assets/img/project/p12.jpg'),
        },
        {
          title: "Thang máy bệnh viện",
          des: "Thang máy bệnh viện là dòng thang chuyên dụng nhằm mục đích vận chuyển bệnh nhân, các thiết thiết bị y tế, băng ca, giường bệnh, hỗ trợ các y bác sĩ thăm khám và cấp cứu bệnh nhân.",
          img: require('~/assets/img/project/p11.jpg'),
        },
        {
          title: "Thang máy tải hàng",
          des: "Thang máy nâng hàng (ký hiệu là chữ F : Freight) (thang máy tải hàng) là các loại thang máy chuyên dụng sử dụng để nâng hàng hóa. Trong một số tòa nhà văn phòng, tòa chung cư cao tầng. Thường thang máy tải hàng hóa sẽ được lắp đặt riêng, không sử dụng chung với thang máy vận chuyển người.",
          img: require('~/assets/img/project/p12.jpg'),
        },
        {
          title: "Thang máy xe hơi",
          des: "Thang máy tải ô tô hay (hay thang máy chở xe hơi) là một dạng thang máy tải hàng đặc biệt. Được thiết kế đặc biệt chuyên chở ô tô, có thiết kế Kích thước và tải trọng phù hợp với nhóm xe 4 chỗ, 7 chỗ hoặc 16 chỗ thường được dùng cho các chung cư, khu để xe ô tô trong tòa nhà hoặc showroom.",
          img: require('~/assets/img/project/p11.jpg'),
        },
        {
          title: "Thang máy thực phẩm",
          des: "Thang máy tải thực phẩm hay còn được coi là dạng thang máy tải hàng cỡ nhỏ dùng chuyên biệt cho vận chuyển thực phẩm tại các nhà hàng hay các trung tâm thương mại, bệnh viện. Nhờ có thang máy thực phẩm mà giảm bớt được phần nào sức người và cũng đảm bảo cho cho việc vận chuyển thực phẩm diễn ra thuận lợi hơn.",
          img: require('~/assets/img/project/p12.jpg'),
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
.fill{
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
