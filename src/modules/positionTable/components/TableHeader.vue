<script setup lang="ts">
	import { ref } from 'vue';
	import DropDownFilter from './DropDownFilter.vue';
	import FilterButton from './FilterButton.vue';
	import { Dropdown } from '../../../ui/dropdown';
	import TableScrollbar from './TableScrollbar.vue';

	const selectedCity = ref();
	const cities = ref([
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	]);

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
	<div class="flex items-center justify-between py-2 px-4">
		<div class="flex items-center gap-1">
			<DropDownFilter v-model="selectedCity" :options="cities" optionLabel="name" icon="switch-vertical" />
			<FilterButton icon="switch-horizontal" />
			<FilterButton icon="attach" />
			<FilterButton icon="calendar" />
			<FilterButton icon="eye-off" />
			<FilterButton icon="scale" />
			<FilterButton icon="contrast" />
		</div>
		<div class="flex items-center gap-[18px] max-w-[1038px] w-full">
			<TableScrollbar class="w-full" :totalPages="100" :pageItemsCount="10" v-model="currentPage" />
			<div class="flex items-center gap-3">
				<span class="text-text-primary text-base">Выводить:</span>
				<Dropdown class="px-2 py-1" :options="output" optionLabel="value" v-model="selectedOutput" />
			</div>
		</div>
	</div>
</template>
