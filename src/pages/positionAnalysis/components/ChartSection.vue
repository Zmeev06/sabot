<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { Chart, ChartCategory, ChartFilters, ChartLegend, InfoGraphic } from '../../../components/metricGroup';
	import Clusters from './Clusters.vue';

	import { categories } from '../constants/categories';
	import { filters } from '../constants/filters';
	import { legend } from '../constants/legend';
	import { graphicItems } from '../constants/graphic';
	import { generateChartDataConfig, getChartOptionsConfig } from '../constants/chart';
	import { ChartType } from '../../../components/metricGroup/constants/types';

	const currentCategory = ref(0);
	const currentChartType = ref<ChartType>('line');

	const chartOptions = computed(() => getChartOptionsConfig(currentChartType.value));
	const chartData = computed(() => generateChartDataConfig(currentChartType.value));
	const chartTypeComputed = computed(() => {
		switch (currentChartType.value) {
			case 'line':
			case 'line-filled':
				return 'line';
			case 'bar':
				return 'bar';
			case 'doughnut':
				return 'doughnut';
		}
	});
</script>

<template>
	<div>
		<div class="grid gap-6 grid-cols-[1fr_380px] mb-6">
			<div class="max-h-[536px] grid grid-rows-[auto_auto_1fr_auto] pb-[18px]">
				<ChartCategory v-model="currentCategory" :categories="categories" class="mb-2" />
				<ChartFilters v-model="currentChartType" :filters="filters" class="mb-[18px]" />
				<Chart
					class="overflow-hidden mb-[22px]"
					v-model:chartData="chartData"
					:chartType="currentChartType"
					:chartPropType="chartTypeComputed"
					:chartOptions="chartOptions" />
				<ChartLegend :items="legend" />
			</div>
			<Clusters class="max-h-[536px]" />
		</div>
		<InfoGraphic :items="graphicItems" />
	</div>
</template>
