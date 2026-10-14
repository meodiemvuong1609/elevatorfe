<template>
  <div
    v-if="project"
    class="fixed inset-0 z-[9500] bg-night/95 text-white flex flex-col"
    role="dialog"
    aria-modal="true"
    :aria-label="`Ảnh công trình: ${project.name}`"
  >
    <div class="hp-container w-full flex items-center justify-between gap-4 h-16 shrink-0">
      <div class="min-w-0">
        <div class="font-bold truncate">{{ project.name }}</div>
        <div class="text-sm text-muted-dark tabular-nums">{{ index + 1 }} / {{ project.photos.length }}</div>
      </div>
      <button ref="close" type="button" class="w-11 h-11 shrink-0 rounded-md border border-panel-line inline-flex items-center justify-center hover:bg-panel" aria-label="Đóng" @click="close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>

    <div class="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16 pb-4" @click.self="close">
      <img :src="current.img" :alt="current.alt" class="max-w-full max-h-full object-contain rounded-md select-none" />
      <template v-if="project.photos.length > 1">
        <button type="button" class="nav-btn left-2 sm:left-4" aria-label="Ảnh trước" @click="go(-1)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button type="button" class="nav-btn right-2 sm:right-4" aria-label="Ảnh tiếp theo" @click="go(1)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </template>
    </div>

    <div v-if="project.photos.length > 1" class="shrink-0 pb-4 overflow-x-auto">
      <div class="flex gap-2 justify-center px-4 min-w-max mx-auto">
        <button
          v-for="(photo, i) in project.photos"
          :key="photo.img"
          type="button"
          class="w-14 h-14 rounded-md overflow-hidden border-2"
          :class="i === index ? 'border-signal' : 'border-transparent opacity-60 hover:opacity-100'"
          :aria-label="`Xem ảnh ${i + 1}`"
          :aria-current="i === index ? 'true' : null"
          @click="index = i"
        >
          <img :src="photo.img" alt="" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoLightbox',
  props: {
    // Công trình đang xem; null là đóng
    project: { type: Object, default: null },
  },
  data() {
    return { index: 0 }
  },
  computed: {
    current() {
      return this.project.photos[this.index]
    },
  },
  watch: {
    project(value) {
      this.index = 0
      if (process.client) {
        document.body.style.overflow = value ? 'hidden' : ''
        document.body.classList.toggle('hp-overlay-open', !!value)
        if (value) this.$nextTick(() => this.$refs.close && this.$refs.close.focus())
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKey)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKey)
    document.body.style.overflow = ''
    document.body.classList.remove('hp-overlay-open')
  },
  methods: {
    go(step) {
      const n = this.project.photos.length
      this.index = (this.index + step + n) % n
    },
    close() {
      this.$emit('close')
    },
    onKey(e) {
      if (!this.project) return
      if (e.key === 'Escape') this.close()
      else if (e.key === 'ArrowLeft') this.go(-1)
      else if (e.key === 'ArrowRight') this.go(1)
    },
  },
}
</script>

<style scoped>
.nav-btn {
  @apply absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink/80 border border-panel-line inline-flex items-center justify-center hover:bg-panel;
}
</style>
