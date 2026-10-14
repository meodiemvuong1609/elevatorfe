<template>
  <section class="bg-white">
    <div class="hp-container pt-4 pb-8 sm:pt-12 sm:pb-12 lg:pt-[72px] lg:pb-14 flex flex-wrap gap-5 sm:gap-10 lg:gap-14 items-center">
      <div class="flex-[1_1_480px] min-w-0 flex flex-col gap-4 sm:gap-6">
        <div class="hidden sm:inline-flex flex-wrap items-center gap-2.5 text-[13px] font-semibold tracking-[0.08em] uppercase text-muted">
          <span class="inline-flex items-center gap-1.5 bg-ink text-signal tabular-nums px-2 py-1 rounded tracking-[0.04em]">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M5 1l4 6H1z" fill="currentColor" /></svg>
            {{ foundedYear }}
          </span>
          Cung cấp · Lắp đặt · Bảo trì thang máy
        </div>
        <h1 class="m-0 text-[29px] sm:text-[46px] lg:text-[60px] leading-[1.12] sm:leading-[1.08] font-extrabold tracking-[-0.025em]">
          Thang máy vận hành êm, an toàn — cho từng ngôi nhà và công trình.
        </h1>
        <p class="m-0 text-[15px] sm:text-[17px] lg:text-[19px] text-body max-w-[560px]">
          Hưng Phát tư vấn, thiết kế bản vẽ, lắp đặt và bảo trì trọn gói thang máy gia đình, thang tải khách và
          thang chuyên dụng — với nhà máy sản xuất riêng tại Thanh Hóa và đội kỹ thuật trực 24/7.
        </p>
        <div class="hidden sm:flex flex-wrap gap-3">
          <a href="#tu-van" class="hp-btn-primary">
            Khảo sát &amp; báo giá miễn phí
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <nuxt-link to="/products" class="hp-btn-outline">Xem các dòng thang</nuxt-link>
        </div>
        <ul class="list-none m-0 sm:mt-2 p-0 flex flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2.5 text-[13px] sm:text-[15px] text-ok sm:text-body font-semibold sm:font-normal">
          <li v-for="point in points" :key="point" class="flex items-center gap-1.5 sm:gap-2 bg-[#EAF4EE] sm:bg-transparent rounded-full px-2.5 py-1.5 sm:p-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E7A46" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="order-first sm:order-none flex-[1_1_440px] min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="hp-zoom relative sm:row-span-2 rounded-[14px] sm:rounded-[10px] overflow-hidden h-[330px] sm:h-[520px] bg-line">
          <span class="sm:hidden absolute z-[1] left-3 top-3 bg-ink text-signal text-xs font-bold px-2 py-1 rounded-md tracking-[0.04em]">
            ▲ {{ foundedYear }} · Cung cấp · Lắp đặt · Bảo trì
          </span>
          <img
            src="~/assets/img/cong-trinh/anh-tuan-anh-bac-ninh/01.jpg"
            alt="Thang máy khung gỗ chạm tân cổ điển nhà anh Tuấn Anh, Bắc Ninh"
            class="w-full h-full object-cover"
            fetchpriority="high"
          />
        </div>
        <div class="hidden sm:block hp-zoom rounded-[10px] overflow-hidden h-[254px] bg-line">
          <img
            src="~/assets/img/showroom/02.jpg"
            alt="Cửa cabin khắc logo Thang máy Hưng Phát – Kính chào quý khách"
            class="w-full h-full object-cover"
          />
        </div>
        <nuxt-link
          to="/introduce"
          class="hidden sm:flex rounded-[10px] h-[254px] bg-ink text-white p-6 flex-col justify-between hover:bg-panel"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B5E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V10l5-3v3l5-3v3l4-2v13" /></svg>
          <div>
            <!-- Bọc từ ghép trong nowrap để không bị ngắt giữa từ (vd. "vật / tư") -->
            <div class="text-[13px] sm:text-[15px] text-muted-dark mb-1">
              <span class="whitespace-nowrap">Cơ sở chính</span> – <span class="whitespace-nowrap">xưởng sản xuất</span>
            </div>
            <div class="text-[15px] sm:text-xl font-bold leading-snug">
              <span class="whitespace-nowrap">Thiệu Trung,</span> <span class="whitespace-nowrap">Thanh Hóa</span>
            </div>
            <div class="hidden sm:block text-[15px] text-muted-dark mt-1">
              <span class="whitespace-nowrap">Tự sản xuất,</span> <span class="whitespace-nowrap">chủ động tiến độ</span>
            </div>
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
