# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tổng quan

Website giới thiệu công ty Thang máy Hưng Phát (https://hungphatelevator.com). Nuxt 2 (SSR, Vue 2.7) + Tailwind CSS 3, không có backend/API, không có Vuex store. Nội dung trang (sản phẩm, dự án, dịch vụ...) viết thẳng trong các file `.vue`.

## Lệnh

Dùng yarn 1.x, Node 20 (`.nvmrc`). Nuxt 2/webpack 4 không build được trên Node quá mới — nếu máy dùng Node khác, chạy `nvm use 20` trước.

```bash
yarn install
yarn dev          # http://localhost:3000
yarn dev:host     # mở cho máy khác trong LAN (test trên điện thoại)
yarn build        # build production — đây là bước kiểm tra duy nhất của CI
yarn start
```

Dự án **không có test và không có linter**. `yarn build` thành công là điều kiện tối thiểu trước khi coi một thay đổi là xong (CI cũng chỉ chạy bước này). Thay đổi giao diện cần kiểm tra thêm bằng cách chạy `yarn dev` và xem ở cả màn hình điện thoại.

## Kiến trúc

- **Cấu hình theo môi trường** nằm ở [nuxt.config.js](nuxt.config.js): `SITE_URL` và `ALLOW_INDEXING` quyết định og:url, sitemap, robots và meta `noindex`, để cùng một code chạy cho production và staging. `ACCESS_TOKEN_MAP_BOX` đi qua `publicRuntimeConfig` (dùng `this.$config`). Xem [.env.example](.env.example).
- **Layout nằm ở `common/layouts/`** (đã đổi qua `dir.layouts`), không phải `layouts/`. [common/layouts/default.vue](common/layouts/default.vue) chứa Header/Footer, nút gọi hotline nổi và widget Zalo. Header là `fixed` (72px, thêm thanh tiện ích 36px từ `md`), nên layout chừa `pt-[72px] md:pt-[108px]` — đổi chiều cao header thì sửa cả hai.
- **Trang chủ** ghép từ các phần trong `components/Home/` (`<HomeHero>`, `<HomeFactory>`...). Dữ liệu câu hỏi thường gặp ở [common/lib/faqs.js](common/lib/faqs.js), dùng cho cả phần hiển thị lẫn JSON-LD `FAQPage` trong `pages/index.vue`. Không `export` thêm biến có tên từ file `.vue`; dữ liệu dùng chung đặt trong `common/lib/`.
- **Dữ liệu nội dung** nằm trong `common/lib/`: `cabins.js` (21 mẫu cabin, 10 mẫu đầu là tiêu chuẩn), `products.js` (8 dòng thang + 8 tính năng an toàn; chỉ dùng ảnh của Hưng Phát, dòng nào chưa có ảnh để `img: null`), `activities.js` (hoạt động công ty, ảnh trong `assets/img/activities/`), `projects.js` (16 công trình, phân loại `type`, `featured` = hiện trên trang chủ, ảnh đầu là ảnh đại diện; ảnh trong `assets/img/cong-trinh/<id>/01.jpg…`), `showroom.js` (thang trưng bày TP Thanh Hóa — trường `address` đang để trống chờ công ty cung cấp). Ảnh gốc công ty gửi nằm trong `Trang Web/` (đã gitignore): chọn ảnh không có người tự chụp phản chiếu, thu về ≤ 1920px và xoá EXIF trước khi đưa vào `assets/img`. Trang Dự án dùng `<ProjectTile>` + `<PhotoLightbox>`; link `/project?cong_trinh=<id>` mở sẵn ảnh công trình. Sửa nội dung ở đây thay vì trong trang. Các trang con dùng `<PageHeader>` làm phần đầu và `<CabinCard>` cho thẻ cabin; các phần `Home*` (Stats, Process, Faq, Activities, Factory, Network) được dùng lại ở trang con.
- **Component tự import** từ cả `components/` và `common/components/` (đặt tên theo đường dẫn, ví dụ `components/Icons/Phone.vue` → `<icons-phone>`). `common/components/` là bộ UI dùng chung tiền tố `V` (VButton, VInput, VDialog...).
- **Thông tin công ty** (hotline, email, địa chỉ + toạ độ các văn phòng, thông tin pháp lý `LEGAL`, tài khoản ngân hàng `BANK_ACCOUNTS`, nhà máy `FACTORY`) tập trung ở [common/lib/company.js](common/lib/company.js). Đây là thông tin chính thức do công ty cung cấp — sửa ở đây, không hard-code trong component. Công ty có đúng 5 cơ sở (`OFFICES`, mỗi cơ sở có `id`); cơ sở chính là xưởng sản xuất Thiệu Trung (`FACTORY`, đứng đầu danh sách). Địa chỉ trên hồ sơ mã số thuế (Nghĩa Đô, Hà Nội) đã cũ — không hiển thị ở đâu.
- **Plugin** ở `common/plugins/`: hầu hết chạy `mode: "client"` (AOS, Flickity, toastr, directive `v-click-outside`). [mixins.js](common/plugins/mixins.js) là global mixin chạy cả SSR, cung cấp `windowWidth` / `isMobile` (< 648px) dựa trên một state reactive dùng chung — dùng cái này thay vì đọc `window.innerWidth` trong component.
- **Form tư vấn** ([ConsultForm.vue](components/ConsultForm/ConsultForm.vue)) là một section đầy đủ (id `tu-van`) dùng ở nhiều trang; chưa có API: validate rồi mở `mailto:` tới email công ty.
- Script bên thứ ba (ví dụ Zalo SDK) phải khai báo trong `head.script` của `nuxt.config.js` — thẻ `<script>` trong template Vue bị bỏ qua.
- `titleTemplate` trong `nuxt.config.js` phải là chuỗi, không dùng hàm (hàm bị serialize và mất biến bên ngoài). Mỗi trang con đặt `title` riêng trong `head()`.
- Màu sắc định nghĩa trong [tailwind.config.js](tailwind.config.js) **thay thế** bảng màu mặc định của Tailwind (`theme.colors`, không phải `extend`) — chỉ dùng các tên màu có trong đó. Giao diện mới dùng nhóm token `ink`, `paper`, `stone`, `line`, `body`, `muted`, `brand`, `signal`...; nhóm `red-*`, `gray-*` là của giao diện cũ, các trang con vẫn đang dùng. Font: Be Vietnam Pro.
- **Điện thoại là ưu tiên số 1** (đa số khách dùng điện thoại). Dưới `md` (768px): thanh hành động cố định ở đáy (Gọi ngay · Zalo · Báo giá) trong `common/layouts/default.vue` thay cho nút gọi nổi và bong bóng Zalo; các dãy thẻ dùng lớp `hp-rail` (vuốt ngang trên điện thoại, thành lưới từ `md` — component tự đặt `md:grid-cols-*`). Bong bóng Zalo do SDK tự gắn `left` inline nên phải ép bằng CSS `!important`; khi mở menu/lightbox thêm class `hp-overlay-open` vào `body` để ẩn các nút nổi. Kiểm tra mọi thay đổi giao diện ở 360px và 390px (không tràn ngang, vùng bấm ≥ 44px).
- Các lớp dùng chung của giao diện mới (`hp-container`, `hp-section`, `hp-eyebrow`, `hp-h2`, `hp-rail`, `hp-btn-primary`, `hp-btn-outline`, `hp-link-arrow`, `hp-zoom`) định nghĩa trong `@layer components` của [assets/css/main.css](assets/css/main.css). Lưu ý: không đặt `m-0` cạnh `hp-container` vì sẽ đè `mx-auto`.
- `common/lang/` và `store/` hiện không được dùng.

## Hồ sơ PDF

`bash scripts/ho-so/build.sh [file.pdf]` xuất hồ sơ giới thiệu công ty (A4, khoảng 13 trang) từ chính dữ liệu trong `common/lib/`, mặc định ra `~/Desktop/Ho-so-Thang-may-Hung-Phat.pdf`. Cần Node 20, Python 3 + Pillow và Google Chrome. Nội dung không lấy từ `common/lib/` (giới thiệu, dịch vụ, quy trình) đang viết trong `scripts/ho-so/gen.js` — sửa trang web thì sửa cả ở đó.

## Deploy

- CI ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)): mọi PR/push vào `master`/`staging` đều build thử; push `master` → production, push `staging` → https://staging.hungphatelevator.com. Chỉ deploy khi build trên GitHub thành công.
- Trên server, [scripts/deploy.sh](scripts/deploy.sh) build vào `.nuxt-next` (qua biến `NUXT_BUILD_DIR`, được `buildDir` trong `nuxt.config.js` đọc), đổi thành `.nuxt`, restart systemd service, health check và tự rollback về `.nuxt-prev` nếu lỗi.
- Quy trình đề xuất: branch tính năng → PR vào `staging` → duyệt trên staging → PR `staging` → `master`. Chi tiết server/nginx/systemd: [deploy/DEPLOY.md](deploy/DEPLOY.md).

## Quy ước

- Viết commit, tài liệu và comment bằng tiếng Việt (theo phong cách code hiện có).
- Ảnh trong `assets/img/` nên resize về ≤ 1920px và nén trước khi thêm.
