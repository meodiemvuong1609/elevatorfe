<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <!-- Thanh tiện ích: chỉ hiện từ tablet trở lên -->
    <div class="hidden md:block bg-ink text-[#D9D6CF] text-[13px]">
      <div class="hp-container h-9 flex items-center justify-between gap-6">
        <div class="flex gap-5 whitespace-nowrap">
          <span>Hoạt động từ {{ foundedYear }} · MST {{ taxCode }}</span>
          <span class="hidden lg:inline">Hà Nội · Thanh Hóa · Quảng Ninh · TP. Hồ Chí Minh</span>
        </div>
        <div class="flex gap-5 whitespace-nowrap">
          <a :href="`mailto:${email}`" class="hover:text-white">{{ email }}</a>
          <span>Cứu hộ &amp; bảo trì 24/7</span>
        </div>
      </div>
    </div>

    <div class="bg-white border-b border-line">
      <div class="hp-container h-[72px] flex items-center gap-6 lg:gap-8">
        <nuxt-link to="/" class="flex items-center gap-3 shrink-0" aria-label="Thang máy Hưng Phát — về trang chủ">
          <img src="~/assets/img/hungphat.png" class="h-11 sm:h-12 w-auto" alt="Logo Hưng Phát Elevator" />
          <span class="flex flex-col leading-tight">
            <span class="font-extrabold text-[15px] sm:text-[17px] tracking-[-0.01em] whitespace-nowrap">Thang máy Hưng Phát</span>
            <span class="text-xs text-muted whitespace-nowrap">Hung Phat Elevator Technology</span>
          </span>
        </nuxt-link>

        <nav class="hidden xl:flex items-center gap-5 ml-auto text-[15px] font-medium whitespace-nowrap" aria-label="Điều hướng chính">
          <nuxt-link
            v-for="item in desktopMenu"
            :key="item.to"
            :to="item.to"
            class="hover:text-brand"
            exact-active-class="text-brand"
          >
            {{ item.label }}
          </nuxt-link>
        </nav>

        <div class="flex items-center gap-3 ml-auto">
          <a :href="`tel:${hotline}`" class="hidden sm:flex flex-col leading-tight text-right hover:text-brand">
            <span class="text-xs text-muted">Hotline / Zalo</span>
            <span class="font-bold text-[17px] tabular-nums">{{ hotlineDisplay }}</span>
          </a>
          <nuxt-link to="/contact" class="hp-btn-primary hidden md:inline-flex !min-h-[44px] !px-5 text-[15px] whitespace-nowrap">
            Nhận báo giá
          </nuxt-link>
          <button
            type="button"
            class="xl:hidden w-11 h-11 border border-line rounded-md bg-white inline-flex items-center justify-center"
            aria-label="Mở menu"
            :aria-expanded="menuShow ? 'true' : 'false'"
            @click="menuShow = true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <popup-menu :is-show="menuShow" :menu="menu" @close="menuShow = false" />
  </header>
</template>

<script>
import { EMAIL, FOUNDED_YEAR, HOTLINE, HOTLINE_DISPLAY, LEGAL } from '~/common/lib/company'

const MENU = [
  { to: '/', label: 'Trang chủ' },
  { to: '/introduce', label: 'Giới thiệu' },
  { to: '/products', label: 'Sản phẩm' },
  { to: '/cabins', label: 'Mẫu cabin' },
  { to: '/service', label: 'Dịch vụ' },
  { to: '/project', label: 'Dự án' },
  { to: '/contact', label: 'Liên hệ' },
]

export default {
  name: 'Header',
  data() {
    return {
      menuShow: false,
      menu: MENU,
      // Trên desktop, logo đã dẫn về trang chủ nên bỏ mục "Trang chủ" cho gọn
      desktopMenu: MENU.filter((item) => item.to !== '/'),
      email: EMAIL,
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
      foundedYear: FOUNDED_YEAR,
      taxCode: LEGAL.taxCode,
    }
  },
  watch: {
    // Đóng menu điện thoại khi chuyển trang
    $route() {
      this.menuShow = false
    },
  },
}
</script>
