<template>
  <div
  v-if="isShow"
    class="popup__container fixed"
    :class="{ 'show-popup': isShow, 'hide-popup': !isShow }"
    @transitionend="onTransitionEnd"
  >
  <!-- <div class="flex justify-between items-center mt-7 mr-4">
    <div class="cursor-pointer"></div>
    <div @click="close"><icons-x /></div>
  </div> -->
    <div
      class="popup__content absolute bg-white"
      :class="paddingClass"
    >
      <div class="" @click="handleRoute('/')">
        <div class="flex items-center">
          <img src="~/assets/img/hungphat.png" class=" h-[150px] mt-4" alt="">
        </div>
      </div>
      <div class="py-4 text-red border-b border-gray" :class="$route.path == '/' && 'font-bold'" @click="handleRoute('/')">
        Trang chủ
      </div>
      <div
        class="py-4 text-red border-b border-gray"
        :class="$route.path == '/introduce' && 'font-bold'"
        @click="handleRoute('/introduce')"
      >
        Giới thiệu
      </div>
      <div
        class="py-4 text-red border-b border-gray"
        :class="$route.path == '/service' && 'font-bold'"
        @click="handleRoute('/service')"
      >
        Dịch vụ
      </div>
      <div class="py-4 text-red border-b border-gray" :class="$route.path == '/products' && 'font-bold'" @click="handleRoute('/product')">
        Sản phẩm
      </div>
      <div class="py-4 text-red border-b border-gray" :class="$route.path == '/project' && 'font-bold'" @click="handleRoute('/project')">
        Dự án
      </div>
      <div class="py-4 text-red border-b border-gray" :class="$route.path == '/contact' && 'font-bold'" @click="handleRoute('/contact')">
        Liên hệ
      </div>
    </div>
    <div class="popup__bg absolute" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "33.333%",
    },

    paddingClass: {
      type: String,
      default: "p-4",
    },
  },

  data() {
    return {};
  },

  methods: {
    handleRoute(to) {
      this.$router.push(to);
      this.close();
    },

    close() {
      this.$emit("close");
    },
    onTransitionEnd() {
      // Xử lý sự kiện khi kết thúc transition nếu cần
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  &__container {
    top: 0;
    left: -100%; // Ẩn popup ở bên phải màn hình
    width: 100vw;
    height: 100vh;
    z-index: 3001;
    animation-duration: 0.2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }

  &__content {
    height: auto;
    z-index: 1001;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    transition: transform 0.3s ease;
  }

  &__bg {
    z-index: 100;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.55);
  }
}

.show-popup {
  animation-name: slideRight; // Hiển thị popup từ phải sang trái
}

.hide-popup {
  animation-name: slideLeft; // Ẩn popup từ trái sang phải
}

@keyframes slideRight {
  from {
    left: -100%; // Ban đầu ẩn popup ở bên phải màn hình
  }
  to {
    left: 0; // Khi hiển thị popup, trượt sang vị trí 0
  }
}

@keyframes slideLeft {
  from {
    left: 0; // Khi ẩn popup, popup ở vị trí 0
  }
  to {
    left: -100%; // Khi ẩn popup, trượt sang bên phải màn hình
  }
}
</style>
