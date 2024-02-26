<script setup lang="ts">
const scrollTrack = defineModel<number | string>({ required: true });
</script>

<template>
  <input
    class="table-range-bar"
    type="range"
    min="0"
    max="100"
    step="1"
    v-model="scrollTrack"
  />
</template>

<style>
.table-range-bar {
  -webkit-appearance: none;
  @apply h-full w-full rounded-[8px] bg-bg-grey-fill-light p-1;
}
.table-range-bar:focus {
  @apply outline-none;
}
.table-range-bar::-webkit-slider-runnable-track {
  @apply h-full w-full cursor-pointer rounded-[8px] bg-transparent shadow-none;
}
.table-range-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply h-full w-1/3 cursor-ew-resize rounded-lg border-none bg-grey-heavy shadow-none;
}
/* .table-range-bar:focus::-webkit-slider-runnable-track {
  background: transparent;
} */
.table-range-bar::-moz-range-track {
  @apply h-full w-full cursor-pointer rounded-[8px] bg-transparent shadow-none;
}
.table-range-bar::-moz-range-thumb {
  @apply h-full w-1/3 cursor-ew-resize rounded-lg border-none bg-grey-heavy shadow-none;
}
</style>
