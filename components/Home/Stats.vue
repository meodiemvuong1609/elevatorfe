<template>
  <section class="bg-white border-y border-line" aria-label="Hưng Phát qua các con số">
    <dl class="hp-container my-0 grid grid-cols-4">
      <div
        v-for="(item, index) in stats"
        :key="item.label"
        class="flex flex-col-reverse justify-end text-center md:text-left py-3.5 md:py-7 px-1 md:px-6 border-line"
        :class="[index < stats.length - 1 ? 'border-r' : '', index === 0 ? 'md:!pl-0' : '']"
      >
        <dt class="text-muted text-[11px] leading-[1.3] md:text-[15px] md:leading-normal">{{ item.label }}</dt>
        <dd class="m-0 text-[20px] md:text-[28px] lg:text-[34px] font-extrabold tracking-[-0.02em] tabular-nums">{{ item.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<script>
import { FOUNDED_YEAR, OFFICES } from '~/common/lib/company'
import { PROJECTS } from '~/common/lib/projects'

export default {
  name: 'HomeStats',
  data() {
    return {
      stats: [
        { value: FOUNDED_YEAR, label: 'Năm bắt đầu hoạt động' },
        { value: OFFICES.length, label: 'Cơ sở, gồm xưởng sản xuất' },
        { value: PROJECTS.length, label: 'Công trình tiêu biểu' },
        { value: '24/7', label: 'Trực cứu hộ và bảo trì' },
      ],
    }
  },
}
</script>
