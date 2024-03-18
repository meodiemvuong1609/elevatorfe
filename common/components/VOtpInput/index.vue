<template>
  <div>
    <p class="h6 mt1">
      {{ label }}
    </p>
    <div class="otp__input-group flex justify-between items-center mt-5">
      <v-otp-input
        ref="otpInput1"
        :input-classes="'' + className + classesError"
        separator=""
        :num-inputs="totalInputs"
        input-type="number"
        @on-change="$emit('on-change', $event)"
        @on-complete="$emit('on-complete', $event)"
      />
    </div>
    <div v-if="errorMessage !== ''" class="error pt05">
      <span class="p7 red-2">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import OtpInput from "@bachdgvn/vue-otp-input";

export default {
  name: 'VOtpInput',
  components: {
    'v-otp-input': OtpInput
  },
  props: {
    totalInputs: {
      type: Number,
      default: () => 0
    },
    label: {
      type: String,
      default: () => ''
    },

    className: {
      type: String,
      default: () => ''
    },

    errorMessage: {
      type: String,
      default: () => ''
    }
  },

  computed: {
    classesError() {
      return this.errorMessage !== '' ? ' input__error' : ''
    }
  }
}
</script>

<style lang="scss">
@import "v-otp-input.scss";
</style>