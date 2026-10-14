<template>
  <div>
    <PageHeader
      eyebrow="Sản phẩm"
      title="Các dòng thang máy Hưng Phát"
      desc="Tám dòng thang cho nhà ở, tòa nhà, nhà xưởng và bệnh viện. Mỗi công trình được khảo sát, thiết kế bản vẽ và chọn tải trọng riêng."
    >
      <nav aria-label="Mục lục trang" class="flex flex-wrap gap-2 mt-2">
        <a v-for="item in toc" :key="item.href" :href="item.href" class="px-4 min-h-[40px] inline-flex items-center rounded-full border border-line-strong text-sm font-medium hover:border-ink">
          {{ item.label }}
        </a>
      </nav>
    </PageHeader>

    <!-- Các dòng thang -->
    <section id="dong-thang" class="hp-section">
      <div class="hp-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(item, index) in productLines"
          :key="item.title"
          class="hp-zoom bg-white border border-line rounded-[10px] overflow-hidden flex flex-col"
        >
          <div v-if="item.img" class="h-[220px] overflow-hidden bg-line">
            <img :src="item.img" :alt="item.alt" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div v-else class="h-[220px] bg-stone flex items-center justify-center" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#5A5F66" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path :d="item.icon" /></svg>
          </div>
          <div class="p-6 flex flex-col gap-2">
            <div class="text-[13px] text-muted tabular-nums">0{{ index + 1 }}</div>
            <h2 class="m-0 text-xl font-bold">{{ item.title }}</h2>
            <p class="m-0 text-body text-[15px]">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Thang tải khách: tải trọng và bảng kích thước -->
    <section id="kich-thuoc" class="hp-section bg-white border-y border-line">
      <div class="hp-container flex flex-col gap-10">
        <div class="flex flex-wrap gap-6 justify-between items-end">
          <div class="max-w-[680px] flex flex-col gap-3">
            <div class="hp-eyebrow">Thông số kỹ thuật</div>
            <h2 class="hp-h2">Kích thước thang máy tải khách</h2>
          </div>
          <p class="m-0 max-w-[460px] text-body">
            Thang máy tải khách có tải trọng 200 kg, 300 kg, 400 kg, 450 kg, 500 kg, nhập khẩu nguyên chiếc từ Châu Âu.
            Thiết kế linh hoạt theo thực tế ngôi nhà, mẫu mã đa dạng.
          </p>
        </div>
        <figure class="m-0 flex flex-col gap-3">
          <div class="overflow-x-auto border border-line rounded-[10px] bg-white">
            <img
              src="~/assets/img/products/information1.png"
              alt="Bảng kích thước thang máy tải khách: mã hiệu, tải trọng, tốc độ, kích thước cabin, khoảng mở cửa, kích thước hố thang, PIT và OH"
              class="min-w-[720px] w-full"
              loading="lazy"
            />
          </div>
          <figcaption class="text-sm text-muted">
            <span class="sm:hidden">Vuốt ngang để xem đầy đủ bảng. </span>Kích thước thực tế được xác nhận sau khi khảo sát hố thang.
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Tính năng an toàn -->
    <section id="an-toan" class="hp-section bg-ink text-white">
      <div class="hp-container flex flex-col gap-10">
        <div class="max-w-[680px] flex flex-col gap-3">
          <div class="hp-eyebrow !text-signal">An toàn tiêu chuẩn</div>
          <h2 class="hp-h2">8 tính năng an toàn trên mọi thang Hưng Phát</h2>
        </div>
        <ul class="list-none m-0 p-0 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="item in safetyFeatures"
            :key="item.title"
            class="bg-panel border border-panel-line rounded-[10px] p-6 flex flex-col gap-3"
          >
            <span class="safety-icon w-12 h-12 rounded-lg bg-night inline-flex items-center justify-center" aria-hidden="true">
              <component :is="item.icon" color="#FF6B5E" />
            </span>
            <h3 class="m-0 text-lg font-bold">{{ item.title }}</h3>
            <p class="m-0 text-muted-dark text-[15px]">{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Cabin -->
    <section id="cabin" class="hp-section bg-stone">
      <div class="hp-container flex flex-col gap-10">
        <div class="flex flex-wrap gap-6 justify-between items-end">
          <div class="max-w-[640px] flex flex-col gap-3">
            <div class="hp-eyebrow">Mẫu cabin</div>
            <h2 class="hp-h2">Cabin tiêu chuẩn và cabin lựa chọn</h2>
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

    <!-- Ảnh thực tế -->
    <section id="hinh-anh" class="hp-section">
      <div class="hp-container flex flex-col gap-10">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Hình ảnh</div>
          <h2 class="hp-h2">Thang máy Hưng Phát tại công trình</h2>
        </div>
        <div class="grid gap-3 grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(photo, index) in gallery"
            :key="photo.img"
            class="hp-zoom rounded-[10px] overflow-hidden bg-line"
            :class="index === 0 ? 'col-span-2 row-span-2 h-[420px] sm:h-[600px]' : 'h-[200px] sm:h-[294px]'"
          >
            <img :src="photo.img" :alt="photo.alt" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <ConsultForm />
  </div>
</template>

<script>
import { CABINS, findCabin } from '~/common/lib/cabins'
import { PRODUCT_LINES, SAFETY_FEATURES } from '~/common/lib/products'

export default {
  name: 'ProductsPage',
  head() {
    return {
      title: 'Sản phẩm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Các dòng thang máy Hưng Phát: thang tải khách, thang quan sát, home lift, thang cửa bản lề, thang tải hàng, thang bệnh viện. Kích thước và tính năng an toàn tiêu chuẩn.',
        },
      ],
    }
  },
  data() {
    return {
      toc: [
        { href: '#dong-thang', label: 'Các dòng thang' },
        { href: '#kich-thuoc', label: 'Kích thước' },
        { href: '#an-toan', label: 'Tính năng an toàn' },
        { href: '#cabin', label: 'Cabin' },
        { href: '#hinh-anh', label: 'Hình ảnh' },
      ],
      productLines: PRODUCT_LINES,
      safetyFeatures: SAFETY_FEATURES,
      cabins: ['HPE 01', 'HPE 13', 'HPE 16', 'HPE 17'].map(findCabin),
      cabinCount: CABINS.length,
      // Ảnh đã chọn theo độ nét; ảnh đầu tiên hiển thị lớn
      gallery: [
        { img: require('~/assets/img/products/img3.webp'), alt: 'Thang máy gia đình dưới đèn chùm, khung ốp gỗ' },
        { img: require('~/assets/img/products/img16.jpg'), alt: 'Thang máy khung vòm cột trắng viền vàng' },
        { img: require('~/assets/img/products/img4.webp'), alt: 'Cửa thang vàng gương, khung ốp gỗ' },
        { img: require('~/assets/img/products/img15.webp'), alt: 'Khung thang ốp đá marble, cửa vàng' },
        { img: require('~/assets/img/products/img11.jpg'), alt: 'Nội thất cabin ốp gỗ' },
        { img: require('~/assets/img/products/img12.webp'), alt: 'Khung thang ốp đá trắng vân xám' },
        { img: require('~/assets/img/products/img2.webp'), alt: 'Thang máy trong phòng khách cạnh cầu thang' },
        { img: require('~/assets/img/project/p32.jpg'), alt: 'Thang máy nhà phố cửa kính khung vàng' },
        { img: require('~/assets/img/products/img5.webp'), alt: 'Khung thang ốp gỗ chạm, sàn đá đỏ' },
      ],
    }
  },
}
</script>

<style scoped>
/* Icons/Feature2..8 không dùng prop color nên tô màu bằng CSS cho đồng bộ */
.safety-icon :deep(svg) {
  width: 26px;
  height: 26px;
  fill: #ff6b5e;
}
</style>
