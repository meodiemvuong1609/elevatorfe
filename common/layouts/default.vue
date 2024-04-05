<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="zalo-widget-container">
      <nuxt-child />
      <div class="zalo-chat-widget" data-oaid="86656955401453345" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="300" data-height="400"></div>
      <script src="https://sp.zalo.me/plugins/sdk.js"></script>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
.zalo-widget-container {
  position: relative !important;
}

.zalo-chat-widget {
  position: fixed !important;
  bottom: 20px !important; 
  right: 20px !important;
}
</style>