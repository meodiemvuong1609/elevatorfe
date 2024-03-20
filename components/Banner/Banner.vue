<template>
  <div >
    <Flickity
      class="carousel" 
      :options="{
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
      }"
      ref="flickity"
    >
      <div class="carousel-cell max-sm:hidden" v-if="!isMobile()" >
        <img src="~/assets/img/banner3.png" alt="">
      </div>
      <div class="carousel-cell sm:hidden" v-if="isMobile()">
        <img src="~/assets/img/banner-sm.png" alt="">
      </div>

    </Flickity>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      flickityOptions: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: 5000
      },
      mobile: false
    }
  },
  created() {
    this.mobile = this.isMobile()
  },
  methods: {
    showPrevNextButtons(show) {
      console.log('show', show);
      this.flickityOptions.prevNextButtons = show;
      console.log('this.$refs.flickity', this.$refs.flickity);
      if (this.$refs.flickity) {
        this.$refs.flickity.$flickity.options.prevNextButtons = show;
      
      }
    },
    isMobile() {
      if (typeof navigator !== 'undefined') {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
          return true;
        } else return false;
      }
      
    }
  },

}
</script>

<style lang="scss" scoped>

.carousel-cell {
  width: 100%;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>