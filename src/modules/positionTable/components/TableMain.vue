<script setup lang="ts">
import { ref } from 'vue';
import DropDownFilter from './DropDownFilter.vue';
import FilterButton from './FilterButton.vue';

const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
  <div>
    <div class="flex items-center gap-1">
      <DropDownFilter
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        icon="switch-vertical"
      />
      <FilterButton icon="switch-horizontal" />
      <FilterButton icon="attach" />
      <FilterButton icon="calendar" />
      <FilterButton icon="eye-off" />
      <FilterButton icon="scale" />
      <FilterButton icon="contrast" />
    </div>
  </div>
</template>
