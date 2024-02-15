<script setup lang="ts">
	import { ref } from 'vue';
	import { Chart, ChartCategory, ChartFilters, ChartLegend, InfoGraphic } from '../../../components/metricGroup';
	import Clusters from './Clusters.vue';

	import { categories } from '../constants/categories';
	import { filters } from '../constants/filters';
	import { legend } from '../constants/legend';
	import { graphicItems } from '../constants/graphic';

	const currentCategory = ref(0);
	const currentChartType = ref(0);

	const chartData = ref({
		labels: [
			'',
			'06.01.22',
			'06.02.22',
			'06.03.22',
			'06.04.22',
			'06.05.22',
			'06.06.22',
			'06.07.22',
			'06.08.22',
			'06.09.22',
			'06.10.22',
			'06.11.22',
			'06.12.22',
			'',
		],
		datasets: [
			{
				label: 'My Dataset',
				data: [24, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26],
				borderColor: '#2CE',
				tension: 0.4,
				fill: true,
				backgroundColor: 'transparent',
				pointBackgroundColor: '#2CE',
				clip: { left: -5, right: -5, top: false, bottom: false },
				pointRadius: function (context) {
					if (context.dataIndex === 0 || context.dataIndex === 13) {
						return 0;
					} else {
						return 4;
					}
				},
			},
			{
				label: 'My Dataset',
				data: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 27, 27],
				borderColor: '#A48AFB',
				tension: 0.4,
				fill: true,
				backgroundColor: 'transparent',
				pointBackgroundColor: '#A48AFB',
				clip: { left: -5, right: -5, top: false, bottom: false },
				pointRadius: function (context) {
					if (context.dataIndex === 0 || context.dataIndex === 13) {
						return 0;
					} else {
						return 4;
					}
				},
			},
			{
				label: 'My Dataset',
				data: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19],
				borderColor: '#47CD89',
				tension: 0.4,
				fill: true,
				backgroundColor: 'transparent',
				pointBackgroundColor: '#47CD89',
				clip: { left: -5, right: -5, top: false, bottom: false },
				pointRadius: function (context) {
					if (context.dataIndex === 0 || context.dataIndex === 13) {
						return 0;
					} else {
						return 4;
					}
				},
			},
		],
	});

	const chartOptions = ref({
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				ticks: {
					autoSkip: true,
					maxRotation: 0,
					color: '#475467',
					font: {
						size: 12,
					},
				},
				grid: {
					display: false,
				},
			},
			y: {
				ticks: {
					color: '#344054',
					font: {
						size: 12,
					},
					stepSize: 8,
				},
				grid: {
					display: false,
				},
				border: {
					display: false,
				},
				beginAtZero: true,
				suggestedMin: 0,
				suggestedMax: 40,
			},
		},
	});
</script>

<template>
	<div>
		<div class="grid gap-6 grid-cols-[1fr_380px] mb-6">
			<div class="max-h-[536px] grid grid-rows-[auto_auto_1fr_auto] pb-[18px]">
				<ChartCategory v-model="currentCategory" :categories="categories" class="mb-2" />
				<ChartFilters v-model="currentChartType" :filters="filters" class="mb-[18px]" />
				<Chart class="overflow-hidden mb-[22px]" :chartData="chartData" :chartOptions="chartOptions" />
				<ChartLegend :items="legend" />
			</div>
			<Clusters class="max-h-[536px]" />
		</div>
		<InfoGraphic :items="graphicItems" />
	</div>
</template>
