<template>
  <div class="v-expand__container">
    <div class="v-expand__label">
      <div class="flex items-center justify-between p-4 rounded-lg" :class="[expanded && 'border-radius-v', labelClass]" @click="expand">
        {{ label }} <icons-close type="bottom" color="#303439" :class="expanded && 'reverse'"></icons-close>
      </div>
    </div>
    <div class="v-expand__content">
      <div class="v-expand__slot" :class="expanded && 'expanded'">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VExpand",
  props: {
    label: {
      type: String,
      default: () => ''
    },

    bgColor: {
      type: String,
      default: () => 'white'
    },

    labelClass: {
      type: String,
      default: 'bg-gray-light'
    },

    hasBorder: {
      type: Boolean,
      default: () => false
    },

    defaultOpen: {
      type: Boolean,
      default: () => false
    }
  },

  data() {
    return {
      expanded: false,
    }
  },

  created() {
    this.expanded = this.defaultOpen
  },

  methods: {
    expand() {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style lang="scss" scoped>
.v-expand {
  &__label {
    height: 100%;
  }

  &__content {
    overflow: hidden;
  }

  &__slot {
    margin-top: -100%;
    transition: margin-top 0.6s;
  }
}

.border-radius-v{
  border-radius: 8px 8px 0px 0px;
}

.expanded {
  margin-top: 0;
}

.reverse {
  transform: rotate(90deg) !important;
  transition: 0.6s;
}
</style>