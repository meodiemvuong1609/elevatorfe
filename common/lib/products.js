// Các dòng thang máy và tính năng an toàn. Dùng chung cho trang chủ và trang Sản phẩm.
// Chỉ dùng ảnh của Hưng Phát; dòng thang chưa có ảnh riêng thì để img: null
// (giao diện hiển thị biểu tượng thay ảnh).

export const PRODUCT_LINES = [
  {
    title: 'Thang máy tải khách',
    short: 'Cho nhà ở, chung cư, văn phòng, khách sạn và trung tâm thương mại.',
    desc: 'Dòng thang chở người di chuyển giữa các tầng trong tòa nhà và công trình xây dựng. Phạm vi sử dụng rất đa dạng: nhà ở gia đình, chung cư, tòa nhà văn phòng, khách sạn, trung tâm thương mại và nhiều loại công trình khác.',
    img: require('~/assets/img/products/img6.webp'),
    alt: 'Thang máy tải khách trong biệt thự tân cổ điển',
  },
  {
    title: 'Thang máy quan sát',
    short: 'Vách kính bao quanh — hiện đại, sáng sủa, tôn kiến trúc công trình.',
    desc: 'Thang được bao quanh bởi vách kính, mang vẻ đẹp hiện đại, sang trọng mà vẫn giúp người đi thang cảm thấy gần gũi với không gian và thiên nhiên xung quanh.',
    img: require('~/assets/img/project/p12.jpg'),
    alt: 'Thang máy giếng kính khung inox',
  },
  {
    title: 'Home lift',
    short: 'Thang gia đình nhỏ gọn, tối ưu cho nhà phố diện tích hạn chế.',
    desc: 'Dòng thang máy gia đình nhỏ gọn, tiết kiệm diện tích. Phù hợp với những gia đình có diện tích nhà hạn chế, nơi home lift là lựa chọn tối ưu.',
    img: require('~/assets/img/products/img14.webp'),
    alt: 'Thang máy gia đình Home lift, khung ốp gỗ tự nhiên',
  },
  {
    title: 'Thang máy xe hơi',
    short: 'Tải xe 4, 7 hoặc 16 chỗ cho hầm xe, chung cư, showroom.',
    desc: 'Dạng thang tải hàng đặc biệt, thiết kế riêng để chở ô tô với kích thước và tải trọng phù hợp xe 4, 7 hoặc 16 chỗ. Thường dùng cho chung cư, khu để xe trong tòa nhà và showroom.',
    img: require('~/assets/img/products/img13.jpg'),
    alt: 'Thang máy tải ô tô',
  },
  {
    title: 'Thang cửa bản lề',
    short: 'Cửa kính cường lực mở như cửa thường, kích thước siêu nhỏ.',
    desc: 'Cửa thang được thiết kế như một cánh cửa thông thường, có tay nắm và khóa. Cửa làm bằng kính cường lực kết hợp khung thép hoặc inox. Kích thước siêu nhỏ nên được dùng rộng rãi trong nhà ở.',
    img: null,
    icon: 'M6 3h12v18H6zM14 12h.01M6 3l-2 1v16l2 1',
  },
  {
    title: 'Thang máy bệnh viện',
    short: 'Vận chuyển băng ca, giường bệnh và thiết bị y tế.',
    desc: 'Dòng thang chuyên dụng để vận chuyển bệnh nhân, thiết bị y tế, băng ca và giường bệnh, hỗ trợ y bác sĩ thăm khám và cấp cứu.',
    img: null,
    icon: 'M4 21V5h16v16M12 8v6M9 11h6M10 21v-3h4v3',
  },
  {
    title: 'Thang máy tải hàng',
    short: 'Nâng hàng hóa cho kho, nhà xưởng, tòa nhà cao tầng.',
    desc: 'Thang chuyên dụng để nâng hàng hóa (ký hiệu F — Freight), thường lắp riêng, không dùng chung với thang chở người trong tòa nhà văn phòng, chung cư cao tầng, kho và nhà xưởng.',
    img: null,
    icon: 'M3 21V9l9-6 9 6v12M7 21v-8h10v8M7 17h10',
  },
  {
    title: 'Thang máy thực phẩm',
    short: 'Thang tải nhỏ chuyên dụng cho nhà hàng, bếp trung tâm.',
    desc: 'Thang tải hàng cỡ nhỏ chuyên vận chuyển thực phẩm tại nhà hàng, trung tâm thương mại, bệnh viện. Giảm sức người và giúp việc vận chuyển thực phẩm thuận tiện, vệ sinh hơn.',
    img: null,
    icon: 'M5 3v8a3 3 0 0 0 3 3v7M8 3v6M11 3v8a3 3 0 0 1-3 3M17 21V3c-2 1-3 3-3 6v5h3',
  },
]

export const SAFETY_FEATURES = [
  {
    title: 'Đồng bộ cứu hộ tự động',
    icon: 'IconsFeature1',
    desc: 'Khi mất điện, nguồn ắc quy dự trữ đưa thang về tầng thấp nhất và mở cửa để hành khách ra ngoài.',
  },
  {
    title: 'Chuông báo quá tải',
    icon: 'IconsFeature2',
    desc: 'Khi số người vượt tải trọng định mức, chuông báo kêu và thang dừng cho đến khi tải trọng về mức cho phép.',
  },
  {
    title: 'Dừng tầng an toàn',
    icon: 'IconsFeature3',
    desc: 'Nếu thang dừng giữa hai tầng do sự cố, hệ thống tự kiểm tra và khi an toàn sẽ đưa cabin về tầng gần nhất với tốc độ thấp rồi mở cửa.',
  },
  {
    title: 'Cửa mở an toàn',
    icon: 'IconsFeature4',
    desc: 'Thang tự ngừng hoạt động khi cửa chưa đóng hoặc mở hoàn toàn.',
  },
  {
    title: 'Chống vượt hành trình',
    icon: 'IconsFeature5',
    desc: 'Công tắc ở đầu trên và đầu dưới hành trình ngăn cabin vượt quá giới hạn đã cài đặt.',
  },
  {
    title: 'Đèn cabin tự động tắt',
    icon: 'IconsFeature6',
    desc: 'Đèn tự tắt khi thang không hoạt động để tiết kiệm điện và bật lại khi có lệnh gọi.',
  },
  {
    title: 'Chống mất pha, ngược pha',
    icon: 'IconsFeature7',
    desc: 'Khi điện lưới mất pha hoặc ngược pha, thang tự dừng để bảo vệ hệ thống điện.',
  },
  {
    title: 'Hệ thống hồng ngoại',
    icon: 'IconsFeature8',
    desc: 'Hệ thống hồng ngoại tích hợp: khi có vật cản tia, thang không chạy cho đến khi hết vật cản.',
  },
]
