// Thông tin công ty dùng chung cho Footer, trang Liên hệ và bản đồ.
// Sửa địa chỉ / số điện thoại ở đây, không sửa rải rác trong component.

export const HOTLINE = '0901987666'
export const HOTLINE_DISPLAY = '090.1987.666'
export const EMAIL = 'thangmayhungphat666@gmail.com'
export const FACEBOOK_URL = 'https://facebook.com/hungphatelevator'

// 5 cơ sở hiện có (công ty xác nhận 10/2026). Cơ sở chính là xưởng sản xuất, đứng đầu danh sách.
export const OFFICES = [
  {
    id: 'xuong-san-xuat',
    title: 'Cơ sở chính – Xưởng sản xuất',
    address: 'Khu phố Trà Thượng, xã Thiệu Trung, tỉnh Thanh Hóa',
    coordinates: [105.630921, 19.757815],
  },
  {
    id: 'ha-noi',
    title: 'Văn phòng Hà Nội',
    address: 'Số 51, Lô F3, KĐT Đại Kim, phường Định Công, Hà Nội',
    coordinates: [105.83620683420604, 20.97794845575552],
  },
  {
    id: 'thanh-hoa',
    title: 'Văn phòng Thanh Hóa',
    address: 'Lô LK23-09, KĐT Xuân Hưng, phường Đông Quang, tỉnh Thanh Hóa',
    coordinates: [105.76029884294039, 19.78499515060052],
  },
  {
    id: 'quang-ninh',
    title: 'Văn phòng Quảng Ninh',
    address: 'Số 100, đường Đội Cấn, Tổ 7, Khu 5, phường Việt Hưng, tỉnh Quảng Ninh',
    coordinates: [107.00770023366181, 20.979885498940007],
  },
  {
    id: 'ho-chi-minh',
    title: 'Văn phòng Hồ Chí Minh',
    address: 'Số 497/73/14 Phan Văn Trị, Phường An Nhơn, Thành phố Hồ Chí Minh',
    coordinates: [106.6915339355372, 10.824142897024513],
  },
]

// Thông tin pháp lý chính thức do công ty cung cấp. Địa chỉ trên hồ sơ mã số thuế
// (Nghĩa Đô, Hà Nội) đã cũ nên không hiển thị; địa chỉ công ty dùng FACTORY.address.
export const LEGAL = {
  name: 'CÔNG TY TNHH CÔNG NGHỆ THANG MÁY HƯNG PHÁT',
  internationalName: 'HUNG PHAT ELEVATOR TECHNOLOGY COMPANY LIMITED',
  taxCode: '0108131537',
  activeSince: '15/01/2018',
  representative: 'Bà Đào Thị Hiền',
  representativeTitle: 'Giám đốc',
}

// Tài khoản nhận thanh toán của công ty.
export const BANK_ACCOUNTS = [
  {
    number: '118603987888',
    bank: 'Ngân hàng TMCP Công thương Việt Nam (VietinBank)',
    branch: 'Chi nhánh Bắc Thanh Hóa',
  },
  {
    number: '198766688',
    bank: 'Ngân hàng TMCP Á Châu (ACB)',
    branch: 'Chi nhánh Cầu Giấy, Hà Nội',
  },
]

export const FOUNDED_YEAR = 2018

// Cơ sở chính (xưởng sản xuất)
export const FACTORY = OFFICES.find((o) => o.id === 'xuong-san-xuat')
