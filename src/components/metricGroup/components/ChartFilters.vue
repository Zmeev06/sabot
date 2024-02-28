<script setup lang="ts">
import { Tag } from '../../../ui/tag';
import type { IChartFilterProp } from '../constants/types';
import { ChartType } from '../../../components/metricGroup/constants/types';

const modelValue = defineModel<ChartType>();

defineProps<{
  filters: IChartFilterProp[];
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <button
      v-for="(filter, index) in filters"
      :key="index"
      @click="modelValue = filter.type"
    >
      <Tag :icon="filter.icon" :active="modelValue === filter.type" />
    </button>
  </div>
</template>
