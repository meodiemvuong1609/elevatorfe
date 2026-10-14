<template>
  <div>
    <PageHeader
      eyebrow="Dự án"
      title="Công trình Hưng Phát đã thực hiện"
      desc="Một số dự án thang máy gia đình Hưng Phát đã và đang thực hiện tại Hà Nội, Thanh Hóa và các tỉnh thành."
    />

    <section class="hp-section">
      <div class="hp-container flex flex-col gap-16 lg:gap-20">
        <article
          v-for="(project, index) in projects"
          :key="project.name"
          class="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center"
        >
          <div class="grid grid-cols-2 gap-3" :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <div
              v-for="photo in project.photos"
              :key="photo.img"
              class="hp-zoom rounded-[10px] overflow-hidden bg-line h-[280px] sm:h-[460px]"
            >
              <img :src="photo.img" :alt="photo.alt" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <span class="self-start bg-ink text-signal font-bold tabular-nums px-2.5 py-1 rounded text-[13px] tracking-[0.06em]">
              DỰ ÁN 0{{ index + 1 }}
            </span>
            <h2 class="m-0 text-2xl lg:text-[30px] font-extrabold leading-tight tracking-[-0.01em]">{{ project.name }}</h2>
            <dl class="m-0 grid grid-cols-3 border-y border-line-strong">
              <div v-for="spec in specs" :key="spec.key" class="py-4 pr-3 flex flex-col-reverse">
                <dt class="text-sm text-muted">{{ spec.label }}</dt>
                <dd class="m-0 text-xl font-bold tabular-nums">{{ project[spec.key] }}</dd>
              </div>
            </dl>
            <p class="m-0 text-body">
              Thang máy gia đình lắp đặt theo hố thang thực tế, hoàn thiện đồng bộ với nội thất ngôi nhà.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="hp-section bg-white border-y border-line">
      <div class="hp-container flex flex-col gap-10">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Hình ảnh</div>
          <h2 class="hp-h2">Thêm công trình thực tế</h2>
        </div>
        <div class="grid gap-3 grid-cols-2 lg:grid-cols-4">
          <div v-for="photo in gallery" :key="photo.img" class="hp-zoom rounded-[10px] overflow-hidden bg-line h-[220px] sm:h-[320px]">
            <img :src="photo.img" :alt="photo.alt" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <ConsultForm />
  </div>
</template>

<script>
import { PROJECTS } from '~/common/lib/projects'

export default {
  name: 'ProjectPage',
  head() {
    return {
      title: 'Dự án',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Một số dự án thang máy gia đình Hưng Phát đã và đang thực hiện tại Hà Nội, Thanh Hóa và các tỉnh thành.',
        },
      ],
    }
  },
  data() {
    return {
      projects: PROJECTS,
      specs: [
        { key: 'floors', label: 'Số tầng' },
        { key: 'load', label: 'Tải trọng' },
        { key: 'speed', label: 'Tốc độ' },
      ],
      gallery: [
        { img: require('~/assets/img/products/img6.webp'), alt: 'Thang máy biệt thự cửa vàng, khung ốp gỗ chạm' },
        { img: require('~/assets/img/products/img16.jpg'), alt: 'Thang máy khung vòm cột trắng viền vàng' },
        { img: require('~/assets/img/products/img8.webp'), alt: 'Thang máy cạnh cầu thang gỗ trong phòng khách' },
        { img: require('~/assets/img/products/img14.webp'), alt: 'Thang máy khung ốp gỗ tự nhiên, cửa kính' },
      ],
    }
  },
}
</script>
