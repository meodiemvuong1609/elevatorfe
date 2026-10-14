<template>
  <section class="bg-white border-b border-line">
    <div class="hp-container py-10 lg:py-16 flex flex-col gap-4">
      <nav aria-label="Breadcrumb" class="text-sm text-muted">
        <ol class="list-none m-0 p-0 flex flex-wrap items-center gap-2">
          <li><nuxt-link to="/" class="hover:text-brand">Trang chủ</nuxt-link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" class="text-ink font-medium">{{ crumb || eyebrow }}</li>
        </ol>
      </nav>
      <div class="hp-eyebrow">{{ eyebrow }}</div>
      <h1 class="m-0 text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.1] font-extrabold tracking-[-0.025em] max-w-[880px]">
        {{ title }}
      </h1>
      <p v-if="desc" class="m-0 text-[17px] lg:text-[19px] text-body max-w-[720px]">{{ desc }}</p>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, default: '' },
    crumb: { type: String, default: '' },
  },
}
</script>
