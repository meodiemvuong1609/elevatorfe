<template>
  <div class="px-4 sm:px-[10%]">
    <p class="text-center text-3xl max-sm:text-xl font-bold">
      CÁC DÒNG THANG MÁY HƯNG PHÁT
    </p>
    <div class="flex items-center justify-center p-4 mb-2">
        <div class="line"></div>
      </div>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div
        v-for="(item, index) in productDatas"
        :key="index"
        class="flex flex-col boxshadow relative h-full pb-[62px] rounded-lg"
      >
        <img :src="item.img" alt="" class="h-[280px] rounded-t-lg" />
        <div class="p-4">
          <p class="text-xl font-bold">{{ item.title }}</p>
          <p class="text-sm">{{ truncateText(item.des) }}</p>
        </div>
        <div class="p-4 absolute bottom-0 w-full">
          <v-button
            type="primary"
            class="w-full"
            @click="$router.push('/products')"
            >Xem thêm</v-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
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
        // {
        //   title: "Thang máy bệnh viện",
        //   des: "Thang máy bệnh viện là dòng thang chuyên dụng nhằm mục đích vận chuyển bệnh nhân, các thiết thiết bị y tế, băng ca, giường bệnh, hỗ trợ các y bác sĩ thăm khám và cấp cứu bệnh nhân.",
        //   img: "https://vietchao.vn/wp-content/uploads/2024/05/14.jpg",
        // },
        // {
        //   title: "Thang máy tải hàng",
        //   des: "Thang máy nâng hàng (ký hiệu là chữ F : Freight) (thang máy tải hàng) là các loại thang máy chuyên dụng sử dụng để nâng hàng hóa. Trong một số tòa nhà văn phòng, tòa chung cư cao tầng. Thường thang máy tải hàng hóa sẽ được lắp đặt riêng, không sử dụng chung với thang máy vận chuyển người.",
        //   img: "https://thangmayanhung.com/wp-content/uploads/2018/06/1.png",
        // },
        // {
        //   title: "Thang máy xe hơi",
        //   des: "Thang máy tải ô tô hay (hay thang máy chở xe hơi) là một dạng thang máy tải hàng đặc biệt. Được thiết kế đặc biệt chuyên chở ô tô, có thiết kế Kích thước và tải trọng phù hợp với nhóm xe 4 chỗ, 7 chỗ hoặc 16 chỗ thường được dùng cho các chung cư, khu để xe ô tô trong tòa nhà hoặc showroom.",
        //   img: "https://thangmayhaiphat.com/wp-content/uploads/2023/08/thang-may-tai-o-to.jpg",
        // },
        // {
        //   title: "Thang máy thực phẩm",
        //   des: "Thang máy tải thực phẩm hay còn được coi là dạng thang máy tải hàng cỡ nhỏ dùng chuyên biệt cho vận chuyển thực phẩm tại các nhà hàng hay các trung tâm thương mại, bệnh viện. Nhờ có thang máy thực phẩm mà giảm bớt được phần nào sức người và cũng đảm bảo cho cho việc vận chuyển thực phẩm diễn ra thuận lợi hơn.",
        //   img: "https://thangmayght.com/wp-content/uploads/2022/11/lap-dat-thang-tai-thuc-pham.jpg",
        // },
      ],
    };
  },
  methods: {
    truncateText(text) {
      if (text.length > 100) {
        return text.substring(0, 150) + "...";
      }
      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  background: #004c84;
  width: 100px;
  height: 2px;
}
</style>
