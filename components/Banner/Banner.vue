<template>
  <div class="border-b border-gray-light-1" >
    <Flickity
      class="carousel max-sm:hidden" 
      :options="{
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: 5000
      }"
      ref="flickity"
    >
      <div class="carousel-cell">
        <img src="~/assets/img/banner-lg.png" alt="">
      </div>
      <!-- <div class="carousel-cell">
        <img src="~/assets/img/banner-hungphat.png" alt="">
      </div> -->
      

    </Flickity>
    <Flickity
      class="carousel sm:hidden" 
      :options="{
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: 5000
      }"
      ref="flickity"
    >
      <div class="carousel-cell">
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
      this.flickityOptions.prevNextButtons = show;
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