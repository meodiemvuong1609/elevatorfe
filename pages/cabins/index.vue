<template>
  <div>
    <PageHeader
      eyebrow="Mẫu cabin"
      title="Cabin thang máy Hưng Phát"
      :desc="`${cabins.length} mẫu cabin với vách inox, cửa, trần đèn LED, sàn đá và bảng điều khiển đồng bộ. Chọn một mẫu làm điểm khởi đầu — kỹ thuật viên sẽ tư vấn điều chỉnh theo không gian nhà bạn.`"
    >
      <nav aria-label="Nhóm cabin" class="flex flex-wrap gap-2 mt-2">
        <a href="#tieu-chuan" class="px-4 min-h-[40px] inline-flex items-center rounded-full border border-line-strong text-sm font-medium hover:border-ink">
          Cabin tiêu chuẩn ({{ standard.length }})
        </a>
        <a href="#lua-chon" class="px-4 min-h-[40px] inline-flex items-center rounded-full border border-line-strong text-sm font-medium hover:border-ink">
          Cabin lựa chọn ({{ optional.length }})
        </a>
      </nav>
    </PageHeader>

    <section v-for="group in groups" :id="group.id" :key="group.id" class="hp-section" :class="group.bg">
      <div class="hp-container flex flex-col gap-10">
        <div class="max-w-[680px] flex flex-col gap-3">
          <div class="hp-eyebrow">{{ group.eyebrow }}</div>
          <h2 class="hp-h2">{{ group.title }}</h2>
          <p class="m-0 text-body">{{ group.desc }}</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CabinCard v-for="cabin in group.items" :key="cabin.code" :cabin="cabin" />
        </div>
      </div>
    </section>

    <ConsultForm />
  </div>
</template>

<script>
import { CABINS, STANDARD_CABIN_COUNT } from '~/common/lib/cabins'

export default {
  name: 'CabinsPage',
  head() {
    return {
      title: 'Cabin thang máy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Mẫu cabin thang máy tiêu chuẩn và tùy chọn của Hưng Phát: vách inox, cửa, trần đèn LED, sàn đá, tay vịn, bảng điều khiển.',
        },
      ],
    }
  },
  data() {
    const standard = CABINS.slice(0, STANDARD_CABIN_COUNT)
    const optional = CABINS.slice(STANDARD_CABIN_COUNT)
    return {
      cabins: CABINS,
      standard,
      optional,
      groups: [
        {
          id: 'tieu-chuan',
          eyebrow: 'Cabin tiêu chuẩn',
          title: 'Bộ cabin tiêu chuẩn',
          desc: 'Vách inox sọc nhuyễn kết hợp inox gương tông bạc — bền, dễ vệ sinh, hợp với phần lớn công trình nhà ở và văn phòng.',
          items: standard,
          bg: '',
        },
        {
          id: 'lua-chon',
          eyebrow: 'Cabin lựa chọn',
          title: 'Cabin lựa chọn theo phong cách',
          desc: 'Inox chạm khắc, inox màu vàng, màu đồng, kính cường lực và tranh kính trang trí cho biệt thự và công trình cần điểm nhấn.',
          items: optional,
          bg: 'bg-stone',
        },
      ],
    }
  },
}
</script>
