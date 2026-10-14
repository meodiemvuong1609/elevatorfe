<template>
  <section id="san-pham" class="hp-section">
    <div class="hp-container flex flex-col gap-10 lg:gap-12">
      <div class="flex flex-wrap gap-6 justify-between items-end">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Dòng sản phẩm</div>
          <h2 class="hp-h2">Một đơn vị, đủ các dòng thang cho mọi công trình</h2>
        </div>
        <p class="m-0 max-w-[440px] text-body">
          Từ thang gia đình tiết kiệm diện tích đến thang tải hàng, tải ô tô — mỗi công trình được khảo sát và
          thiết kế bản vẽ riêng.
        </p>
      </div>

      <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        <nuxt-link
          v-for="(item, index) in featured"
          :key="item.title"
          to="/products"
          class="hp-zoom group bg-white border border-line hover:border-ink rounded-[10px] overflow-hidden flex flex-col"
        >
          <div class="h-[240px] overflow-hidden bg-line">
            <img :src="item.img" :alt="item.alt" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="p-6 flex flex-col gap-2">
            <div class="text-[13px] text-muted tabular-nums">0{{ index + 1 }}</div>
            <h3 class="m-0 text-[21px] font-bold group-hover:text-brand">{{ item.title }}</h3>
            <p class="m-0 text-body text-[15px]">{{ item.desc }}</p>
          </div>
        </nuxt-link>
      </div>

      <ul class="list-none m-0 p-0 grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6 border-t border-line-strong">
        <li
          v-for="(item, index) in others"
          :key="item.title"
          class="py-6 pr-6 border-b border-line-strong flex gap-4"
        >
          <span class="text-[13px] text-muted tabular-nums pt-1">0{{ featured.length + index + 1 }}</span>
          <div>
            <h3 class="m-0 mb-1 text-lg font-bold">{{ item.title }}</h3>
            <p class="m-0 text-body text-[15px]">{{ item.desc }}</p>
          </div>
        </li>
      </ul>

      <nuxt-link to="/products" class="hp-link-arrow self-start">
        Xem chi tiết các dòng thang
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeProductLines',
  data() {
    return {
      featured: [
        {
          title: 'Thang máy tải khách',
          desc: 'Cho nhà ở, chung cư, văn phòng, khách sạn và trung tâm thương mại.',
          img: require('~/assets/img/products/img6.webp'),
          alt: 'Thang máy tải khách trong biệt thự tân cổ điển',
        },
        {
          title: 'Thang máy quan sát',
          desc: 'Vách kính bao quanh — hiện đại, sáng sủa, tôn kiến trúc công trình.',
          img: require('~/assets/img/project/p12.jpg'),
          alt: 'Thang máy giếng kính khung inox',
        },
        {
          title: 'Home lift',
          desc: 'Thang gia đình nhỏ gọn, tối ưu cho nhà phố diện tích hạn chế.',
          img: require('~/assets/img/products/img14.webp'),
          alt: 'Thang máy gia đình Home lift, khung ốp gỗ tự nhiên',
        },
      ],
      others: [
        { title: 'Thang cửa bản lề', desc: 'Cửa kính cường lực mở như cửa thường, kích thước siêu nhỏ.' },
        { title: 'Thang máy bệnh viện', desc: 'Vận chuyển băng ca, giường bệnh và thiết bị y tế.' },
        { title: 'Thang máy tải hàng', desc: 'Nâng hàng hóa cho kho, nhà xưởng, tòa nhà cao tầng.' },
        { title: 'Thang máy xe hơi', desc: 'Tải xe 4, 7 hoặc 16 chỗ cho hầm xe, chung cư, showroom.' },
        { title: 'Thang máy thực phẩm', desc: 'Thang tải nhỏ chuyên dụng cho nhà hàng, bếp trung tâm.' },
      ],
    }
  },
}
</script>
