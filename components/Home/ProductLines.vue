<template>
  <section id="san-pham" class="hp-section">
    <div class="hp-container flex flex-col gap-5 md:gap-10 lg:gap-12">
      <div class="flex flex-wrap gap-3 md:gap-6 justify-between items-end">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Dòng sản phẩm</div>
          <h2 class="hp-h2">Một đơn vị, đủ các dòng thang cho mọi công trình</h2>
        </div>
        <p class="hidden md:block m-0 max-w-[440px] text-body">
          Từ thang gia đình tiết kiệm diện tích đến thang tải hàng, tải ô tô — mỗi công trình được khảo sát và
          thiết kế bản vẽ riêng.
        </p>
      </div>

      <div class="hp-rail md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        <nuxt-link
          v-for="(item, index) in featured"
          :key="item.title"
          to="/products"
          class="hp-zoom group w-[268px] md:w-auto bg-white border border-line hover:border-ink rounded-[10px] overflow-hidden flex flex-col"
        >
          <div class="h-[180px] md:h-[240px] overflow-hidden bg-line">
            <img :src="item.img" :alt="item.alt" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="p-4 md:p-6 flex flex-col gap-1 md:gap-2">
            <div class="hidden md:block text-[13px] text-muted tabular-nums">0{{ index + 1 }}</div>
            <h3 class="m-0 text-base md:text-[21px] font-bold group-hover:text-brand">{{ item.title }}</h3>
            <p class="m-0 text-body text-[13px] md:text-[15px]">{{ item.short }}</p>
          </div>
        </nuxt-link>
      </div>

      <!-- Điện thoại: các dòng còn lại dạng nhãn tròn -->
      <ul class="md:hidden list-none m-0 p-0 flex flex-wrap gap-2">
        <li v-for="item in others" :key="item.title">
          <nuxt-link to="/products" class="inline-flex items-center min-h-[40px] px-3.5 rounded-full bg-white border border-line-strong text-[13px] font-semibold">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <ul class="hidden md:grid list-none m-0 p-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6 border-t border-line-strong">
        <li
          v-for="(item, index) in others"
          :key="item.title"
          class="py-6 pr-6 border-b border-line-strong flex gap-4"
        >
          <span class="text-[13px] text-muted tabular-nums pt-1">0{{ featured.length + index + 1 }}</span>
          <div>
            <h3 class="m-0 mb-1 text-lg font-bold">{{ item.title }}</h3>
            <p class="m-0 text-body text-[15px]">{{ item.short }}</p>
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
import { PRODUCT_LINES } from '~/common/lib/products'

export default {
  name: 'HomeProductLines',
  data() {
    // 3 dòng đầu có ảnh riêng, hiển thị dạng thẻ ảnh; các dòng còn lại dạng danh sách
    return {
      featured: PRODUCT_LINES.slice(0, 3),
      others: PRODUCT_LINES.slice(3),
    }
  },
}
</script>
