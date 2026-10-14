<template>
  <div>
    <PageHeader
      eyebrow="Liên hệ"
      title="Liên hệ Thang máy Hưng Phát"
      desc="Gọi hotline để được tư vấn ngay, hoặc ghé văn phòng gần nhất. Kỹ thuật viên trực cứu hộ và bảo trì 24/7."
    />

    <!-- Liên hệ nhanh -->
    <section class="hp-container py-10 lg:py-14">
      <div class="grid gap-4 md:grid-cols-3 [&>*]:min-w-0">
        <a :href="`tel:${hotline}`" class="bg-ink text-white rounded-[10px] p-6 flex flex-col gap-4 hover:bg-panel">
          <span class="w-12 h-12 rounded-full bg-brand inline-flex items-center justify-center">
            <icons-phone color="white" />
          </span>
          <span class="flex flex-col">
            <span class="text-sm text-muted-dark">Hotline / Zalo — 24/7</span>
            <span class="text-2xl font-bold tabular-nums">{{ hotlineDisplay }}</span>
          </span>
        </a>
        <a :href="`mailto:${email}`" class="bg-white border border-line rounded-[10px] p-6 flex flex-col gap-4 hover:border-ink">
          <span class="w-12 h-12 rounded-full bg-paper border border-line inline-flex items-center justify-center" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
          </span>
          <span class="flex flex-col min-w-0">
            <span class="text-sm text-muted">Email</span>
            <span class="text-lg font-bold break-all">{{ email }}</span>
          </span>
        </a>
        <a :href="facebookUrl" target="_blank" rel="noopener" class="bg-white border border-line rounded-[10px] p-6 flex flex-col gap-4 hover:border-ink">
          <span class="w-12 h-12 rounded-full bg-paper border border-line inline-flex items-center justify-center" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" /></svg>
          </span>
          <span class="flex flex-col">
            <span class="text-sm text-muted">Facebook</span>
            <span class="text-lg font-bold break-words">facebook.com/hungphatelevator</span>
          </span>
        </a>
      </div>
    </section>

    <!-- Văn phòng + bản đồ -->
    <section class="hp-section !pt-0">
      <div class="hp-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
        <div class="flex flex-col gap-6">
          <h2 class="hp-h2">Văn phòng &amp; nhà máy</h2>
          <ul class="list-none m-0 p-0 border-t border-line-strong">
            <li v-for="office in offices" :key="office.title" class="py-5 border-b border-line-strong flex flex-col gap-1">
              <span class="font-bold flex items-center gap-2">
                {{ office.title }}
                <span v-if="office.title === factoryTitle" class="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] bg-ink text-signal px-1.5 py-0.5 rounded">Sản xuất</span>
              </span>
              <span class="text-body">{{ office.address }}</span>
              <a :href="mapUrl(office)" target="_blank" rel="noopener" class="self-start text-sm font-semibold inline-flex items-center gap-1 min-h-[44px] hover:text-brand">
                Chỉ đường
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="lg:sticky lg:top-[132px] rounded-xl overflow-hidden">
          <MapLocation :height="isMobile ? '360px' : '640px'" />
        </div>
      </div>
    </section>

    <!-- Thông tin doanh nghiệp -->
    <section class="hp-section bg-white border-y border-line">
      <div class="hp-container grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col gap-4">
          <div class="hp-eyebrow">Thông tin doanh nghiệp</div>
          <h2 class="hp-h2 !text-[26px] lg:!text-[32px]">{{ legal.name }}</h2>
          <dl class="m-0 grid grid-cols-[140px_minmax(0,1fr)] gap-x-4 gap-y-3 text-[15px]">
            <dt class="text-muted">Tên quốc tế</dt>
            <dd class="m-0">{{ legal.internationalName }}</dd>
            <dt class="text-muted">Mã số thuế</dt>
            <dd class="m-0 tabular-nums">{{ legal.taxCode }}</dd>
            <dt class="text-muted">Người đại diện</dt>
            <dd class="m-0">{{ legal.representative }} — {{ legal.representativeTitle }}</dd>
            <dt class="text-muted">Địa chỉ</dt>
            <dd class="m-0">{{ legal.registeredAddress }}</dd>
            <dt class="text-muted">Hoạt động từ</dt>
            <dd class="m-0">{{ legal.activeSince }}</dd>
          </dl>
        </div>
        <div class="flex flex-col gap-4">
          <div class="hp-eyebrow">Thanh toán</div>
          <h2 class="hp-h2 !text-[26px] lg:!text-[32px]">Tài khoản công ty</h2>
          <p class="m-0 text-body">
            Chủ tài khoản: <strong>{{ legal.name }}</strong>. Vui lòng ghi rõ họ tên và số điện thoại trong nội dung chuyển khoản.
          </p>
          <div v-for="account in bankAccounts" :key="account.number" class="bg-paper border border-line rounded-[10px] p-5 flex flex-col gap-1">
            <span class="text-sm text-muted">{{ account.bank }} — {{ account.branch }}</span>
            <span class="text-2xl font-extrabold tabular-nums tracking-[0.02em]">{{ account.number }}</span>
          </div>
        </div>
      </div>
    </section>

    <HomeShowroom />
    <ConsultForm />
  </div>
</template>

<script>
import { BANK_ACCOUNTS, EMAIL, FACEBOOK_URL, FACTORY, HOTLINE, HOTLINE_DISPLAY, LEGAL, OFFICES } from '~/common/lib/company'

export default {
  name: 'ContactPage',
  head() {
    return {
      title: 'Liên hệ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Liên hệ Thang máy Hưng Phát: hotline 090.1987.666, văn phòng tại Hà Nội, Thanh Hóa, Quảng Ninh, TP. Hồ Chí Minh và nhà máy tại Thiệu Trung, Thanh Hóa.',
        },
      ],
    }
  },
  data() {
    return {
      offices: OFFICES,
      factoryTitle: FACTORY.title,
      legal: LEGAL,
      bankAccounts: BANK_ACCOUNTS,
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
      email: EMAIL,
      facebookUrl: FACEBOOK_URL,
    }
  },
  methods: {
    mapUrl(office) {
      const [lng, lat] = office.coordinates
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    },
  },
}
</script>
