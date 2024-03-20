<template>
  <div >
    <Flickity
      class="carousel" 
      :options="{
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: 5000
      }"
      ref="flickity"
    >
      <div class="carousel-cell max-sm:hidden" v-if="$mobileDetect && !$mobileDetect.mobile()">
        <img src="~/assets/img/banner3.png" alt="">
      </div>
      <div class="carousel-cell sm:hidden" v-if="$mobileDetect && $mobileDetect.mobile()">
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
        
      },
    }
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