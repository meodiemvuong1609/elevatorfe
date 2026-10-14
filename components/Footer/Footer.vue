<template>
  <footer class="bg-ink text-muted-dark text-sm">
    <div class="hp-container pt-14 pb-8 flex flex-col gap-10">
      <div class="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div class="flex flex-col gap-2.5">
          <img src="~/assets/img/hungphat.png" class="h-14 w-auto self-start bg-white rounded-md p-1.5 mb-2" alt="Logo Hưng Phát Elevator" />
          <div class="text-white font-extrabold text-base tracking-[0.01em]">{{ legal.name }}</div>
          <div>{{ legal.internationalName }}</div>
          <div>Mã số thuế: {{ legal.taxCode }} · Hoạt động từ {{ legal.activeSince }}</div>
          <div>Người đại diện: {{ legal.representative }} — {{ legal.representativeTitle }}</div>
          <div>Cơ sở chính: {{ factory.address }}</div>
          <div class="mt-3 flex flex-col gap-1.5">
            <span class="text-white font-bold">Tài khoản công ty</span>
            <div v-for="account in bankAccounts" :key="account.number">
              STK <span class="text-white font-semibold tabular-nums">{{ account.number }}</span>
              — {{ account.bank }}, {{ account.branch }}
            </div>
          </div>
        </div>

        <nav class="flex flex-col md:gap-2.5" aria-label="Liên kết chân trang">
          <span class="text-white font-bold mb-1">Hưng Phát</span>
          <nuxt-link to="/introduce" class="hover:text-white inline-flex items-center min-h-[44px] md:min-h-0">Giới thiệu</nuxt-link>
          <nuxt-link to="/products" class="hover:text-white inline-flex items-center min-h-[44px] md:min-h-0">Các dòng thang máy</nuxt-link>
          <nuxt-link to="/cabins" class="hover:text-white inline-flex items-center min-h-[44px] md:min-h-0">Mẫu cabin</nuxt-link>
          <nuxt-link to="/service" class="hover:text-white inline-flex items-center min-h-[44px] md:min-h-0">Dịch vụ lắp đặt &amp; bảo trì</nuxt-link>
          <nuxt-link to="/project" class="hover:text-white inline-flex items-center min-h-[44px] md:min-h-0">Dự án</nuxt-link>
        </nav>

        <div class="flex flex-col md:gap-2.5">
          <span class="text-white font-bold mb-1">Liên hệ</span>
          <a :href="`tel:${hotline}`" class="text-white font-bold text-lg tabular-nums hover:text-signal inline-flex items-center min-h-[44px] md:min-h-0">{{ hotlineDisplay }}</a>
          <a :href="`mailto:${email}`" class="hover:text-white break-all inline-flex items-center min-h-[44px] md:min-h-0">{{ email }}</a>
          <a :href="facebookUrl" target="_blank" rel="noopener" class="hover:text-white inline-flex items-center min-h-[44px] md:min-h-0">Facebook</a>
        </div>
      </div>

      <div class="border-t border-panel-line pt-5 flex flex-wrap gap-2 justify-between text-[13px] text-[#8F8B83]">
        <span>© {{ year }} Thang máy Hưng Phát. Bảo lưu mọi quyền.</span>
        <span>Văn phòng: Hà Nội · Thanh Hóa · Quảng Ninh · TP. Hồ Chí Minh</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { BANK_ACCOUNTS, EMAIL, FACEBOOK_URL, FACTORY, HOTLINE, HOTLINE_DISPLAY, LEGAL } from '~/common/lib/company'

export default {
  name: 'Footer',
  data() {
    return {
      legal: LEGAL,
      bankAccounts: BANK_ACCOUNTS,
      factory: FACTORY,
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
      email: EMAIL,
      facebookUrl: FACEBOOK_URL,
      year: new Date().getFullYear(),
    }
  },
}
</script>
