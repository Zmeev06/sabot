<script setup lang="ts">
	import { ref } from 'vue';
	import { Button } from '@ui/button';
	import { FullWidthSection } from '@components/fullWidthSection/';
	import { Dropdown } from '@ui/dropdown';
	import { Calendar } from '@ui/calendar';

	const selectedCity = ref();
	const cities = ref([
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	]);

	const date = ref();
</script>

<template>
	<FullWidthSection>
		<div class="flex items-center gap-2 flex-wrap">
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
			<Calendar v-model="date" selectionMode="range" :manualInput="false" :numberOfMonths="2" />
		</div>
		<div class="flex items-center gap-2">
			<Button icon="settings" />
			<Button icon="download" />
		</div>
	</FullWidthSection>
</template>
