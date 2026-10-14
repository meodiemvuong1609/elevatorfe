<template>
  <section id="du-an" class="hp-section">
    <div class="hp-container flex flex-col gap-10">
      <div class="flex flex-wrap gap-6 justify-between items-end">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Công trình thực tế</div>
          <h2 class="hp-h2">Dự án Hưng Phát đã thực hiện</h2>
        </div>
        <nuxt-link to="/project" class="hp-link-arrow">
          Xem chi tiết dự án
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </nuxt-link>
      </div>
      <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        <figure
          v-for="project in projects"
          :key="project.name"
          class="hp-zoom m-0 relative rounded-[10px] overflow-hidden h-[380px] lg:h-[420px] bg-line"
        >
          <img :src="project.photos[0].img" :alt="project.photos[0].alt" class="w-full h-full object-cover" loading="lazy" />
          <figcaption class="absolute left-3 right-3 bottom-3 bg-white rounded-lg px-4 py-3.5 flex flex-col">
            <span class="font-bold">{{ project.area }}</span>
            <span class="text-sm text-muted">{{ project.floors }} · {{ project.load }} · {{ project.speed }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import { PROJECTS } from '~/common/lib/projects'

export default {
  name: 'HomeProjects',
  data() {
    return { projects: PROJECTS }
  },
}
</script>
