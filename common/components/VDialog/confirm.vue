<template>
  <div v-if="modalShow" class="modal">
    <div class="modal__wrapper modal__confirm">
      <div class="modal__content">
        <div v-if="$slots['header']" class="modal__header">
          <slot name="header"></slot>
        </div>
        <div class="modal__body">
          <div class="modal__body--content" :style="`min-height: ${minHeightContent} !important;`">
            <div class="modal__body--confirm flex flex-col items-center" :class="{ p0: type === 'form' }">
              <template v-if="type !== 'form'" >
                <Icons-Success v-if="type==='success'"/>
                <Icons-Warning v-if="type==='warning'"/>
                <Icons-Error v-if="type==='error'"/>
                <p class="font-bold text-xl text-gray py-2">{{ confirmData.title }}</p>
                <p class="mb-2 text-center">{{ confirmData.message }}</p>
              </template>
              <div v-if="$slots['default']" class="modal__body--confirm-form">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__footer confirm">
          <v-button :type="'secondary'" height="45px" class="border border-gray-light" @click="confirmCancel"><p>{{ closeButtonLabel }}</p></v-button>
          <v-button v-if="!isDisabledConfirm" :class="classBtn" type="primary" height="45px" @click="confirmOk">
            <p class="text-white">{{ confirmButtonLabel }}</p>
          </v-button>
        </div>
      </div>
    </div>
    <div class="modal__overlay" @click="closeDialog"></div>
  </div>
</template>

<script>
export default {
  name: 'VDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'success',
    },
    option: {
      type: Object,
      default: () => {},
    },
    ok: {
      type: Function,
      default: () => false,
    },
    cancel: {
      type: Function,
      default: () => false,
    },
    isDisabledConfirm: {
      type: Boolean,
      default: () => false,
    },
    closeButtonLabel: {
      type: String,
      default: 'Đóng lại',
    },
    confirmButtonLabel: {
      type: String,
      default: 'Xác nhận',
    },

    classBtn: {
      type: String,
      default: '',
    },

    minHeightContent: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      modalShow: false,
      inforUserLogin: {},
    }
  },
  computed: {
    confirmData() {
      return {
        title: this.option.title || 'Thông báo',
        message: this.option.message || '',
      }
    }
  },

  watch: {
    show(value) {
      const handle = value ? 'add' : 'remove'
      document.body.classList[handle]('ovf-hidden')
      this.modalShow = value
    }
  },
  
  methods: {
    confirmCancel() {
      this.cancel()
      this.$emit('close', false)
    },
    closeDialog() {
      this.$emit('close', false)
    },
    confirmOk() {
      const isOk = this.ok()
      if (isOk) this.$emit('close', false)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './dialog.scss';
</style>
