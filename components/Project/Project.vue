<template>
  <div>
    <div class="w-3/4 mx-auto">
      <div>
        <p class=" flex items-center justify-center text-2xl text-red-dark-1 font-bold">Dự án</p>
        <p class=" mt-2 flex items-center justify-center text-gray-dark text-xl font-semibold">Các dự án mà Hưng Phát đã và đang thực hiện</p>

        <!-- <div class="grid grid-cols-3 gap-4">
          <CardProject v-for="(item, index) in projects" :key="index" :item="item" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      projects: [
        {
          image: 'banner3.png',
          title: 'Dự án 1',
          description: 'Mô tả dự án 1'
        },
        // {
        //   image: '~/assets/img/banner3.png',
        //   title: 'Dự án 2',
        //   description: 'Mô tả dự án 2'
        // },
        // {
        //   image: '~/assets/img/banner3.png',
        //   title: 'Dự án 3',
        //   description: 'Mô tả dự án 3'
        // },
      ]
    }
  }

}
</script>

<style>

</style>