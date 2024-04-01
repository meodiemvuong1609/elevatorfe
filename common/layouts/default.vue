<template>
  <div>
    <nuxt-child />
    <div>
      <!-- <div class="zalo-chat-widget" data-oaid="86656955401453345" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="300" data-height="400"></div> -->
      <script src="https://sp.zalo.me/plugins/sdk.js"></script>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageDefaultLayout',
  data () {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
</style>
