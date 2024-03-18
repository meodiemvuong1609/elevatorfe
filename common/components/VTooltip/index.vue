<template>
  <div class="">
    <div class="relative">
      <span v-if="isShow" class="tooltiptext p-4">
        <slot/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTab',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    isShow: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      tabItems: [],
      tabActive: null,
      left: 0,
      originX: 0,
      originLeft: 0,
    }
  },
  mounted() {
  },
  methods: {
    handleTab(index) {
      this.tabActive = index
      this.$emit('active', index)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './tab.scss';

.tooltiptext {
  visibility: visible;
  width: max-content;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #E2E2E2;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  position: absolute;
  z-index: 1;
  // bottom: 125%;
  // left: 50%;
  // margin-left: -60px;
  top:5px ;
  right: 0;
  opacity: 1;
  transition: opacity 0.3s;
}

// .tooltiptext::after {
//   content: "";
//   position: absolute;
//   top: 100%;
//   left: 50%;
//   margin-left: -5px;
//   border-width: 5px;
//   border-style: solid;
//   border-color: #555 transparent transparent transparent;
// }

// .tooltip:hover .tooltiptext {
//   visibility: visible;
//   opacity: 1;
// }
</style>
