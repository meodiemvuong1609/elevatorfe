<template>
  <section id="mang-luoi" class="hp-section">
    <div class="hp-container flex flex-col gap-8">
      <div class="flex flex-col gap-3 max-w-[640px]">
        <div class="hp-eyebrow">Mạng lưới</div>
        <h2 class="hp-h2">Văn phòng &amp; nhà máy</h2>
      </div>
      <ul class="list-none m-0 p-0 border-t border-line-strong">
        <li
          v-for="office in offices"
          :key="office.title"
          class="py-5 border-b border-line-strong flex flex-wrap items-center gap-x-6 gap-y-1"
        >
          <span class="font-bold basis-[220px] flex items-center gap-2">
            {{ office.title }}
            <span v-if="office.title === factoryTitle" class="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] bg-ink text-signal px-1.5 py-0.5 rounded">Sản xuất</span>
          </span>
          <span class="text-body flex-[1_1_320px]">{{ office.address }}</span>
          <a
            :href="mapUrl(office)"
            target="_blank"
            rel="noopener"
            class="text-sm font-semibold inline-flex items-center gap-1 min-h-[44px] hover:text-brand"
          >
            Chỉ đường
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { FACTORY, OFFICES } from '~/common/lib/company'

export default {
  name: 'HomeNetwork',
  data() {
    return { offices: OFFICES, factoryTitle: FACTORY.title }
  },
  methods: {
    mapUrl(office) {
      const [lng, lat] = office.coordinates
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    },
  },
}
</script>
