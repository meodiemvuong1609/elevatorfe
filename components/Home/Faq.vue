<template>
  <section id="hoi-dap" class="hp-section bg-white border-y border-line">
    <div class="hp-container flex flex-wrap gap-10 lg:gap-14">
      <div class="flex-[1_1_320px] min-w-0 flex flex-col gap-3">
        <div class="hp-eyebrow">Câu hỏi thường gặp</div>
        <h2 class="hp-h2">Trước khi lắp thang máy, khách hàng thường hỏi</h2>
        <p class="m-0 text-body">
          Chưa thấy câu hỏi của bạn? Gọi <a :href="`tel:${hotline}`" class="font-bold hover:text-brand">{{ hotlineDisplay }}</a>,
          kỹ thuật viên sẽ trả lời trực tiếp.
        </p>
      </div>
      <div class="flex-[2_1_520px] min-w-0 border-t border-line-strong">
        <details
          v-for="(item, index) in faqs"
          :key="item.q"
          class="group border-b border-line-strong"
          :class="index >= 3 && !showAll ? 'hidden md:block' : ''"
        >
          <summary class="flex items-center justify-between gap-4 md:gap-6 py-4 md:py-5 cursor-pointer list-none text-base md:text-lg font-bold hover:text-brand">
            {{ item.q }}
            <span class="shrink-0 w-8 h-8 rounded-full border border-line-strong inline-flex items-center justify-center transition-transform group-open:rotate-45" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14" /></svg>
            </span>
          </summary>
          <p class="m-0 pb-6 pr-12 text-body">{{ item.a }}</p>
        </details>
        <button v-if="!showAll" type="button" class="md:hidden min-h-[48px] font-bold text-brand text-[15px]" @click="showAll = true">
          Xem thêm {{ faqs.length - 3 }} câu hỏi
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { HOTLINE, HOTLINE_DISPLAY } from '~/common/lib/company'
import { FAQS } from '~/common/lib/faqs'

export default {
  name: 'HomeFaq',
  data() {
    return { faqs: FAQS, hotline: HOTLINE, hotlineDisplay: HOTLINE_DISPLAY, showAll: false }
  },
}
</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
</style>
