<template>
  <div class="dropdown__item" >
    <div
      class="w100"
      :class="className" 
    >
      <nuxt-link 
        v-if="href.trim() !== ''" :to="href" 
        class="item__container"
      >
        <div @click="clickItem">
          <slot />
          <slot name="content" />
        </div>
        <slot name="implement" />
      </nuxt-link>
      <div v-else class="item__container">
        <div @click="clickItem"> 
          <slot />
          <slot name="content" />
        </div>
        <slot name="implement" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VDropdownItem',

  inject: ['closeDropdown'] ,

  props: {
    href: {
      type: String,
      default: () => '',
    },

    variant: {
      type: String,
      default: () => 'primary', // 'primary' | 'danger' | 'warning' | 'info' | 'success'
    },

    disabled: {
      type: Boolean,
      default: () => false,
    }
  },

  computed: {
    className() {
      return ['dropdown__item--' + this.variant, this.disabled ? 'item--disabled' : null];
    },
  },

  methods: {
    clickItem (event) {
      this.closeDropdown();
      this.$emit('click-item', event);
    },
  }

}
</script>

<style lang="scss" scoped>
@import 'dropdown.scss';
</style>