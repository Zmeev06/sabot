<script setup lang="ts">
	import { ref } from 'vue';
	import { SearchBox } from '../../searchBox';
	import { Icon } from '../../../ui/icon';

	const selectedCity = ref();
	const cities = ref([
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	]);
</script>

<template>
	<div class="rounded-xl border-[1px] border-border-mid bg-grey-light p-[22px]">
		<div class="flex items-center gap-4">
			<SearchBox
				v-model="selectedCity"
				:options="cities"
				optionLabel="name"
				placeholder="Поиск по группам"
				class="flex-shrink w-full" />
			<button>
				<Icon name="show-more" class="w-5 h-5 text-fill-light" />
			</button>
		</div>
	</div>
</template>
