<template>
  <div>
    <PageHeader
      eyebrow="Dự án"
      title="Công trình Hưng Phát đã thực hiện"
      :desc="`${projects.length} công trình thang máy gia đình, tân cổ điển và thang tải hàng tại Hà Nội, Thanh Hóa, Bắc Ninh, Hưng Yên và các tỉnh thành. Bấm vào từng công trình để xem ảnh.`"
    >
      <div role="group" aria-label="Lọc theo kiểu thang" class="flex flex-wrap gap-2 mt-2">
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          class="px-4 min-h-[40px] inline-flex items-center gap-1.5 rounded-full border text-sm font-medium"
          :class="active === filter.id ? 'bg-ink text-white border-ink' : 'border-line-strong hover:border-ink'"
          :aria-pressed="active === filter.id ? 'true' : 'false'"
          @click="active = filter.id"
        >
          {{ filter.label }}
          <span class="tabular-nums" :class="active === filter.id ? 'text-muted-dark' : 'text-muted'">{{ filter.count }}</span>
        </button>
      </div>
    </PageHeader>

    <section class="hp-section">
      <div class="hp-container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectTile v-for="project in visible" :key="project.id" :project="project" @open="open" />
      </div>
    </section>

    <HomeShowroom />
    <ConsultForm />
    <PhotoLightbox :project="opened" @close="opened = null" />
  </div>
</template>

<script>
import { PROJECTS, PROJECT_TYPES } from '~/common/lib/projects'

export default {
  name: 'ProjectPage',
  head() {
    return {
      title: 'Dự án',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${PROJECTS.length} công trình thang máy Hưng Phát đã thực hiện: thang kính gia đình, thang tân cổ điển và thang tải hàng tại Hà Nội, Thanh Hóa, Bắc Ninh, Hưng Yên.`,
        },
      ],
    }
  },
  data() {
    return {
      projects: PROJECTS,
      active: 'all',
      opened: null,
    }
  },
  computed: {
    filters() {
      return [
        { id: 'all', label: 'Tất cả', count: this.projects.length },
        ...PROJECT_TYPES.map((t) => ({ ...t, count: this.projects.filter((p) => p.type === t.id).length })),
      ]
    },
    visible() {
      return this.active === 'all' ? this.projects : this.projects.filter((p) => p.type === this.active)
    },
  },
  mounted() {
    // Mở sẵn ảnh khi đến từ trang chủ: /project?cong_trinh=<id>
    const id = this.$route.query.cong_trinh
    if (id) this.opened = this.projects.find((p) => p.id === id) || null
  },
  methods: {
    open(project) {
      this.opened = project
    },
  },
}
</script>
