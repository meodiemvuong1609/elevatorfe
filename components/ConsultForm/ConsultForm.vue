<template>
  <div class="section-connect w-full h-fit" :class="wrapperClass">
    <div class="fill w-full flex justify-center pb-10">
      <form class="content px-4 py-10 w-full sm:w-[450px]" novalidate @submit.prevent="submit">
        <p class="text-white text-3xl font-bold text-center my-5">TƯ VẤN VÀ BÁO GIÁ</p>
        <div class="flex flex-col gap-3">
          <v-input v-model="form.name" placeholder="Họ và tên *" autocomplete="name" />
          <v-input v-model="form.email" placeholder="Email" autocomplete="email" />
          <v-input v-model="form.phone" placeholder="Số điện thoại liên hệ *" autocomplete="tel" />
          <v-input
            v-model="form.message"
            type="textarea"
            :resize="false"
            :rows="5"
            placeholder="Chúng tôi có thể giúp gì cho bạn?"
          />
          <p v-if="error" class="text-white bg-red px-3 py-2 rounded text-sm">{{ error }}</p>
          <v-button type="primary" html-type="submit" class="w-full">Gửi yêu cầu</v-button>
          <p class="text-white text-sm text-center">
            Hoặc gọi ngay
            <a :href="`tel:${hotline}`" class="font-bold underline">{{ hotlineDisplay }}</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { EMAIL, HOTLINE, HOTLINE_DISPLAY } from '~/common/lib/company'

const PHONE_REGEX = /^(\+?84|0)\d{9,10}$/

export default {
  name: 'ConsultForm',
  props: {
    wrapperClass: {
      type: String,
      default: 'mt-8',
    },
  },
  data() {
    return {
      form: { name: '', email: '', phone: '', message: '' },
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
.section-connect {
  background-image: url('~/assets/img/banner-intro.jpeg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.fill {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
