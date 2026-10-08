<template>
  <div class="contact-container">
    <div class="bg-banner">
      <div class="fill w-full h-full flex justify-center items-center">
        <p class="font-bold text-2xl sm:text-3xl text-white text-center px-4">LIÊN HỆ</p>
      </div>
    </div>
    <div class="flex flex-col p-4 sm:flex-row gap-5 mt-10 sm:px-[15%]">
      <div class="w-full sm:w-1/2 flex flex-col gap-5">
        <div class="">
          <p class="font-bold text-lg mb-10">
            CÔNG TY TNHH CÔNG NGHỆ THANG MÁY HƯNG PHÁT
          </p>
          <!-- <p class="font-bold text-base">HUNG PHAT EVEVATOR TECHNOLAGY COMPANY LIMITED</p> -->
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-12">
            <div
              v-for="(item, index) in contactData"
              :key="index"
              class="flex flex-col gap-2 text-sm"
            >
              <div class="flex gap-4 items-center title font-bold text-lg">
                <span>{{ item.title }}</span>
              </div>
              <div class="flex items-start gap-1 address">
                <div class="pt-1 pr-1">
                  <Icons-Location />
                </div>
                : {{ item.address }}
              </div>

              <div class="flex gap-1 items-center phone text-blue">
                <Icons-Phone /> :
                <a :href="`tel:${hotline}`">{{ hotlineDisplay }}</a>
              </div>
              <div class="flex gap-1 items-center email text-blue">
                <Icons-Email /> :
                <a :href="`mailto:${email}`">{{ email }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2">
        <MapLocation :height="isMobile ? '40vh' : '80vh'" :isBorderRadius="true" />
      </div>
    </div>
    <ConsultForm wrapper-class="mt-8" />
    <div class="h-[40px]"></div>
  </div>
</template>

<script>
import { EMAIL, HOTLINE, HOTLINE_DISPLAY, OFFICES } from "~/common/lib/company";

export default {
  name: "ContactPage",
  data() {
    return {
      contactData: OFFICES,
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
      email: EMAIL,
    };
  },
  head() {
    return {
      title: "Liên hệ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Liên hệ Thang máy Hưng Phát: hotline 090.1987.666, văn phòng tại Hà Nội, Thanh Hóa, Quảng Ninh và TP. Hồ Chí Minh.",
        },
      ],
    };
  },
};
</script>

