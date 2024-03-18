<template>
  <div class="chip__container bg-white rounded-lg flex items-center">
    <div class="chip__value flex items-center mb-2 mt-2 ml-2">
      <div class="flex gap-2">
        <div v-for="(itemConst, indexValue) in constValue" :key="indexValue" class="chip__value__item px-2 py-1 rounded flex items-center justify-between">
          <p class="p6">{{itemConst}}</p>
        </div>
      </div>
      <div v-for="(item, index) in dataChips" :key="index" class="chip__value__item px-2 py-1 rounded flex items-center justify-between">
        <p class="p6">{{item}}</p>
        <span @click="deleteChip(index)">
          <icons-close class="ml-2"/>
        </span>
      </div>
    </div>
    <div class="chip__input">
      <input
        v-model="currentValue"
        :disabled="disabled"
        type="text"
        class="rounded-lg"
        :placeholder="placeholder" 
        @keypress.enter="saveChip"
        @blur="onBlur"
      >
    </div>
  </div>
</template>


<script>
export default {
  name: 'VChip',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    constValue: {
      type: Array,
      default: () => [],
    }
  },

  data() {
    return {
      currentValue: '',
      dataChips: this.value,
    };
  },

  watch: {
    value: {
      handler() {
        this.dataChips = this.value
      }
    }
  },

  methods: {
    saveChip() {
      const value = this.currentValue.trim()
      if(value) {
        if(this.dataChips.findIndex(e => e === value) === -1) {
          this.dataChips.push(value);
          this.$emit('input', this.dataChips)
        }
      }
      this.currentValue = ''
    },
    deleteChip(index) {
      this.dataChips.splice(index, 1)
    },
    onBlur() {
      this.saveChip()
    }
  }
}
</script>


<style lang="scss" scoped>
@import "chip.scss";
</style>