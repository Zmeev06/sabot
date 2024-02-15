<script setup lang="ts">
	import { ref, onMounted, watch } from 'vue';
	import Chart from 'primevue/chart';
	import { ChartType } from '../../../components/metricGroup/constants/types';

	type ChartPropType = 'line' | 'bar' | 'doughnut';

	const chart = ref();
	// TODO перенести из v-model в props
	const chartData = defineModel<any>('chartData');
	let gradient: any = null;

	const props = defineProps<{
		chartType: ChartType;
		chartPropType: ChartPropType;
		chartOptions: any;
	}>();

	function setGradient() {
		chartData.value.datasets = chartData.value.datasets.map((dataset: any) => ({
			...dataset,
			backgroundColor: gradient,
		}));
	}

	onMounted(() => {
		const canvasWrapper = chart.value.$el as HTMLDivElement;
		const canvas = canvasWrapper.querySelector('canvas') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d');
		gradient = ctx?.createLinearGradient(0, 0, 0, canvasWrapper.offsetHeight / 1.3);
		gradient?.addColorStop(0, 'rgba(34, 204, 238, 0.5)');
		gradient?.addColorStop(1, 'rgba(255, 255, 255, 0)');

		if (props.chartType === 'line') {
			setGradient();
		}
	});

	watch(
		() => props.chartType,
		() => {
			if (props.chartType === 'line') {
				setGradient();
			}
		}
	);
</script>

<template>
	<div>
		<Chart class="chart" :type="chartPropType" :data="chartData" :options="chartOptions" ref="chart" />
	</div>
</template>

<style scoped>
	.chart {
		width: 100%;
		height: 100%;
	}
	:deep(.chart canvas) {
		height: 100% !important;
		width: 100% !important;
	}
</style>
