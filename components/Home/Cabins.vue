<template>
  <section id="cabin" class="hp-section bg-stone">
    <div class="hp-container flex flex-col gap-10">
      <div class="flex flex-wrap gap-6 justify-between items-end">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Mẫu cabin</div>
          <h2 class="hp-h2">Nội thất cabin hợp với kiến trúc ngôi nhà</h2>
        </div>
        <nuxt-link to="/cabins" class="hp-link-arrow">
          Xem đủ {{ cabinCount }} mẫu cabin
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </nuxt-link>
      </div>
      <div class="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <CabinCard v-for="cabin in cabins" :key="cabin.code" :cabin="cabin" compact />
      </div>
    </div>
  </section>
</template>

<script>
import { CABINS, findCabin } from '~/common/lib/cabins'

export default {
  name: 'HomeCabins',
  data() {
    return {
      // Các mẫu có ảnh nét nhất
      cabins: ['HPE 16', 'HPE 13', 'HPE 01', 'HPE 15'].map(findCabin),
      cabinCount: CABINS.length,
    }
  },
}
</script>
