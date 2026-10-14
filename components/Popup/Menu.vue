<template>
  <div v-if="isShow" class="fixed inset-0 z-[3001] xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="absolute inset-0 bg-ink/60" @click="close"></div>
    <nav class="menu-panel absolute top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-white flex flex-col overflow-y-auto">
      <div class="flex items-center justify-between px-5 h-[72px] border-b border-line">
        <img src="~/assets/img/hungphat.png" class="h-11 w-auto" alt="Logo Hưng Phát Elevator" />
        <button
          type="button"
          class="w-11 h-11 inline-flex items-center justify-center rounded-md border border-line"
          aria-label="Đóng menu"
          @click="close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <nuxt-link
        v-for="item in menu"
        :key="item.to"
        :to="item.to"
        class="px-5 py-4 border-b border-line font-medium"
        exact-active-class="text-brand font-bold"
        @click.native="close"
      >
        {{ item.label }}
      </nuxt-link>
      <div class="p-5 mt-auto flex flex-col gap-3">
        <a :href="`tel:${hotline}`" class="hp-btn-primary w-full">Gọi {{ hotlineDisplay }}</a>
        <nuxt-link to="/contact" class="hp-btn-outline w-full" @click.native="close">Nhận báo giá</nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { HOTLINE, HOTLINE_DISPLAY } from '~/common/lib/company'

export default {
  name: 'PopupMenu',
  props: {
    isShow: { type: Boolean, default: false },
    menu: { type: Array, default: () => [] },
  },
  data() {
    return { hotline: HOTLINE, hotlineDisplay: HOTLINE_DISPLAY }
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.menu-panel {
  animation: slide-in 0.2s ease;
}
@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
