<template>
  <section class="bg-white">
    <div class="hp-container pt-12 pb-12 lg:pt-[72px] lg:pb-14 flex flex-wrap gap-10 lg:gap-14 items-center">
      <div class="flex-[1_1_480px] min-w-0 flex flex-col gap-6">
        <div class="inline-flex flex-wrap items-center gap-2.5 text-[13px] font-semibold tracking-[0.08em] uppercase text-muted">
          <span class="inline-flex items-center gap-1.5 bg-ink text-signal tabular-nums px-2 py-1 rounded tracking-[0.04em]">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M5 1l4 6H1z" fill="currentColor" /></svg>
            {{ foundedYear }}
          </span>
          Cung cấp · Lắp đặt · Bảo trì thang máy
        </div>
        <h1 class="m-0 text-[36px] sm:text-[46px] lg:text-[60px] leading-[1.08] font-extrabold tracking-[-0.025em]">
          Thang máy vận hành êm, an toàn — cho từng ngôi nhà và công trình.
        </h1>
        <p class="m-0 text-[17px] lg:text-[19px] text-body max-w-[560px]">
          Hưng Phát tư vấn, thiết kế bản vẽ, lắp đặt và bảo trì trọn gói thang máy gia đình, thang tải khách và
          thang chuyên dụng — với nhà máy sản xuất riêng tại Thanh Hóa và đội kỹ thuật trực 24/7.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#tu-van" class="hp-btn-primary">
            Khảo sát &amp; báo giá miễn phí
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <nuxt-link to="/products" class="hp-btn-outline">Xem các dòng thang</nuxt-link>
        </div>
        <ul class="list-none m-0 mt-2 p-0 flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] text-body">
          <li v-for="point in points" :key="point" class="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E7A46" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="flex-[1_1_440px] min-w-0 grid grid-cols-2 gap-3">
        <div class="hp-zoom row-span-2 rounded-[10px] overflow-hidden h-[360px] sm:h-[520px] bg-line">
          <img
            src="~/assets/img/project/p11.jpg"
            alt="Thang máy gia đình cửa kính khung inox do Hưng Phát lắp đặt"
            class="w-full h-full object-cover"
            fetchpriority="high"
          />
        </div>
        <div class="hp-zoom rounded-[10px] overflow-hidden h-[174px] sm:h-[254px] bg-line">
          <img
            src="~/assets/img/products/img4.webp"
            alt="Thang máy gia đình cửa vàng gương, khung ốp gỗ"
            class="w-full h-full object-cover"
          />
        </div>
        <nuxt-link
          to="/introduce"
          class="rounded-[10px] h-[174px] sm:h-[254px] bg-ink text-white p-4 sm:p-6 flex flex-col justify-between hover:bg-panel"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B5E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V10l5-3v3l5-3v3l4-2v13" /></svg>
          <div>
            <div class="text-[13px] sm:text-[15px] text-muted-dark mb-1">Nhà máy sản xuất riêng</div>
            <div class="text-[15px] sm:text-xl font-bold leading-snug">Thiệu Trung, Thanh Hóa — chủ động vật tư và tiến độ.</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { FOUNDED_YEAR } from '~/common/lib/company'

export default {
  name: 'HomeHero',
  data() {
    return {
      foundedYear: FOUNDED_YEAR,
      points: ['Khảo sát tận nơi miễn phí', 'Báo giá chi tiết, minh bạch', 'Bảo trì, cứu hộ 24/7'],
    }
  },
}
</script>
