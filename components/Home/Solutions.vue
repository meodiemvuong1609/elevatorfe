<template>
  <section class="hp-section bg-white border-y border-line">
    <div class="hp-container flex flex-col gap-5 md:gap-10 lg:gap-12">
      <div class="max-w-[720px] flex flex-col gap-3">
        <div class="hp-eyebrow">Giải pháp theo công trình</div>
        <h2 class="hp-h2">Mỗi loại công trình cần một phương án thang khác nhau</h2>
        <p class="hidden md:block m-0 text-body">
          Kích thước hố thang, tải trọng, tần suất sử dụng và phong cách nội thất quyết định dòng thang phù hợp.
          Dưới đây là những phương án Hưng Phát thường tư vấn.
        </p>
      </div>
      <div class="hp-rail md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <article
          v-for="item in solutions"
          :key="item.title"
          class="w-[250px] md:w-auto bg-paper border border-line rounded-[10px] p-5 md:p-6 flex flex-col gap-3"
        >
          <span class="w-12 h-12 rounded-lg bg-white border border-line inline-flex items-center justify-center" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path :d="item.icon" />
            </svg>
          </span>
          <h3 class="m-0 text-[19px] font-bold">{{ item.title }}</h3>
          <p class="m-0 text-body text-[15px] flex-1">{{ item.desc }}</p>
          <p class="m-0 text-[13px] font-semibold text-muted">
            Gợi ý: <span class="text-ink">{{ item.suggest }}</span>
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSolutions',
  data() {
    return {
      solutions: [
        {
          title: 'Nhà phố, nhà ống',
          desc: 'Diện tích hố thang hạn chế, cần thang nhỏ gọn, vận hành êm và tiết kiệm điện cho gia đình nhiều thế hệ.',
          suggest: 'Home lift, thang cửa bản lề',
          icon: 'M4 21V9l8-6 8 6v12M9 21v-6h6v6',
        },
        {
          title: 'Biệt thự',
          desc: 'Thang máy là điểm nhấn nội thất: cabin ốp gỗ, inox vàng gương hoặc giếng kính hòa vào không gian sống.',
          suggest: 'Thang tải khách, thang quan sát',
          icon: 'M3 21h18M5 21V10l7-6 7 6v11M10 21v-5h4v5M9 12h.01M15 12h.01',
        },
        {
          title: 'Văn phòng, khách sạn, chung cư',
          desc: 'Lưu lượng người lớn, thang chạy liên tục cả ngày nên cần độ bền, tốc độ và lịch bảo trì chặt chẽ.',
          suggest: 'Thang tải khách',
          icon: 'M4 21V3h10v18M14 9h6v12M7 7h4M7 11h4M7 15h4M17 13h.01M17 17h.01',
        },
        {
          title: 'Nhà xưởng, kho, nhà hàng',
          desc: 'Tải trọng lớn, chuyên chở hàng hóa, thực phẩm hoặc ô tô, tách riêng khỏi luồng di chuyển của người.',
          suggest: 'Thang tải hàng, thực phẩm, xe hơi',
          icon: 'M3 21V9l6 4V9l6 4V5h6v16zM7 17h2M12 17h2M17 17h2',
        },
        {
          title: 'Bệnh viện, phòng khám',
          desc: 'Cabin sâu đủ cho băng ca, giường bệnh; dừng tầng êm và chính xác để vận chuyển bệnh nhân an toàn.',
          suggest: 'Thang máy bệnh viện',
          icon: 'M4 21V5h16v16M12 8v6M9 11h6M10 21v-3h4v3',
        },
      ],
    }
  },
}
</script>
