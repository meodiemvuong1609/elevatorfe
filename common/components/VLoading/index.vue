<template>
  <div v-if="show" class="v-loading" :class="position">
    <div class="v-loading--container">
      <div class="mb05 text-red-linear h3">Thông báo</div>
      <div class="p2 gray-2 mb1">Đang tải dữ liệu</div>
      <div
        class="v-loader"
        :style="{
          borderBottomColor: color,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VLoading',
  props: {
    position: {
      type: [String, Boolean],
      default: 'fixed',
    },
    show: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './loading.scss';
</style>
