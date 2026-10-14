<template>
  <div>
    <PageHeader
      eyebrow="Về chúng tôi"
      crumb="Giới thiệu"
      title="Thang máy Hưng Phát — Hung Phat Elevator"
      :desc="`Hoạt động từ ${foundedYear}, Hưng Phát tư vấn, sản xuất, lắp đặt và bảo trì thang máy cho nhà ở, biệt thự, văn phòng và công trình chuyên dụng.`"
    />

    <!-- Câu chuyện + ảnh đội ngũ -->
    <section class="hp-section">
      <div class="hp-container grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] items-center">
        <div class="flex flex-col gap-5">
          <div class="hp-eyebrow">Câu chuyện của chúng tôi</div>
          <h2 class="hp-h2">Bắt đầu từ những chiếc thang máy gia đình</h2>
          <p class="m-0 text-body text-[17px]">
            Bắt đầu từ những chiếc thang máy gia đình có trải nghiệm tốt nhất, an toàn nhất, thẩm mỹ cá nhân hóa
            với giá cả cạnh tranh, Thang máy Hưng Phát không ngừng nỗ lực và cải tiến để mang đến cho khách hàng
            trải nghiệm mua hàng tốt nhất, dịch vụ sau bán hàng chất lượng và tận tâm.
          </p>
          <p class="m-0 text-body text-[17px]">
            Hưng Phát luôn xác định và hiểu rõ nhu cầu của khách hàng, cung cấp giải pháp cá nhân hóa nhanh chóng,
            phù hợp với thiết kế của từng ngôi nhà cũng như nhu cầu sử dụng của mỗi gia đình.
          </p>
        </div>
        <figure class="hp-zoom m-0 rounded-[10px] overflow-hidden bg-line aspect-[16/10]">
          <img
            src="~/assets/img/products/img6.webp"
            alt="Thang máy gia đình cửa vàng, khung ốp gỗ chạm do Hưng Phát lắp đặt"
            class="w-full h-full object-cover"
          />
        </figure>
      </div>
    </section>

    <HomeStats />

    <!-- Giá trị cốt lõi -->
    <section class="hp-section">
      <div class="hp-container flex flex-col gap-10">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Giá trị cốt lõi</div>
          <h2 class="hp-h2">Uy tín · Chuyên nghiệp · Tận tâm</h2>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <article v-for="value in values" :key="value.title" class="bg-white border border-line rounded-[10px] p-7 flex flex-col gap-3">
            <span class="w-12 h-12 rounded-lg bg-paper border border-line inline-flex items-center justify-center" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path :d="value.icon" /></svg>
            </span>
            <h3 class="m-0 text-xl font-bold">{{ value.title }}</h3>
            <p class="m-0 text-body">{{ value.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Tầm nhìn & sứ mệnh -->
    <section class="hp-section bg-ink text-white">
      <div class="hp-container grid gap-4 md:grid-cols-2">
        <article v-for="item in visionMission" :key="item.title" class="bg-panel border border-panel-line rounded-[10px] p-8 lg:p-10 flex flex-col gap-4">
          <span class="self-start bg-night text-signal font-bold px-2.5 py-1 rounded text-[13px] tracking-[0.08em] uppercase">{{ item.title }}</span>
          <p class="m-0 text-xl lg:text-2xl font-bold leading-snug">{{ item.text }}</p>
        </article>
      </div>
    </section>

    <HomeActivities />
    <HomeFactory />
    <HomeNetwork />
    <ConsultForm />
  </div>
</template>

<script>
import { FOUNDED_YEAR } from '~/common/lib/company'

export default {
  name: 'IntroducePage',
  head() {
    return {
      title: 'Giới thiệu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Thang máy Hưng Phát hoạt động từ ${FOUNDED_YEAR}: tư vấn, sản xuất, lắp đặt và bảo trì thang máy cho biệt thự, nhà phố, văn phòng, chung cư. Nhà máy sản xuất tại Thiệu Trung, Thanh Hóa.`,
        },
      ],
    }
  },
  data() {
    return {
      foundedYear: FOUNDED_YEAR,
      values: [
        {
          title: 'Chất lượng vượt trội',
          desc: 'Công nghệ hiện đại, vật liệu cao cấp và quy trình sản xuất nghiêm ngặt để mỗi thang máy đều đạt tiêu chuẩn chất lượng cao.',
          icon: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z',
        },
        {
          title: 'An toàn tuyệt đối',
          desc: 'Hệ thống an toàn tiên tiến như phanh khẩn cấp, cảm biến va chạm, bảo vệ người sử dụng trong mọi tình huống.',
          icon: 'M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-5',
        },
        {
          title: 'Thiết kế hiện đại',
          desc: 'Thiết kế hiện đại, sang trọng, phù hợp nhiều kiểu kiến trúc, mang đến vẻ đẹp và sự hài hòa cho không gian sống.',
          icon: 'M4 20h16M6 20V8l6-4 6 4v12M10 20v-5h4v5',
        },
      ],
      // Bản nháp, cần công ty duyệt nội dung
      visionMission: [
        {
          title: 'Tầm nhìn',
          text: 'Trở thành thương hiệu thang máy gia đình được khách hàng tin chọn nhờ chất lượng sản phẩm và dịch vụ sau bán hàng tận tâm.',
        },
        {
          title: 'Sứ mệnh',
          text: 'Mang đến những chiếc thang máy an toàn, êm ái và hợp thẩm mỹ cho từng ngôi nhà, với giá cạnh tranh và sự đồng hành suốt vòng đời thang.',
        },
      ],
    }
  },
}
</script>
