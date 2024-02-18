<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import TableFilters from './TableFilters.vue';
	import TableFiltersToggler from './TableFiltersToggler.vue';
	import { Toggler } from '@//components/toggler';

	import { columns, Table } from '@//modules/positionTable';
	import { responseData } from '@//modules/positionTable';
	import type { Response } from '../../../modules/positionTable';

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
		<Toggler class="space-y-6 flex-col-reverse">
			<template #default="{ toggle }">
				<TableFiltersToggler @toggle="toggle" />
			</template>
			<template #content>
				<TableFilters />
			</template>
		</Toggler>
		<Table :columns="columns" :data="data" />
	</div>
</template>
