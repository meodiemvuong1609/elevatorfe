<template>
  <div class="product-container flex flex-col gap-4">
    <div class="w-full h-[400px]">
      <img src="~assets/img/banner2.jpg" alt="" class="w-full h-full object-cover"/>
    </div>
    <div class="flex flex-col p-4 gap-5 mt-5 sm:px-[15%]">
      <p class="text-center text-xl font-bold">CABIN</p>
      <p class="text-center text-3xl font-bold mb-4">CABIN MẪU TIÊU CHUẨN</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div v-for="(item, index) in cabinDatas.slice(0,10)" :key="index" class="flex flex-col boxshadow relative h-full pb-14">
          <img :src="item.img" alt="" class="h-[300px]">
          <div class="p-4">
            <p class="text-xl font-bold">{{ item.code }}</p>
            <p class="text-sm"><b>Vách: </b>{{ (item.wall) }}</p>
            <p class="text-sm"><b>Cửa: </b>{{ (item.door) }}</p>
            <p class="text-sm"><b>Trần: </b>{{ (item.ceiling) }}</p>
            <p class="text-sm"><b>Sàn: </b>{{ (item.floor) }}</p>
            <p class="text-sm"><b>Tay vịn: </b>{{ (item.handrail) }}</p>
            <p class="text-sm"><b>Bảng điều khiển: </b>{{ (item.controlPanel) }}</p>
          </div>
          <div class="p-4 absolute bottom-0 w-full">
            <v-button type="primary" class="w-full" @click="$router.push('/products')">Xem thêm</v-button>
          </div>
        </div>
      </div>
      <p class="text-center text-3xl font-bold mb-4">CABIN MẪU LỰA CHỌN</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div v-for="(item, index) in cabinDatas.slice(10,23)" :key="index" class="flex flex-col boxshadow relative h-full pb-14">
          <img :src="item.img" alt="" class="h-[300px]">
          <div class="p-4">
            <p class="text-xl font-bold">{{ item.code }}</p>
            <p class="text-sm">{{ (item.wall) }}</p>
            <p class="text-sm">{{ (item.door) }}</p>
            <p class="text-sm">{{ (item.ceiling) }}</p>
            <p class="text-sm">{{ (item.floor) }}</p>
            <p class="text-sm">{{ (item.handrail) }}</p>
            <p class="text-sm">{{ (item.controlPanel) }}</p>
          </div>
          <div class="p-4 absolute bottom-0 w-full">
            <v-button type="primary" class="w-full" @click="$router.push('/products')">Xem thêm</v-button>
          </div>
        </div>
      </div>
    </div>
    <ConsultForm wrapper-class="mt-8" />
    <div class="h-[40px]"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Cabin thang máy",
      meta: [{ hid: "description", name: "description", content: "Mẫu cabin thang máy tiêu chuẩn và tùy chọn của Hưng Phát: vách inox, cửa, trần đèn LED, sàn đá, tay vịn, bảng điều khiển." }],
    };
  },
  data() {
    return {
      cabinDatas: [
        {
          code: 'HPE 01',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa, đèn LED",
          floor: "Đá lựa chọn",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin1.jpg'),
        },
        {
          code: 'HPE 02',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá lựa chọn",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin2.jpg'),
        },
        {
          code: 'HPE 03',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin3.jpg'),
        },
        {
          code: 'HPE 04',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa, đèn LED",
          floor: "Đá lựa chọn",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin4.jpg'),
        },
        {
          code: 'HPE 05',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá lựa chọn",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin5.jpg'),
        },
        {
          code: 'HPE 06',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa, đèn LED",
          floor: "Đá lựa chọn",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin6.jpg'),
        },
        {
          code: 'HPE 07',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin7.jpg'),
        },
        {
          code: 'HPE 08',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin8.jpg'),
        },
        {
          code: 'HPE 09',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin9.jpg'),
        },
        {
          code: 'HPE 10',
          wall: "Inox sọc nhuyễn, inox gương",
          door: "Inox gương",
          ceiling: "Inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin10.jpg'),
        },
        {
          code: 'HPE 12',
          wall: "Inox sọc nhuyễn màu vàng, inox gương màu vàng, inox chạm khắc màu vàng",
          door: "Inox gương màu vàng",
          ceiling: "Inox gương màu vàng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn màu vàng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin12.jpg'),
        },
        {
          code: 'HPE 13',
          wall: "Inox sọc nhuyễn, inox gương, inox chạm khắc",
          door: "Inox gương",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin13.jpg'),
        },
        {
          code: 'HPE 14',
          wall: "Inox sọc nhuyễn màu vàng, inox gương màu vàng, inox chạm khắc màu vàng",
          door: "Inox gương màu vàng",
          ceiling: "Inox gương màu vàng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn màu vàng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin14.jpg'),
        },
        {
          code: 'HPE 15',
          wall: "Inox sọc nhuyễn màu vàng, inox gương màu vàng, inox chạm khắc màu vàng",
          door: "Inox gương màu vàng",
          ceiling: "Inox gương màu vàng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn màu vàng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin15.jpg'),
        },
        {
          code: 'HPE 16',
          wall: "Inox sọc nhuyễn màu vàng, inox gương màu vàng, inox chạm khắc màu vàng",
          door: "Inox gương màu vàng",
          ceiling: "Inox gương màu vàng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn màu vàng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin16.jpg'),
        },
        {
          code: 'HPE 17',
          wall: "Inox sọc nhuyễn màu vàng, inox gương màu vàng, inox chạm khắc màu vàng",
          door: "Inox gương màu vàng",
          ceiling: "Inox gương màu vàng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn màu vàng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin17.jpg'),
        },
        {
          code: 'HPE 18',
          wall: "Inox sọc nhuyễn màu đồng, inox gương màu đồng",
          door: "Inox gương màu đồng",
          ceiling: "Inox gương màu đồng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu đồng",
          controlPanel: "Inox sọc nhuyễn màu đồng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin18.jpg'),
        },
        {
          code: 'HPE 19',
          wall: "Inox sọc nhuyễn màu đồng, inox gương màu đồng, tranh kính trang trí",
          door: "Inox sọc nhuyễn màu đồng",
          ceiling: "Inox gương màu đồng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu đồng",
          controlPanel: "Inox gương màu đồng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin19.jpg'),
        },
        {
          code: 'HPE 20',
          wall: "Inox sọc nhuyễn, inox gương, tranh kính trang trí, đèn LED",
          door: "Inox sọc nhuyễn",
          ceiling: "Inox sọc nhuyễn, đèn LED",
          floor: "Tranh kính cường lực",
          handrail: "Ống inox",
          controlPanel: "Inox gương, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin20.jpg'),
        },
        {
          code: 'HPE 21',
          wall: "Inox sọc nhuyễn, kính cường lực",
          door: "Inox sọc nhuyễn, kính cường lực",
          ceiling: "Inox sọc nhuyễn, inox gương, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu vàng",
          controlPanel: "Inox sọc nhuyễn, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin21.jpg'),
        },
        {
          code: 'HPE 22',
          wall: "Inox sọc nhuyễn màu đồng, kính cường lực",
          door: "Inox gương màu đồng, kính cường lực",
          ceiling: "Inox sọc nhuyễn màu đồng, inox gương màu đồng, nhựa, đèn LED",
          floor: "Đá",
          handrail: "Ống inox màu đồng",
          controlPanel: "Inox gương màu đồng, hiển thị ma trận điểm LED",
          img: require('~/assets/img/cabins/Cabin22.jpg'),
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    truncateText (text) {
      if (text.length > 100) {
        return text.substring(0, 100) + '...';
    }
    return text;
    },
  }
};
</script>

