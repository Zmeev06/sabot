<script setup lang="ts">
	import { Clusters, Chart } from '../../../components/metricGroup';

	const categories = [
		{
			icon: 'diamond',
			value: 'Топ 100',
		},
		{
			icon: 'diamond',
			value: 'Топ 100',
		},
		{
			icon: 'diamond',
			value: 'Топ 100',
		},
		{
			icon: 'diamond',
			value: 'Топ 100',
		},
	];

	const filters = [
		{
			type: 'line',
			icon: 'chart-line',
		},
		{
			type: 'line',
			icon: 'chart-line',
		},
		{
			type: 'line',
			icon: 'chart-line',
		},
		{
			type: 'line',
			icon: 'chart-line',
		},
	];
</script>

<template>
	<div class="grid gap-6 grid-cols-[1127px_1fr]">
		<Chart :categories="categories" :filters="filters" />
		<Clusters />
	</div>
</template>
