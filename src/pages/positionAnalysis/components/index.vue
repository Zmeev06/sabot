<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import TopSection from './TopSection.vue';
	import ChartSection from './ChartSection.vue';
	import TableFilters from './TableFilters.vue';

	import type { Response } from '../../../modules/positionTable';
	import { columns, Table } from '../../../modules/positionTable';
	import { responseData } from '../../../modules/positionTable';

	const data = ref<Response[]>([]);

	async function getData(): Promise<Response[]> {
		return responseData;
	}

	onMounted(async () => {
		data.value = await getData();
	});
</script>

<template>
	<div class="space-y-6">
		<TopSection />
		<ChartSection />
		<TableFilters />
		<Table :columns="columns" :data="data" />
	</div>
</template>
