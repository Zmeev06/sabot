<script setup lang="ts">
	import { ref } from 'vue';
	import { Dropdown } from '../../../ui/dropdown';
	import TableScrollbar from './TableScrollbar.vue';

	const output = ref([
		{ id: '1', value: '25' },
		{ id: '2', value: '50' },
		{ id: '3', value: '100' },
		{ id: '4', value: '250' },
		{ id: 's', value: '500' },
	]);
	const selectedOutput = ref(output.value[2]);

	const currentPage = ref(0);
</script>

<template>
	<div>
		<div class="flex items-center gap-[18px] max-w-[1038px] w-full">
			<TableScrollbar class="w-full" :totalPages="100" :pageItemsCount="10" v-model="currentPage" />
			<div class="flex items-center gap-3">
				<span class="text-text-primary text-base">Выводить:</span>
				<Dropdown class="px-2 py-1" :options="output" optionLabel="value" v-model="selectedOutput" />
			</div>
		</div>
	</div>
</template>
