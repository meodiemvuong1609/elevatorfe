<template>
  <section id="dich-vu" class="hp-section bg-ink text-white">
    <div class="hp-container flex flex-col gap-5 md:gap-10 lg:gap-12">
      <div class="flex flex-wrap gap-3 md:gap-6 justify-between items-end">
        <div class="max-w-[680px] flex flex-col gap-3">
          <div class="hp-eyebrow !text-signal">Dịch vụ trọn gói</div>
          <h2 class="hp-h2">Từ buổi khảo sát đầu tiên đến nhiều năm vận hành sau đó</h2>
        </div>
        <p class="hidden md:block m-0 max-w-[420px] text-muted-dark">
          Một đầu mối chịu trách nhiệm cho cả vòng đời thang máy — bạn không phải làm việc với nhiều nhà thầu.
        </p>
      </div>
      <ol class="list-none m-0 p-0 grid gap-2 md:gap-3 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="bg-panel border border-panel-line rounded-[10px] p-3.5 md:p-6 grid grid-cols-[auto_1fr] md:flex md:flex-col gap-x-3 gap-y-0.5 md:gap-3.5 items-start"
        >
          <span class="row-span-2 self-start bg-night text-signal font-bold tabular-nums px-2 md:px-2.5 py-1 rounded text-[13px] md:text-[15px] tracking-[0.06em] whitespace-nowrap">
            0{{ index + 1 }} ▲
          </span>
          <h3 class="m-0 text-[15px] md:text-[19px] font-bold">{{ step.title }}</h3>
          <p class="m-0 text-muted-dark text-[13px] md:text-[15px]">{{ step.desc }}</p>
        </li>
      </ol>
      <nuxt-link v-if="showLink" to="/service" class="hp-link-arrow self-start !border-white hover:!text-signal hover:!border-signal">
        Chi tiết dịch vụ
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeProcess',
  props: {
    // Ẩn link "Chi tiết dịch vụ" khi đang ở chính trang Dịch vụ
    showLink: { type: Boolean, default: true },
  },
  data() {
    return {
      steps: [
        { title: 'Tư vấn & khảo sát', desc: 'Kỹ thuật viên đến tận công trình đo hố thang, tư vấn miễn phí.' },
        { title: 'Bản vẽ & báo giá', desc: 'Thiết kế bản vẽ kỹ thuật, báo giá chi tiết từng hạng mục.' },
        { title: 'Sản xuất & lắp đặt', desc: 'Gia công tại nhà máy, đội thợ lắp đặt đúng tiến độ cam kết.' },
        { title: 'Kiểm định & bàn giao', desc: 'Chạy thử, kiểm định an toàn và hướng dẫn sử dụng.' },
        { title: 'Bảo trì 24/7', desc: 'Bảo trì định kỳ, sửa chữa và cứu hộ bất kể ngày đêm.' },
      ],
    }
  },
}
</script>
