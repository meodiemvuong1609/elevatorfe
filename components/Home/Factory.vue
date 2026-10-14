<template>
  <section id="nha-may" class="hp-section">
    <div class="hp-container flex flex-wrap gap-10 lg:gap-14 items-stretch">
      <div class="flex-[1_1_480px] min-w-0 flex flex-col gap-6 justify-center">
        <div class="flex flex-col gap-3">
          <div class="hp-eyebrow">Nhà máy sản xuất</div>
          <h2 class="hp-h2">Sản xuất tại Thiệu Trung, Thanh Hóa</h2>
        </div>
        <p class="m-0 text-body text-[17px]">
          Không chỉ phân phối, Hưng Phát có nhà máy sản xuất riêng đặt tại {{ factory.address }}.
          Chủ động từ khâu sản xuất giúp chúng tôi trả lời khách hàng bằng chất lượng và tiến độ, không phải bằng lời hứa.
        </p>
        <ul class="list-none m-0 p-0 flex flex-col gap-4">
          <li v-for="item in benefits" :key="item.title" class="flex gap-4">
            <svg class="shrink-0 mt-0.5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E7A46" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
            <div>
              <h3 class="m-0 text-[17px] font-bold">{{ item.title }}</h3>
              <p class="m-0 text-body text-[15px]">{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex-[1_1_400px] min-w-0 bg-ink text-white rounded-xl p-7 sm:p-9 flex flex-col justify-between gap-10">
        <div class="flex items-start justify-between gap-4">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6B5E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V10l5-3v3l5-3v3l4-2v13M8 17h2M13 17h2" /></svg>
          <span class="bg-night text-signal font-bold tabular-nums px-2.5 py-1 rounded text-[13px] tracking-[0.06em]">THANH HÓA</span>
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-[13px] uppercase tracking-[0.1em] text-muted-dark font-semibold">Địa chỉ nhà máy</div>
          <address class="not-italic text-2xl sm:text-[28px] font-bold leading-snug">
            Khu phố Trà Thượng,<br />xã Thiệu Trung,<br />tỉnh Thanh Hóa
          </address>
          <div class="flex flex-wrap gap-3 mt-2">
            <a :href="mapUrl" target="_blank" rel="noopener" class="hp-btn bg-white text-ink hover:bg-paper">
              Chỉ đường đến nhà máy
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
            </a>
            <a :href="`tel:${hotline}`" class="hp-btn border-[1.5px] border-white/40 text-white hover:border-white">
              {{ hotlineDisplay }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FACTORY, HOTLINE, HOTLINE_DISPLAY } from '~/common/lib/company'

export default {
  name: 'HomeFactory',
  data() {
    const [lng, lat] = FACTORY.coordinates
    return {
      factory: FACTORY,
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      benefits: [
        {
          title: 'Kiểm soát chất lượng tại nguồn',
          desc: 'Thiết bị được gia công và kiểm tra tại nhà máy trước khi vận chuyển đến công trình.',
        },
        {
          title: 'Chủ động tiến độ',
          desc: 'Ít phụ thuộc nguồn hàng bên ngoài, lịch lắp đặt bám sát tiến độ xây dựng của bạn.',
        },
        {
          title: 'Linh hoạt theo từng công trình',
          desc: 'Kích thước và hoàn thiện được điều chỉnh theo hố thang và kiến trúc thực tế.',
        },
      ],
    }
  },
}
</script>
