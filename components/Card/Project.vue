<template>
  <div class="">
    <img :src="require(`~/assets/img/${item.image}`)" alt="" class="w-full h-full object-cover rounded-lg">
    <div>
      <div class="title">
        {{item.title}}
      </div>
      <div class="description">
        {{item.description}}
      </div>
      <div>
        <button>
          Đọc thêm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProject',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  }

}
</script>

<style>

</style>