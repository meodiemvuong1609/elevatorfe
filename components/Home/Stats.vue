<template>
  <section class="bg-white border-y border-line" aria-label="Hưng Phát qua các con số">
    <dl class="hp-container my-0 grid grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(item, index) in stats"
        :key="item.label"
        class="flex flex-col-reverse py-6 lg:py-7 px-4 lg:px-6 border-line"
        :class="cellClass[index]"
      >
        <dt class="text-muted text-[15px]">{{ item.label }}</dt>
        <dd class="m-0 text-[28px] lg:text-[34px] font-extrabold tracking-[-0.02em] tabular-nums">{{ item.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<script>
import { FOUNDED_YEAR } from '~/common/lib/company'

export default {
  name: 'HomeStats',
  data() {
    return {
      // Lưới 2 cột trên điện thoại, 4 cột trên desktop: kẻ đường phân cách theo từng ô
      cellClass: [
        '!pl-0 border-r border-b lg:border-b-0',
        'border-b lg:border-b-0 lg:border-r',
        '!pl-0 lg:!pl-6 border-r',
        '',
      ],
      stats: [
        { value: FOUNDED_YEAR, label: 'Năm bắt đầu hoạt động' },
        { value: '4 + 1', label: 'Văn phòng khu vực và nhà máy' },
        { value: '24/7', label: 'Trực cứu hộ và bảo trì' },
        { value: '8', label: 'Dòng thang máy cung cấp' },
      ],
    }
  },
}
</script>
