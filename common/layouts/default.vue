<template>
  <div class="layout-container">
    <div>
      <Header />
    </div>
    <nuxt-child />
    <div class="fixed bottom-5 left-5 mx-4">
      <div class="hotline-phone-ring-img-circle-fill bg-red-light-1 rounded-full fixed bottom-[6px] left-5"></div>
      <div
        class="hotline-phone-ring-img-circle p-4 rounded-full bg-red-light-1"
      >
        <icons-phone color="white" />
      </div>
    </div>
    <div class="zalo-widget-container">
      <div
        class="zalo-chat-widget"
        data-oaid="86656955401453345"
        data-welcome-message="Rất vui khi được hỗ trợ bạn!"
        data-autopopup="0"
        data-width="300"
        data-height="400"
      ></div>
      <script src="https://sp.zalo.me/plugins/sdk.js"></script>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
};
</script>

<style scoped>
.zalo-widget-container {
  position: fixed !important;
  z-index: 9000;
}

.zalo-chat-widget {
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;
  left: auto !important;
}

.hotline-phone-ring-img-circle-fill {
  width: 80px;
  height: 80px;
  -webkit-animation: hotline-phone-ring-img-circle-fill 1s infinite ease-in-out;
  animation: hotline-phone-ring-img-circle-fill 1s infinite ease-in-out;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hotline-phone-ring-img-circle {
  -webkit-animation: hotline-phone-ring-img-circle 1s infinite ease-in-out;
  animation: hotline-phone-ring-img-circle 1s infinite ease-in-out;
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
}

@-webkit-keyframes hotline-phone-ring-img-circle-fill {
  0% {
    -webkit-transform: rotate(0) scale(0.5) skew(1deg);
    -webkit-opacity: 0.1;
  }
  30% {
    -webkit-transform: rotate(0) scale(0.7) skew(1deg);
    -webkit-opacity: 0.5;
  }
  100% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
    -webkit-opacity: 0.1;
  }
}

@keyframes hotline-phone-ring-img-circle-fill {
  0% {
    -webkit-transform: rotate(0) scale(0.5) skew(1deg);
    -webkit-opacity: 0.1;
  }
  30% {
    -webkit-transform: rotate(0) scale(0.7) skew(1deg);
    -webkit-opacity: 0.5;
  }
  100% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
    -webkit-opacity: 0.1;
  }
}
@-webkit-keyframes hotline-phone-ring-img-circle {
  0% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  10% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
}
  20% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  30% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  40% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  50% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  100% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
}

@keyframes hotline-phone-ring-img-circle {
  0% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  10% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  20% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  30% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  40% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  50% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  100% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
}
</style>
