<script setup lang="ts">
	import TopSection from './TopSection.vue';
	import ChartSection from './ChartSection.vue';
	import TableFilters from './TableFilters.vue';
	import { Table } from '../../../modules/positionTable';
</script>

<template>
	<div class="space-y-6">
		<TopSection />
		<ChartSection />
		<TableFilters />
		<Table />
	</div>
</template>
