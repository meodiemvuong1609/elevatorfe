<template>
  <div v-if="isShow" class="popup__container fixed">
    <div class="popup__content absolute bg-white rounded-t-2xl sm:rounded-lg" :class="paddingClass" :style="`width: ${!isMobile && width}`">
      <slot />
    </div>

    <div class="popup__bg absolute" @click="close">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '33.333%',
    },

    paddingClass: {
      type: String,
      default: 'p-5',
    },
  },

  data() {
    return {
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  &__container {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3001;
  }

  &__content {
    height: auto;
    z-index: 1001;
    top: 164px;
    bottom: 0;
    width: 100%;

    @media (min-width: 768px) {
      top: 50%;
      left: 50%;
      bottom: auto;
      transform: translate(-50%, -50%);
    }
  }

  &__bg {
    z-index: 100;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.55);
  }
}
</style>
