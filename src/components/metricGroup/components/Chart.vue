<script setup lang="ts">
	import { ref, onMounted, watch } from 'vue';
	import Chart from 'primevue/chart';
	import { ChartType } from '../../../components/metricGroup/constants/types';
import { getChart } from '../../../services/analysis/getChart';
import { useCoreStore } from '../../../store/coreStore';
import { useRegionStore } from '../../../store/regionStore';
import { useSearchTypeStore } from '../../../store/searchTypeStore';

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

const coreStore = useCoreStore()
const regionStore = useRegionStore()
const searchTypeStore = useSearchTypeStore()

const getChardData = async () => {
	if (coreStore.core?.id) {
		const { data, status } = await getChart(coreStore.core?.id, '2023-06-01', '2023-01-01', regionStore.region?.id, searchTypeStore.searchType?.id)
		if (status === 200) {
			console.log(data);
		}
	}
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

watch(() => [coreStore.core?.id, regionStore.region?.id, searchTypeStore.searchType?.id], () => {
	if (coreStore.core?.id && regionStore.region?.id && searchTypeStore.searchType?.id) {
		getChardData()
	}
})
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
