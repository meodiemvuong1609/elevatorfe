<template>
  <div>
    <HomeHero />
    <HomeStats />
    <HomeProductLines />
    <HomeSolutions />
    <HomeCabins />
    <HomeProcess />
    <HomeFactory />
    <HomeWhyUs />
    <HomeActivities />
    <HomeProjects />
    <HomeShowroom />
    <HomeFaq />
    <HomeNetwork />
    <ConsultForm />
  </div>
</template>

<script>
import { EMAIL, HOTLINE, LEGAL } from '~/common/lib/company'
import { FAQS } from '~/common/lib/faqs'

export default {
  name: 'IndexPage',

  head() {
    return {
      script: [
        {
          hid: 'ld-organization',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Thang máy Hưng Phát',
            legalName: LEGAL.name,
            alternateName: LEGAL.internationalName,
            taxID: LEGAL.taxCode,
            foundingDate: '2018-01-15',
            telephone: HOTLINE,
            email: EMAIL,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Số 8, ngõ 9, đường Dương Quảng Hàm, phường Nghĩa Đô',
              addressLocality: 'Hà Nội',
              addressCountry: 'VN',
            },
          },
        },
        {
          hid: 'ld-faq',
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          },
        },
      ],
    }
  },
}
</script>
