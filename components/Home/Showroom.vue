<template>
  <section id="showroom" class="hp-section bg-ink text-white">
    <div class="hp-container grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] items-center">
      <div class="flex flex-col gap-4 md:gap-6">
        <div class="flex flex-col gap-3">
          <div class="hp-eyebrow !text-signal">{{ showroom.title }}</div>
          <h2 class="hp-h2">Đến xem và đi thử thang thật trước khi quyết định</h2>
        </div>
        <p class="m-0 text-muted-dark text-[15px] md:text-[17px]">
          Thang trưng bày tại showroom giúp bạn tận mắt thấy chất liệu kính, khung inox vàng, cabin và bảng
          điều khiển — rồi tự đi thử để cảm nhận độ êm khi thang vận hành.
        </p>
        <ul class="hidden md:flex list-none m-0 p-0 flex-col gap-3 text-muted-dark">
          <li v-for="point in points" :key="point" class="flex gap-3 items-start">
            <svg class="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B5E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
            {{ point }}
          </li>
        </ul>
        <address v-if="showroom.address" class="not-italic flex gap-3 items-start text-white font-semibold">
          <svg class="shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
          {{ showroom.address }}
        </address>
        <div class="flex flex-wrap gap-3">
          <a :href="`tel:${hotline}`" class="hp-btn-primary hidden md:inline-flex">
            Gọi hẹn lịch xem thang · {{ hotlineDisplay }}
          </a>
          <a :href="mapUrl" target="_blank" rel="noopener" class="hp-btn w-full md:w-auto border-[1.5px] border-white/40 text-white hover:border-white">
            Chỉ đường đến showroom
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 md:gap-3">
        <div class="hp-zoom md:row-span-2 rounded-[10px] overflow-hidden bg-panel h-[200px] md:h-[540px]">
          <img :src="gallery[0].img" :alt="gallery[0].alt" class="w-full h-full object-cover object-[68%_50%]" loading="lazy" />
        </div>
        <div
          v-for="(photo, i) in gallery.slice(1, 3)"
          :key="photo.img"
          class="hp-zoom rounded-[10px] overflow-hidden bg-panel h-[200px] md:h-[264px]"
          :class="i === 1 ? 'hidden md:block' : ''"
        >
          <img :src="photo.img" :alt="photo.alt" class="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { HOTLINE, HOTLINE_DISPLAY, OFFICES } from '~/common/lib/company'
import { SHOWROOM } from '~/common/lib/showroom'

export default {
  name: 'HomeShowroom',
  data() {
    const [lng, lat] = OFFICES.find((o) => o.id === 'thanh-hoa').coordinates
    return {
      showroom: SHOWROOM,
      mapUrl: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      // Ảnh 02 (logo khắc) đã dùng ở phần đầu trang chủ
      gallery: [SHOWROOM.photos[0], SHOWROOM.photos[2], SHOWROOM.photos[3]],
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
      points: [
        'Xem trực tiếp vật liệu kính cường lực, inox vàng gương và cabin hoàn thiện',
        'Đi thử thang, nghe kỹ thuật viên giải thích các tính năng an toàn',
        'Mang theo bản vẽ nhà để được tư vấn phương án ngay tại chỗ',
      ],
    }
  },
}
</script>
