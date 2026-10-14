<template>
  <section id="hoat-dong" class="hp-section bg-stone">
    <div class="hp-container flex flex-col gap-5 md:gap-10">
      <div class="flex flex-wrap gap-3 md:gap-6 justify-between items-end">
        <div class="max-w-[680px] flex flex-col gap-3">
          <div class="hp-eyebrow">Đội ngũ &amp; hoạt động</div>
          <h2 class="hp-h2">Những người đứng sau mỗi chiếc thang Hưng Phát</h2>
        </div>
        <p class="hidden md:block m-0 max-w-[460px] text-body">
          Kỹ sư, kỹ thuật viên lắp đặt – bảo trì và nhân viên văn phòng tại Hà Nội, Thanh Hóa, Quảng Ninh,
          TP. Hồ Chí Minh cùng đội ngũ nhà máy Thiệu Trung.
        </p>
      </div>

      <article v-for="activity in activities" :key="activity.title" class="flex flex-col gap-4">
        <div class="grid gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <figure class="hp-zoom m-0 rounded-[10px] overflow-hidden bg-line-strong aspect-[16/9]">
            <img :src="activity.photos[0].img" :alt="activity.photos[0].alt" class="w-full h-full object-cover" loading="lazy" />
          </figure>
          <div class="flex flex-col gap-3">
            <figure
              v-for="photo in activity.photos.slice(1, 2)"
              :key="photo.img"
              class="hidden lg:block hp-zoom m-0 rounded-[10px] overflow-hidden bg-line-strong aspect-[16/9]"
            >
              <img :src="photo.img" :alt="photo.alt" class="w-full h-full object-cover" loading="lazy" />
            </figure>
            <div class="bg-ink text-white rounded-[10px] p-4 md:p-6 flex-1 flex flex-col justify-end gap-2">
              <span class="self-start bg-night text-signal font-bold px-2.5 py-1 rounded text-[13px] tracking-[0.06em] uppercase">Hoạt động</span>
              <h3 class="m-0 text-xl font-bold">{{ activity.title }}</h3>
              <p class="m-0 text-muted-dark text-[15px]">{{ activity.desc }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { ACTIVITIES } from '~/common/lib/activities'

export default {
  name: 'HomeActivities',
  data() {
    return { activities: ACTIVITIES }
  },
}
</script>
