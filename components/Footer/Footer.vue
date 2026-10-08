<template>
  <div class="footer">
    <div class="w-full custom-gradient">
      <div class="px-4 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:px-[15%]">
        <div class="block" >
          <div>
            <div class="text-white text-xl">GIỚI THIỆU</div>
            <div class="text-white box-border mt-4 mr-5"><strong>Hưng Phát</strong> luôn xác định và hiểu rõ nhu cầu của khách hàng, cung cấp giải pháp cá nhân hóa nhanh chóng, phù hợp với thiết kế của từng ngôi nhà cũng như nhu cầu sử dụng của khách hàng <br>
            </div>
          </div>
          <div>
            <div class="text-white text-xl pt-6">THÔNG TIN LIÊN HỆ</div>
            <div class="flex pt-4 gap-2 items-center">
              <Icons-Phone />
              <a :href="`tel:${hotline}`" class="text-white">{{ hotlineDisplay }}</a>
            </div>
            <div class="flex pt-2 gap-2 items-center">
              <Icons-Email />
              <a :href="`mailto:${email}`" class="text-white">{{ email }}</a>
            </div>
            <div class="flex pt-2 gap-2 items-center">
              <Icons-Facebook />
              <a :href="facebookUrl" target="_blank" rel="noopener" class="text-white">
                facebook.com/hungphatelevator
              </a>
            </div>
          </div>
        </div>
        <div class="">
          <div class="text-white text-xl">ĐỊA CHỈ CÔNG TY</div>
          <div
            v-for="(office, index) in offices"
            :key="index"
            class="flex gap-2 items-start"
            :class="index === 0 ? 'pt-4' : 'pt-2'"
          >
            <div class="pt-2">
              <Icons-Location />
            </div>
            <div class="text-white">{{ office.address }}</div>
          </div>
        </div>
        <div class="">
          <div class="text-white text-xl">KẾT NỐI VỚI HƯNG PHÁT</div>
          <div class="pt-4">
            <MapLocation />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright flex items-center justify-center text-white p-2 gap-1">
      Copyright {{ year }} © <p><strong> Hưng Phát</strong></p>
    </div>
  </div>
</template>

<script>
import { EMAIL, FACEBOOK_URL, HOTLINE, HOTLINE_DISPLAY, OFFICES } from '~/common/lib/company'

export default {
  name: 'Footer',
  data() {
    return {
      offices: OFFICES,
      hotline: HOTLINE,
      hotlineDisplay: HOTLINE_DISPLAY,
      email: EMAIL,
      facebookUrl: FACEBOOK_URL,
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'Footer.scss';
</style>