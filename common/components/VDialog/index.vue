<template>
  <div v-if="modalShow" class="modal">
    <div class="modal__wrapper" :class="type ? 'modal__confirm' : ''" :style="styles">
      <div class="modal__content" :style="stylesContent">
        <div v-if="$slots['header']" class="modal__header">
          <slot name="header"></slot>
        </div>
        <div class="modal__body">
          <div class="modal__body--content">
            <slot v-if="$slots['default'] && !type"></slot>
            <div v-else class="modal__body--confirm f aic jcc fdc">
              <div class="box__circle f aic jcc">
                <v-icon>success</v-icon>
              </div>
              <h3>Thông báo</h3>
              <span class="gray-2">Thành công</span>
            </div>
          </div>
        </div>
        <div v-if="$slots['footer']" class="modal__footer">
          <slot name="footer"></slot>
        </div>
        <div v-else class="modal__footer confirm">
          <v-button @click="confirmCancel">Quay lại</v-button>
          <v-button @click="confirmOk" type="primary">Xác nhận</v-button>
        </div>
      </div>
    </div>
    <div class="modal__overlay"></div>
  </div>
</template>

<script>
export default {
  name: 'VDialog',
  props: {
    width: {
      type: [String, Number],
      required: false,
      default: 400,
    },
    height: {
      type: [String, Number],
      required: false,
      default: 400,
    },
    show: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    ok: {
      type: Function,
      default: () => false,
    },
  },
  data() {
    return {
      modalShow: false,
    }
  },
  computed: {
    styles() {
      const maxWidth = Number(this.width) ? `${this.width}px` : this.width
      return { maxWidth }
    },
    stylesContent() {
      const height = Number(this.height) ? `${this.height}px` : this.height
      return { height }
    },
  },
  watch: {
    show(value) {
      const handle = value ? 'add' : 'remove'
      document.body.classList[handle]('ovf-hidden')
      this.modalShow = value
    },
  },
  methods: {
    confirmCancel() {
      this.$emit('close', false)
    },
    confirmOk() {
      this.ok()
      this.$emit('close', false)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './dialog.scss';
</style>
