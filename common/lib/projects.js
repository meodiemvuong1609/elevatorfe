// Công trình đã thực hiện. Ảnh đầu tiên trong photos là ảnh đại diện.
// type: 'kinh' (thang kính hiện đại) | 'co-dien' (tân cổ điển) | 'tai-hang' (thang tải hàng)
// featured: hiển thị trên trang chủ. Các trường load/floors/speed/area không bắt buộc.

export const PROJECT_TYPES = [
  { id: 'kinh', label: 'Thang kính hiện đại' },
  { id: 'co-dien', label: 'Tân cổ điển' },
  { id: 'tai-hang', label: 'Thang tải hàng' },
]

const photos = (folder, count, alt) =>
  Array.from({ length: count }, (_, i) => ({
    img: require(`~/assets/img/cong-trinh/${folder}/${String(i + 1).padStart(2, '0')}.jpg`),
    alt: `${alt} — ảnh ${i + 1}`,
  }))

export const PROJECTS = [
  {
    id: 'anh-tuan-anh-bac-ninh',
    name: 'Anh Tuấn Anh – Bắc Ninh',
    area: 'Bắc Ninh',
    type: 'co-dien',
    floors: '3 tầng',
    load: '450 kg',
    featured: true,
    photos: photos('anh-tuan-anh-bac-ninh', 5, 'Thang máy khung gỗ chạm tân cổ điển nhà anh Tuấn Anh, Bắc Ninh'),
  },
  {
    id: 'anh-thang-ocean-park-2',
    name: 'Anh Thắng – Vinhomes Ocean Park 2',
    area: 'Vinhomes Ocean Park 2',
    type: 'kinh',
    floors: '4 tầng',
    load: '450 kg',
    featured: true,
    photos: photos('anh-thang-ocean-park-2', 2, 'Thang máy kính khung inox nhà anh Thắng, Vinhomes Ocean Park 2'),
  },
  {
    id: 'nha-o-5',
    name: 'Công trình nhà ở',
    type: 'kinh',
    featured: true,
    photos: photos('nha-o-5', 3, 'Thang máy kính đen khung vàng trong nhà ở'),
  },
  {
    id: 'anh-khue',
    name: 'Anh Khuê',
    type: 'co-dien',
    floors: '4 tầng',
    load: '450 kg',
    featured: true,
    photos: photos('anh-khue', 1, 'Thang máy tân cổ điển khung vàng nhà anh Khuê'),
  },
  {
    id: 'chi-cuc-hung-yen',
    name: 'Chị Cúc – Hưng Yên',
    area: 'Hưng Yên',
    type: 'kinh',
    floors: '4 tầng',
    load: '450 kg',
    featured: true,
    photos: photos('chi-cuc-hung-yen', 3, 'Thang máy kính khung vàng nhà chị Cúc, Hưng Yên'),
  },
  {
    id: 'nha-o-1',
    name: 'Công trình nhà ở',
    type: 'kinh',
    featured: true,
    photos: photos('nha-o-1', 4, 'Thang máy kính với cabin tranh tre trong nhà ở'),
  },
  {
    id: 'anh-cuong-thanh-hoa',
    name: 'Anh Cường – TP Thanh Hóa',
    area: 'TP Thanh Hóa',
    type: 'co-dien',
    floors: '5 tầng',
    load: '450 kg',
    photos: photos('anh-cuong-thanh-hoa', 1, 'Thang máy khung ốp gỗ, cửa vàng nhà anh Cường, TP Thanh Hóa'),
  },
  {
    id: 'anh-tuan-ocean-park-1',
    name: 'Anh Tuấn – Vinhomes Ocean Park 1',
    area: 'Vinhomes Ocean Park 1',
    type: 'kinh',
    floors: '3 tầng',
    load: '350 kg',
    photos: photos('anh-tuan-ocean-park-1', 2, 'Thang máy kính đen cửa vàng nhà anh Tuấn, Vinhomes Ocean Park 1'),
  },
  {
    id: 'nha-o-2',
    name: 'Công trình nhà ở',
    type: 'kinh',
    photos: photos('nha-o-2', 5, 'Thang máy kính đen khung trắng trong nhà ở'),
  },
  {
    id: 'nha-o-3',
    name: 'Công trình nhà ở',
    type: 'kinh',
    photos: photos('nha-o-3', 1, 'Thang máy kính, cabin inox gương trong nhà ở'),
  },
  {
    id: 'nha-o-6',
    name: 'Công trình nhà ở',
    type: 'kinh',
    photos: photos('nha-o-6', 3, 'Thang máy kính đen cạnh cầu thang đá trong nhà ở'),
  },
  {
    id: 'nha-o-4',
    name: 'Công trình nhà ở',
    type: 'kinh',
    photos: photos('nha-o-4', 4, 'Thang máy kính cạnh cầu thang gỗ trong nhà ở'),
  },
  {
    id: 'anh-linh-ha-noi',
    name: 'Anh Linh – Xã Đàn – Đống Đa – Hà Nội',
    area: 'Đống Đa, Hà Nội',
    type: 'kinh',
    floors: '4 tầng',
    load: '400 kg',
    speed: '0,3 m/s',
    photos: [
      { img: require('~/assets/img/project/p11.jpg'), alt: 'Thang máy cửa kính khung inox tại nhà anh Linh, Xã Đàn, Hà Nội' },
      { img: require('~/assets/img/project/p12.jpg'), alt: 'Giếng thang kính khung inox tại nhà anh Linh, Xã Đàn, Hà Nội' },
    ],
  },
  {
    id: 'anh-quyen-thanh-hoa',
    name: 'Anh Quyền – Khu đô thị Vinhomes Thanh Hóa',
    area: 'Vinhomes Thanh Hóa',
    type: 'kinh',
    floors: '4 tầng',
    load: '400 kg',
    speed: '0,3 m/s',
    photos: [
      { img: require('~/assets/img/project/p22.jpg'), alt: 'Thang máy gia đình tại nhà anh Quyền, Vinhomes Thanh Hóa' },
      { img: require('~/assets/img/project/p21.jpg'), alt: 'Thang máy kính cạnh cầu thang gỗ tại nhà anh Quyền, Vinhomes Thanh Hóa' },
    ],
  },
  {
    id: 'anh-nam-ha-dong',
    name: 'Anh Năm – Khu đô thị Văn Quán – Hà Đông – Hà Nội',
    area: 'Hà Đông, Hà Nội',
    type: 'kinh',
    floors: '4 tầng',
    load: '400 kg',
    speed: '0,3 m/s',
    photos: [
      { img: require('~/assets/img/project/p32.jpg'), alt: 'Thang máy cửa kính khung vàng tại nhà anh Năm, Văn Quán, Hà Đông' },
      { img: require('~/assets/img/project/p31.jpg'), alt: 'Thang máy gia đình tại nhà anh Năm, Văn Quán, Hà Đông' },
    ],
  },
  {
    id: 'tai-hang-bac-ninh',
    name: 'Thang tải hàng – Bắc Ninh',
    area: 'Bắc Ninh',
    type: 'tai-hang',
    load: '2000 kg',
    photos: photos('tai-hang-bac-ninh', 2, 'Thang máy tải hàng 2000 kg tại nhà xưởng Bắc Ninh'),
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
