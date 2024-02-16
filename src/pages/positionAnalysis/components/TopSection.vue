<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { Button } from '@ui/button';
	import { FullWidthSection } from '@components/fullWidthSection/';
	import { Dropdown } from '@ui/dropdown';
	import { Calendar } from '@ui/calendar';
import { getListCores } from '@services/analysis/getListCoresService';
import { useRoute } from 'vue-router';

	const selectedCity = ref();
	const cities = ref([
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	]);

const date = ref();

const route = useRoute()

const id = route.params.id

const versions = ref()
const currentVersion = ref()
const getCores = async () => {
	const { data, status } = await getListCores(+id)
	if (status === 200) {
		versions.value = data.data
			currentVersion.value = data.data[0]
		}
}

onMounted(() => {
		getCores()
	})
</script>

<template>
	<FullWidthSection>
		<div class="flex items-center gap-2 flex-wrap">
			<Button icon="refresh" />
			<Dropdown
				v-model="currentVersion"
				:options="versions"
				placeholder="Версия"
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
