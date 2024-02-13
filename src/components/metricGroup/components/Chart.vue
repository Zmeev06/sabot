<script setup lang="ts">
	import Chart from 'primevue/chart';

	defineProps<{
		chartData: any;
		chartOptions: any;
	}>();
</script>

<template>
	<div>
		<Chart class="chart" type="line" :data="chartData" :options="chartOptions" />
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
