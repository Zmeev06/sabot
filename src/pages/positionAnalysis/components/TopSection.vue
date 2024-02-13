<script setup lang="ts">
	import { ref } from 'vue';
	import { Button } from '../../../ui/button';
	import { FullWidthSection } from '../../../components/fullWidthSection/';
	import { Dropdown } from '../../../ui/dropdown';

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
	<FullWidthSection>
		<div class="flex items-center gap-2">
			<Button icon="refresh" />
			<Dropdown
				v-model="selectedCity"
				:options="cities"
				placeholder="Select a City"
				optionLabel="name"
				class="w-[220px]" />
			<Dropdown
				v-model="selectedCity"
				:options="cities"
				placeholder="Select a City"
				optionLabel="name"
				class="w-[210px]" />
			<Dropdown
				v-model="selectedCity"
				:options="cities"
				placeholder="Select a City"
				optionLabel="name"
				class="w-[220px]" />
		</div>
		<div class="flex items-center gap-2">
			<Button icon="settings" />
			<Button icon="download" />
		</div>
	</FullWidthSection>
</template>
