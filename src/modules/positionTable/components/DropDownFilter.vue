<script setup lang="ts">
import { computed } from 'vue';
import { Dropdown } from '../../../ui/dropdown';
import FilterButton from './FilterButton.vue';

defineProps<{
  icon: string;
  options: any[];
  optionLabel: string;
}>();

const dropdownStyle = computed(() => ({
  root: 'ptDropdownFilterRoot'
}));
</script>

<template>
  <Dropdown :pt="dropdownStyle" :options="options" :optionLabel="optionLabel">
    <template #value>
      <FilterButton :icon="icon" />
    </template>
    <template #dropdownicon>
      <div></div>
    </template>
  </Dropdown>
</template>

<style>
.ptDropdownFilterRoot {
  @apply inline-flex;
}
</style>
