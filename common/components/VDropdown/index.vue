<template>
  <div class="dropdown relative">
    <div 
      class="dropdown__label f aic" 
      @click="openDropDown"
    >
      <div class="label__text">
        <span>{{ text }}</span>
      </div>
      <div 
        v-if="icon && icon !== ''"
        class="label__icon"
      >
        <v-icon 
          :size="iconDropdown?.size ? iconDropdown?.size : 14"
        >
          {{ iconDropdown.name }}
        </v-icon>
      </div>
    </div>
    <div 
      ref="dropdownContent"
      class="absolute"
      :style="`display: none; bottom: 0px; left: 0px ; ${transform}; zIndex: ${zIndex}`"
    >
      <div 
        class="dropdown__content relative pt05 pb05"
        :style="style"
      >
        <div v-if="hasMark" :style="offsetMark" class="dropdown__mark"></div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VDropdown',

  provide() {
    return {
      closeDropdown: this.closeDropdown, 
    }
  },

  props: {
    text: {
      type: String,
      default: () => '',
    },

    icon: {
      type: [String, Object],
      default: () => '',
    },

    width: {
      type: [String, Number],
      default: () => 200,
    },

    height: {
      type: [String, Number],
      default: () => 400,
    },

    offset: {
      type: Object,
      default: () => {}, // top, right, bottom, left
    },

    bgColor: {
      type: String,
      default: () => 'primary', // 'primary' | 'danger' | 'warning' | 'info' | 'success'
    },

    hasMark: {
      type: Boolean,
      default: () => false,
    },

    zIndex: {
      type: Number,
      default: () => 1000,
    }
  },

  data () {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      transform: '',
      offsetMark: '',
      dropdownContentHTML: null,
    }
  },

  computed: {
    iconDropdown() {
      return typeof this.icon === 'string' ? {name: this.icon} : this.icon
    },

    style() {
      const w = typeof this.width === 'number' ? `${this.width}px` : this.width;
      const h = typeof this.height === 'number' ? `${this.height}px` : this.height;
      return `width: ${w}; height: ${h}`
    },

    offsetContent() {
      return {
          top: this.offset?.top ? this.offset?.top : 0, 
          right: this.offset?.right ? this.offset?.right : 0, 
          bottom: this.offset?.bottom ? this.offset?.bottom : 0, 
          left: this.offset?.left ? this.offset?.left : 0
        }
    }
  },

  mounted () {
    this.dropdownContentHTML = this.$refs.dropdownContent
  },

  methods: {
    openDropDown(event){
      const offset = event.target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const tranlateX = `${ (windowWidth - offset.x) < 200 ? `calc(-99% + ${this.offsetContent.right}px)` : `calc(0% + ${this.offsetContent.left}px)`}`;
      const tranlateY = `${ (windowHeight - offset.y) < 200 ? `calc(-30px + ${this.offsetContent.top}px)` : `calc(100% + ${this.offsetContent.bottom}px)`}`;

      this.offsetMark = `${ (windowWidth - offset.x) < 200 ? 'right: 15px' : 'left: 15px'}; ${ (windowHeight - offset.y) < 200 ? 'bottom: -5px' : 'top: -5px'};`
      this.transform = `transform: translate(${ tranlateX }, ${ tranlateY })`;
      
      if(this.$refs.dropdownContent && this.$refs.dropdownContent.style)
      this.$refs.dropdownContent.style.display = this.$refs.dropdownContent.style.display === 'none' ? 'block' : 'none';

      // click outside
      window.addEventListener('click', (event) => {
        if(!this.$el.contains(event.target) && this.$refs.dropdownContent){
          this.$refs.dropdownContent.style.display ='none'
        }
      });
    },

    closeDropdown() {
      this.$refs.dropdownContent.style.display ='none'
    }

  }


}
</script>

<style lang="scss" scoped>
@import 'dropdown.scss';
</style>