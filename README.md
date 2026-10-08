# elevatorfe — Website Thang máy Hưng Phát

Nuxt 2 (SSR) + Tailwind CSS. Production: https://hungphatelevator.com

## Chạy local

```bash
cp .env.example .env   # điền ACCESS_TOKEN_MAP_BOX để hiện bản đồ
yarn install
yarn dev               # http://localhost:3000
```

Build như production:

```bash
yarn build
yarn start
```

## Cấu trúc chính

| Thư mục | Nội dung |
|---|---|
| `pages/` | Các trang: trang chủ, giới thiệu, sản phẩm, cabin, dịch vụ, dự án, liên hệ |
| `components/` | Header, Footer, Banner, ConsultForm (form tư vấn), MapLocation... |
| `common/components/` | Component UI dùng chung (VButton, VInput...) |
| `common/lib/company.js` | **Địa chỉ văn phòng, hotline, email** — sửa thông tin công ty ở đây |
| `common/layouts/` | Layout chung (nút gọi hotline, Zalo chat) |
| `assets/img/` | Ảnh. Nên resize về ≤ 1920px và nén trước khi thêm |

## Biến môi trường

Xem `.env.example`. Quan trọng: `SITE_URL`, `ALLOW_INDEXING`, `ACCESS_TOKEN_MAP_BOX`.

## Deploy

- Push `master` → tự deploy production.
- Push `staging` → tự deploy lên https://staging.hungphatelevator.com.

Chi tiết và hướng dẫn cài đặt server: [deploy/DEPLOY.md](deploy/DEPLOY.md).
