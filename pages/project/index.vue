<template>
  <div>
    <div>
      <Flickity
        class="carousel hidden sm:block" 
        :options="{
          wrapAround: true,
          pageDots: false,
          prevNextButtons: false,
        }"
        ref="flickity"
      >
        <div class="carousel-cell">
          <img src="~/assets/img/banner-intro.jpeg" alt="">
        </div>
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
    <ProjectCard />
  </div>
</template>

<script>
export default {
  name: 'Project',

}
</script>

<style>

</style>