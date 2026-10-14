<template>
  <section id="cabin" class="hp-section bg-stone">
    <div class="hp-container flex flex-col gap-10">
      <div class="flex flex-wrap gap-6 justify-between items-end">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Mẫu cabin</div>
          <h2 class="hp-h2">Nội thất cabin hợp với kiến trúc ngôi nhà</h2>
        </div>
        <nuxt-link to="/cabins" class="hp-link-arrow">
          Xem toàn bộ mẫu cabin
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </nuxt-link>
      </div>
      <div class="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <figure v-for="cabin in cabins" :key="cabin.code" class="hp-zoom m-0 flex flex-col gap-3">
          <div class="rounded-[10px] overflow-hidden h-[260px] sm:h-[360px] bg-line-strong">
            <img :src="cabin.img" :alt="`Mẫu cabin ${cabin.code}, ${cabin.tone.toLowerCase()}`" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <figcaption class="flex flex-wrap justify-between gap-x-2 text-[15px]">
            <span class="font-semibold">Mẫu {{ cabin.code }}</span>
            <span class="text-muted">{{ cabin.tone }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeCabins',
  data() {
    return {
      cabins: [
        { code: 'HP-16', tone: 'Tông vàng gương', img: require('~/assets/img/cabins/Cabin16.jpg') },
        { code: 'HP-13', tone: 'Tông bạc – đen', img: require('~/assets/img/cabins/Cabin13.jpg') },
        { code: 'HP-01', tone: 'Tông bạc', img: require('~/assets/img/cabins/Cabin1.jpg') },
        { code: 'HP-15', tone: 'Vàng, trần vòm', img: require('~/assets/img/cabins/Cabin15.jpg') },
      ],
    }
  },
}
</script>
