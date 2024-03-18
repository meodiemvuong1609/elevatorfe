<template>
  <div v-if="isLoading" class="loading__container">
    <div v-if="type === 'page'" class="loading__container--page flex items-center justify-center" :style="`z-index: ${zIndex}`">
      <div class="relative">
        <div class="loader"></div>
        <div class="loading--text absolute text-xs text-white"></div>
      </div>
    </div>

    <div v-if="type === 'component'" class="loading__container--component flex items-center justify-center" :style="`z-index: ${zIndex}`">
      <div class="gooey border-radius-m border">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  props: {
    isLoading: {
      type: Boolean,
      default: () => false,
    },
    type: {
      type: String,
      default: () => 'page', // 'page' || 'component'
    },

    zIndex: {
      type: [String, Number],
      default: () => '2000',
    }
  },
}
</script>

<style lang="scss" scoped>
.loading {
  &__container {
    &--page {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }

    &--component {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.loader {
  width: 35px;
  height: 35px;
  background-image: url('@/static/favicon.png');
  background-size: 100%;
}

.loader:before {
  position: absolute;
  content: '';
  width: 80%;
  height: 80%;
  border-radius: 100%;
  border-bottom: 0 solid #ffffff05;
  z-index: -1;
  left: -2px;
  top: 5px;

  box-shadow: 0 -10px 20px 20px #ffffff40 inset, 0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
    0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff, 0 5px 5px #ffffff90, 0 10px 15px #ffffff60,
    0 10px 20px 20px #ffffff40;
  filter: blur(3px);
  animation: 2s rotate linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.loading--text {
  width: 80px;
  left: -8px;
  &:after {
    content: '';
    font-weight: bold;
    animation-name: loading__loader-text;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
}

@keyframes loading__loader-text {
  0% {
    content: 'Đang tải';
  }
  25% {
    content: 'Đang tải.';
  }
  50% {
    content: 'Đang tải..';
  }
  75% {
    content: 'Đang tải...';
  }
}

.gooey {
  position: absolute;
  left: 50%;
  width: 55px;
  height: 25px;
  transform: translate(-50%, 50%);
  background: #fff;
}
.gooey .dot {
  position: absolute;
  width: 6px;
  height: 6px;
  top: 10px;
  left: 10px;
  background: #00AEEF;
  border-radius: 50%;
  transform: translateX(0);
  animation: dot 2.8s infinite;
}
.gooey .dots {
  transform: translateX(0);
  margin-top: 10px;
  margin-left: 17px;
  animation: dots 2.8s infinite;
}
.gooey .dots span {
  display: block;
  float: left;
  width: 6px;
  height: 6px;
  margin-left: 3px;
  background: #00AEEF;
  border-radius: 50%;
}
@-moz-keyframes dot {
  50% {
    transform: translateX(30px);
  }
}
@-webkit-keyframes dot {
  50% {
    transform: translateX(30px);
  }
}
@-o-keyframes dot {
  50% {
    transform: translateX(30px);
  }
}
@keyframes dot {
  50% {
    transform: translateX(30px);
  }
}
@-moz-keyframes dots {
  50% {
    transform: translateX(-15px);
  }
}
@-webkit-keyframes dots {
  50% {
    transform: translateX(-15px);
  }
}
@-o-keyframes dots {
  50% {
    transform: translateX(-12px);
  }
}
@keyframes dots {
  50% {
    transform: translateX(-7px);
  }
}
</style>
