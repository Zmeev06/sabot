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
  @apply p-1 h-full bg-bg-gray-fill-light w-full rounded-[8px];
}
.table-range-bar:focus {
  @apply outline-none;
}
.table-range-bar::-webkit-slider-runnable-track {
  @apply w-full h-full rounded-[8px] bg-transparent shadow-none cursor-pointer;
}
.table-range-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply shadow-none w-2/3 bg-grey-heavy h-full rounded-lg border-none cursor-ew-resize;
}
/* .table-range-bar:focus::-webkit-slider-runnable-track {
  background: transparent;
} */
.table-range-bar::-moz-range-track {
  @apply w-full h-full rounded-[8px] bg-transparent shadow-none cursor-pointer;
}
.table-range-bar::-moz-range-thumb {
  @apply shadow-none w-2/3 bg-grey-heavy h-full rounded-lg border-none cursor-ew-resize;
}
</style>
