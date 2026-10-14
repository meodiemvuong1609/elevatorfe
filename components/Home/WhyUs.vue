<template>
  <section class="hp-section bg-white border-y border-line">
    <div class="hp-container flex flex-wrap gap-10 lg:gap-14 items-center">
      <div class="hidden md:block hp-zoom flex-[1_1_420px] min-w-0 rounded-[10px] overflow-hidden h-[380px] lg:h-[520px] bg-line">
        <img
          src="~/assets/img/products/img15.webp"
          alt="Thang máy Hưng Phát với khung ốp đá marble và cửa vàng"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="flex-[1_1_480px] min-w-0 flex flex-col gap-5 md:gap-8">
        <div class="flex flex-col gap-3">
          <div class="hp-eyebrow">Vì sao chọn Hưng Phát</div>
          <h2 class="hp-h2">Uy tín · Chuyên nghiệp · Tận tâm</h2>
        </div>
        <div class="flex flex-col gap-4 md:gap-6">
          <div v-for="item in reasons" :key="item.title" class="flex gap-5">
            <span class="shrink-0 w-12 h-12 rounded-lg bg-paper border border-line inline-flex items-center justify-center" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path :d="item.icon" />
              </svg>
            </span>
            <div>
              <h3 class="m-0 mb-1 text-[19px] font-bold">{{ item.title }}</h3>
              <p class="m-0 text-body">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeWhyUs',
  data() {
    return {
      reasons: [
        {
          title: 'An toàn là ưu tiên đầu tiên',
          desc: 'Phanh khẩn cấp, cảm biến va chạm và các cơ cấu an toàn tiêu chuẩn được trang bị trên mọi thang.',
          icon: 'M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-5',
        },
        {
          title: 'Thiết kế hợp kiến trúc',
          desc: 'Cabin, cửa tầng và khung ốp được chọn theo phong cách từng ngôi nhà: hiện đại, tân cổ điển hay tối giản.',
          icon: 'M4 20h16M6 20V8l6-4 6 4v12M10 20v-5h4v5',
        },
        {
          title: 'Gần công trình của bạn',
          desc: 'Văn phòng tại Hà Nội, Thanh Hóa, Quảng Ninh và TP. Hồ Chí Minh — kỹ thuật viên đến nhanh khi cần.',
          icon: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
        },
      ],
    }
  },
}
</script>
