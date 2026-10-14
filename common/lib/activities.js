// Hoạt động của công ty. Thêm hoạt động mới: đặt ảnh (≤ 1920px, đã nén) vào
// assets/img/activities/ rồi thêm một mục vào đầu danh sách.
export const ACTIVITIES = [
  {
    title: 'Tiệc tất niên',
    desc: 'Tập thể cán bộ, kỹ sư và kỹ thuật viên Hưng Phát quây quần tổng kết một năm làm việc, cùng hướng tới năm mới.',
    photos: [
      { img: require('~/assets/img/activities/tat-nien-2.jpg'), alt: 'Tập thể nhân viên Hưng Phát trong đồng phục công ty tại tiệc tất niên' },
      { img: require('~/assets/img/activities/tat-nien-1.jpg'), alt: 'Ảnh chụp chung đội ngũ Hưng Phát trước sân khấu tiệc tất niên' },
    ],
  },
]
