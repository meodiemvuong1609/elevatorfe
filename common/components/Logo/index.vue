<template>
  <img :width="width" :height="height" :src="LogoSVG" draggable="false" />
</template>

<script>
import LogoSVG from '~/common/components/Logo/logo.svg'

export default {
  name: 'Logo',
  props: ['width', 'height'],
  data() {
    return {
      LogoSVG,
    }
  },
}
</script>
