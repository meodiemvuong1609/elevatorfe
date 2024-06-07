<template>
  <div class="layout-container">
    <div>
      <Header />
    </div>
    <nuxt-child />
    <!-- <div class="flex justify-between items-center fixed bottom-5 left-5 mx-4">
      <icons-phone />
    </div> -->
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
</style>
