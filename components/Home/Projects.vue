<template>
  <section id="du-an" class="hp-section">
    <div class="hp-container flex flex-col gap-5 md:gap-10">
      <div class="flex flex-wrap gap-3 md:gap-6 justify-between items-end">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Công trình thực tế</div>
          <h2 class="hp-h2">Dự án Hưng Phát đã thực hiện</h2>
        </div>
        <nuxt-link to="/project" class="hp-link-arrow">
          Xem tất cả {{ total }} công trình
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </nuxt-link>
      </div>
      <div class="hp-rail md:grid-cols-2 lg:grid-cols-3">
        <ProjectTile
          v-for="project in projects"
          :key="project.id"
          :project="project"
          :to="{ path: '/project', query: { cong_trinh: project.id } }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { FEATURED_PROJECTS, PROJECTS } from '~/common/lib/projects'

export default {
  name: 'HomeProjects',
  data() {
    return { projects: FEATURED_PROJECTS, total: PROJECTS.length }
  },
}
</script>
