<template>
  <!-- pb trên điện thoại: chừa chỗ cho thanh hành động cố định ở đáy -->
  <div class="layout-container pt-[72px] md:pt-[108px] pb-[calc(64px+env(safe-area-inset-bottom))] md:pb-0">
    <Header />
    <nuxt-child />
    <Footer />

    <!-- Máy tính: nút gọi nổi, thẳng hàng phía trên bong bóng Zalo (cùng cột, cùng tâm) -->
    <a
      :href="`tel:${hotline}`"
      class="hp-floating hidden md:flex fixed right-6 bottom-[100px] z-[9001] w-[60px] h-[60px] rounded-full bg-brand items-center justify-center shadow-lg hover:bg-brand-dark"
      aria-label="Gọi hotline"
    >
      <!-- Vòng sáng chỉ để trang trí: không nhận cú bấm, không che nội dung bên dưới -->
      <span class="hotline-ring" aria-hidden="true"></span>
      <icons-phone color="white" />
    </a>

    <!-- Bong bóng Zalo (SDK). Trên điện thoại ẩn đi, thay bằng nút Zalo trên thanh hành động -->
    <div class="zalo-widget-container">
      <div
        class="zalo-chat-widget"
        data-oaid="86656955401453345"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!"
        data-autopopup="0"
        data-width="300"
        data-height="400"
      ></div>
    </div>

    <!-- Điện thoại: thanh hành động cố định ở đáy, trong tầm ngón cái -->
    <nav
      class="hp-floating md:hidden fixed inset-x-0 bottom-0 z-[9001] bg-white border-t border-line grid grid-cols-3 gap-2 px-3 pt-2 pb-[calc(8px+env(safe-area-inset-bottom))]"
      aria-label="Liên hệ nhanh"
    >
      <a :href="`tel:${hotline}`" class="action-btn bg-brand text-white">
        <icons-phone color="white" />
        Gọi ngay
      </a>
      <a :href="zaloUrl" target="_blank" rel="noopener" class="action-btn bg-white text-[#0068FF] border border-[#0068FF]/40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" /></svg>
        Zalo
      </a>
      <a href="#tu-van" class="action-btn bg-ink text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5" /></svg>
        Báo giá
      </a>
    </nav>
  </div>
</template>

<script>
import { HOTLINE, ZALO_URL } from '~/common/lib/company'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      hotline: HOTLINE,
      zaloUrl: ZALO_URL,
    }
  },
}
</script>

<style scoped>
.action-btn {
  @apply min-h-[48px] rounded-lg inline-flex items-center justify-center gap-1.5 text-[15px] font-semibold;
}

.hotline-ring {
  position: absolute;
  inset: -10px;
  border-radius: 9999px;
  background: rgba(184, 48, 42, 0.25);
  pointer-events: none;
  animation: hotline-ring 1.6s ease-out infinite;
}

@keyframes hotline-ring {
  0% {
    transform: scale(0.8);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.25);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hotline-ring {
    animation: none;
  }
}
</style>

<style>
/* SDK Zalo tự gắn left:52px bằng style inline: ép về góc phải, cùng cột với nút gọi */
.zalo-chat-widget {
  position: fixed !important;
  left: auto !important;
  right: 24px !important;
  bottom: 24px !important;
}

/* Điện thoại dùng thanh hành động ở đáy thay cho bong bóng Zalo */
@media (max-width: 767px) {
  .zalo-widget-container {
    display: none !important;
  }
}

/* Đang mở menu điện thoại hoặc cửa sổ xem ảnh: ẩn các nút nổi */
body.hp-overlay-open .zalo-widget-container,
body.hp-overlay-open .hp-floating {
  display: none !important;
}
</style>
