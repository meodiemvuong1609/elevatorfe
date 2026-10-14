<template>
  <section id="tu-van" class="bg-stone hp-section" :class="wrapperClass">
    <div class="hp-container flex flex-wrap gap-10 lg:gap-14 items-start">
      <div class="flex-[1_1_380px] min-w-0 flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <div class="hp-eyebrow">Tư vấn miễn phí</div>
          <h2 class="hp-h2">Nhận khảo sát &amp; báo giá cho công trình của bạn</h2>
        </div>
        <p class="m-0 text-body">
          Để lại thông tin, kỹ thuật viên Hưng Phát sẽ gọi lại để hỏi nhu cầu, hẹn lịch khảo sát hố thang
          và gửi báo giá chi tiết từng hạng mục. Bạn chỉ quyết định khi đã rõ phương án và chi phí.
        </p>
        <ul class="list-none m-0 p-0 flex flex-col gap-3 text-body">
          <li v-for="point in points" :key="point" class="flex gap-3 items-start">
            <svg class="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E7A46" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
            {{ point }}
          </li>
        </ul>
        <a :href="`tel:${hotline}`" class="self-start flex items-center gap-4 bg-ink text-white rounded-lg px-5 py-4 hover:bg-panel">
          <span class="w-11 h-11 rounded-full bg-brand inline-flex items-center justify-center">
            <icons-phone color="white" />
          </span>
          <span class="flex flex-col leading-tight">
            <span class="text-[13px] text-muted-dark">Cần gấp? Gọi hotline / Zalo</span>
            <span class="text-xl font-bold tabular-nums">{{ hotlineDisplay }}</span>
          </span>
        </a>
      </div>

      <form
        class="flex-[1_1_420px] min-w-0 bg-white border border-line rounded-xl p-6 sm:p-9 flex flex-col gap-[18px]"
        aria-label="Yêu cầu tư vấn"
        novalidate
        @submit.prevent="submit"
      >
        <div>
          <h3 class="m-0 mb-1.5 text-2xl font-extrabold tracking-[-0.01em]">Gửi yêu cầu tư vấn</h3>
          <p class="m-0 text-body text-[15px]">Các mục có dấu * là bắt buộc.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="hp-field">Họ và tên *
            <input v-model="form.name" type="text" name="name" autocomplete="name" placeholder="Nguyễn Văn A" />
          </label>
          <label class="hp-field">Số điện thoại *
            <input v-model="form.phone" type="tel" name="phone" autocomplete="tel" placeholder="09xx xxx xxx" />
          </label>
        </div>
        <label class="hp-field">Email
          <input v-model="form.email" type="email" name="email" autocomplete="email" placeholder="ban@email.com" />
        </label>
        <label class="hp-field">Nhu cầu
          <select v-model="form.need" name="need">
            <option v-for="need in needs" :key="need">{{ need }}</option>
          </select>
        </label>
        <label class="hp-field">Mô tả công trình
          <textarea v-model="form.message" name="message" rows="4" placeholder="Ví dụ: nhà phố 5 tầng, hố thang khoảng 1,5 × 1,5 m"></textarea>
        </label>
        <p v-if="error" class="m-0 text-white bg-brand px-3 py-2 rounded text-sm" role="alert">{{ error }}</p>
        <button type="submit" class="hp-btn-primary w-full min-h-[52px] text-base">Gửi yêu cầu</button>
        <p class="m-0 text-[13px] text-muted text-center">
          Thông tin chỉ dùng để Hưng Phát liên hệ tư vấn cho bạn.
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import { EMAIL, HOTLINE, HOTLINE_DISPLAY } from '~/common/lib/company'

const PHONE_REGEX = /^(\+?84|0)\d{9,10}$/
const NEEDS = [
  'Lắp đặt thang máy mới',
  'Bảo trì / sửa chữa thang đang dùng',
  'Thay cabin, nâng cấp thang',
  'Khác',
]

export default {
  name: 'ConsultForm',
  props: {
    wrapperClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      form: { name: '', email: '', phone: '', need: NEEDS[0], message: '' },
      needs: NEEDS,
      points: [
        'Khảo sát tận nơi, tư vấn dòng thang phù hợp diện tích và ngân sách',
        'Bản vẽ kỹ thuật và báo giá chi tiết, minh bạch từng hạng mục',
        'Một đầu mối từ sản xuất, lắp đặt đến bảo trì sau bàn giao',
      ],
      error: '',
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
    }
  },
  methods: {
    submit() {
      const phone = this.form.phone.replace(/[\s.-]/g, '')
      if (!this.form.name.trim()) {
        this.error = 'Vui lòng nhập họ và tên.'
        return
      }
      if (!PHONE_REGEX.test(phone)) {
        this.error = 'Số điện thoại không hợp lệ.'
        return
      }
      this.error = ''

      // Chưa có API nhận form: mở ứng dụng email với nội dung soạn sẵn.
      // Khi có backend, thay đoạn này bằng lời gọi API.
      const body = [
        `Họ và tên: ${this.form.name.trim()}`,
        `Số điện thoại: ${phone}`,
        `Email: ${this.form.email.trim()}`,
        `Nhu cầu: ${this.form.need}`,
        '',
        this.form.message.trim(),
      ].join('\n')
      const subject = `Yêu cầu tư vấn - ${this.form.name.trim()}`
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    },
  },
}
</script>

<style scoped>
.hp-field {
  @apply flex flex-col gap-1.5 text-sm font-semibold;
}
.hp-field input,
.hp-field select,
.hp-field textarea {
  @apply font-normal text-base px-3.5 py-3 border border-line-strong rounded-md bg-white min-h-[48px] w-full;
}
.hp-field textarea {
  @apply resize-y;
}
.hp-field input:focus,
.hp-field select:focus,
.hp-field textarea:focus {
  @apply outline outline-2 outline-ink outline-offset-1;
}
</style>
