<template>
  <article class="hp-zoom flex flex-col gap-3" :class="compact ? 'w-[150px] md:w-auto' : 'bg-white border border-line rounded-[10px] overflow-hidden'">
    <div class="overflow-hidden bg-line-strong" :class="compact ? 'rounded-[10px] h-[220px] md:h-[360px]' : 'h-[340px]'">
      <img :src="cabin.img" :alt="`Mẫu cabin ${cabin.code}: ${cabin.wall.toLowerCase()}`" class="w-full h-full object-cover" loading="lazy" />
    </div>
    <div v-if="compact" class="flex flex-col">
      <h3 class="m-0 text-[15px] font-semibold">Mẫu {{ cabin.code }}</h3>
      <p class="m-0 text-sm text-muted">Cửa {{ cabin.door.toLowerCase() }}</p>
    </div>
    <div v-else class="px-5 pb-5 pt-2 flex flex-col gap-3">
      <h3 class="m-0 text-xl font-bold">{{ cabin.code }}</h3>
      <dl class="m-0 grid grid-cols-[96px_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-sm">
        <template v-for="spec in specs">
          <dt :key="`${spec.key}-dt`" class="text-muted">{{ spec.label }}</dt>
          <dd :key="`${spec.key}-dd`" class="m-0 text-body">{{ cabin[spec.key] }}</dd>
        </template>
      </dl>
    </div>
  </article>
</template>

<script>
const SPECS = [
  { key: 'wall', label: 'Vách' },
  { key: 'door', label: 'Cửa' },
  { key: 'ceiling', label: 'Trần' },
  { key: 'floor', label: 'Sàn' },
  { key: 'handrail', label: 'Tay vịn' },
  { key: 'controlPanel', label: 'Bảng điều khiển' },
]

export default {
  name: 'CabinCard',
  props: {
    cabin: { type: Object, required: true },
    // compact: chỉ ảnh + mã + cửa (dùng trong lưới 4 cột); mặc định hiện đủ thông số
    compact: { type: Boolean, default: false },
  },
  data() {
    return { specs: SPECS }
  },
}
</script>
