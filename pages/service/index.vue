<template>
  <div>
    <PageHeader
      eyebrow="Dịch vụ"
      title="Lắp đặt, bảo trì và hỗ trợ trọn gói"
      desc="Từ tư vấn, bản vẽ, báo giá đến lắp đặt và bảo trì 24/7 — một đầu mối chịu trách nhiệm cho cả vòng đời thang máy."
    />

    <!-- Hai dịch vụ chính -->
    <section class="hp-section">
      <div class="hp-container flex flex-col gap-16 lg:gap-20">
        <article
          v-for="(service, index) in services"
          :id="service.id"
          :key="service.id"
          class="grid gap-8 lg:gap-14 lg:grid-cols-2 items-center"
        >
          <div class="hp-zoom rounded-[10px] overflow-hidden bg-line h-[320px] sm:h-[480px]" :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <img :src="service.img" :alt="service.alt" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="flex flex-col gap-5">
            <div class="hp-eyebrow">{{ service.eyebrow }}</div>
            <h2 class="hp-h2">{{ service.title }}</h2>
            <p v-for="paragraph in service.paragraphs" :key="paragraph" class="m-0 text-body text-[17px]">{{ paragraph }}</p>
            <ul class="list-none m-0 p-0 flex flex-col gap-2.5">
              <li v-for="point in service.points" :key="point" class="flex gap-3 items-start">
                <svg class="shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E7A46" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Dịch vụ hỗ trợ -->
    <section class="hp-section bg-white border-y border-line">
      <div class="hp-container flex flex-col gap-10">
        <div class="max-w-[640px] flex flex-col gap-3">
          <div class="hp-eyebrow">Dịch vụ hỗ trợ</div>
          <h2 class="hp-h2">Hỗ trợ trước khi bạn quyết định</h2>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <article v-for="item in supports" :key="item.title" class="bg-paper border border-line rounded-[10px] p-6 flex flex-col gap-3">
            <span class="w-12 h-12 rounded-lg bg-white border border-line inline-flex items-center justify-center" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path :d="item.icon" /></svg>
            </span>
            <h3 class="m-0 text-[19px] font-bold">{{ item.title }}</h3>
            <p class="m-0 text-body text-[15px] flex-1">{{ item.desc }}</p>
            <a href="#tu-van" class="hp-link-arrow self-start text-[15px]">
              Liên hệ ngay
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <HomeProcess :show-link="false" />
    <HomeFaq />
    <ConsultForm />
  </div>
</template>

<script>
export default {
  name: 'ServicePage',
  head() {
    return {
      title: 'Dịch vụ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dịch vụ lắp đặt, bảo trì thang máy 24/7, tư vấn miễn phí, thiết kế bản vẽ và báo giá chi tiết từ Thang máy Hưng Phát.',
        },
      ],
    }
  },
  data() {
    return {
      services: [
        {
          id: 'lap-dat',
          eyebrow: 'Lắp đặt thang máy',
          title: 'Lắp đặt chính xác đến từng chi tiết',
          paragraphs: [
            'Thang máy là sản phẩm kết tinh của hàng ngàn cấu kiện, thiết bị. Để một cỗ máy vận hành êm ái, tất cả các chi tiết đều phải được lắp đặt chính xác và thực sự hoàn hảo.',
            'Vì vậy, đào tạo đội ngũ lắp đặt, vận hành là yếu tố thiết yếu để Thang máy Hưng Phát không ngừng nâng cao chất lượng — hướng tới mục tiêu cao nhất là thang luôn vận hành an toàn, êm ái và bền lâu.',
          ],
          points: ['Lắp đặt theo bản vẽ đã thống nhất', 'Chạy thử và kiểm định trước khi bàn giao', 'Hướng dẫn sử dụng cho gia đình'],
          img: require('~/assets/img/project/p12.jpg'),
          alt: 'Giếng thang kính khung inox do Hưng Phát lắp đặt',
        },
        {
          id: 'bao-tri',
          eyebrow: 'Bảo trì thang máy 24/7',
          title: 'Luôn đồng hành, phục vụ kịp thời',
          paragraphs: [
            'Thang máy ngày nay không thể thiếu trong cao ốc, tòa nhà văn phòng, trung tâm thương mại và cả biệt thự, nhà phố. Hoạt động với cường độ cao nên khó tránh khỏi những lúc thang gặp sự cố.',
            'Dịch vụ bảo trì, bảo dưỡng 24/7 của Thang máy Hưng Phát luôn lắng nghe và sẵn sàng đáp ứng mọi yêu cầu của Quý khách hàng. Luôn đồng hành, phục vụ kịp thời và nhanh chóng là phương châm hành động của chúng tôi.',
          ],
          points: ['Bảo trì, bảo dưỡng định kỳ', 'Sửa chữa, thay thế linh kiện', 'Cứu hộ 24/7 qua hotline'],
          img: require('~/assets/img/products/img12.webp'),
          alt: 'Thang máy gia đình khung ốp đá trắng vân xám',
        },
      ],
      supports: [
        {
          title: 'Tư vấn miễn phí',
          desc: 'Khảo sát nhu cầu sử dụng, tư vấn giải pháp thang máy phù hợp với nhu cầu và ngân sách của khách hàng.',
          icon: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12zM8 11h8M8 14h5',
        },
        {
          title: 'Thiết kế bản vẽ',
          desc: 'Cung cấp bản vẽ thiết kế chi tiết cho hố thang máy, phòng máy và các chi tiết kỹ thuật khác.',
          icon: 'M3 21l3-1 12-12-2-2L4 18zM14 6l2 2M3 3h7M3 3v7',
        },
        {
          title: 'Báo giá chi tiết',
          desc: 'Báo giá chi tiết cho thang máy, bao gồm giá sản phẩm, chi phí lắp đặt, thuế VAT, bảo hành.',
          icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5',
        },
      ],
    }
  },
}
</script>
