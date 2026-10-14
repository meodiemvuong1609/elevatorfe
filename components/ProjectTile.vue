<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="to || undefined"
    :type="to ? undefined : 'button'"
    :class="to ? 'w-[250px] md:w-full h-[330px] md:h-[380px]' : 'w-full h-[380px]'"
    class="hp-zoom group relative block text-left rounded-[10px] overflow-hidden bg-line lg:h-[420px] cursor-pointer"
    :aria-label="`Xem ${project.photos.length} ảnh: ${project.name}`"
    @click="to ? null : $emit('open', project)"
  >
    <img :src="project.photos[0].img" :alt="project.photos[0].alt" class="w-full h-full object-cover" loading="lazy" />
    <span
      v-if="project.photos.length > 1"
      class="absolute top-3 right-3 bg-ink/80 text-white text-[13px] font-semibold px-2.5 py-1 rounded-md inline-flex items-center gap-1.5"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M21 17l-5-5-9 7" /></svg>
      {{ project.photos.length }} ảnh
    </span>
    <span class="absolute left-3 right-3 bottom-3 bg-white rounded-lg px-4 py-3.5 flex flex-col gap-0.5">
      <span class="text-[12px] font-semibold uppercase tracking-[0.06em] text-brand">{{ typeLabel }}</span>
      <span class="font-bold group-hover:text-brand">{{ project.name }}</span>
      <span v-if="specs" class="text-sm text-muted">{{ specs }}</span>
    </span>
  </component>
</template>

<script>
import { PROJECT_TYPES } from '~/common/lib/projects'

export default {
  name: 'ProjectTile',
  props: {
    project: { type: Object, required: true },
    // Có `to`: thẻ là liên kết (trang chủ). Không có: thẻ là nút, phát sự kiện `open` (trang Dự án).
    to: { type: [String, Object], default: null },
  },
  computed: {
    typeLabel() {
      const type = PROJECT_TYPES.find((t) => t.id === this.project.type)
      return type ? type.label : ''
    },
    specs() {
      return [this.project.floors, this.project.load, this.project.speed].filter(Boolean).join(' · ')
    },
  },
}
</script>
