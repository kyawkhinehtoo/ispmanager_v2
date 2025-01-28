<template>
  <div>
    <h6
      class="py-3 px-4 text-xs font-bold text-gray-600 uppercase rounded-md bg-gray-100 dark:bg-gray-700 shadow-sm cursor-pointer flex justify-between items-center"
      @click="$emit('toggle')"
    >
      <label>{{ label }}</label>
      <i class="fas transition-transform duration-300" :class="{ 'fa-caret-down': isOpen, 'fa-caret-right': !isOpen }" ></i>
    </h6>
    <div v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    isOpen: Boolean,
  },
};
</script>

<style scoped>
h6 {
  transition: background-color 0.3s, color 0.3s;
}
</style>