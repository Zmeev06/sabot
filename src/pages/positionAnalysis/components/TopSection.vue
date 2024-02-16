<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { Button } from '@ui/button';
	import { FullWidthSection } from '@components/fullWidthSection/';
	import { Dropdown } from '@ui/dropdown';
	import { Calendar } from '@ui/calendar';
import { getListCores } from '@services/analysis/getListCoresService';
import { useRoute } from 'vue-router';
import { getRegion } from '@services/analysis/getRegionService';
import {getSearchType} from '@services/analysis/getSearchTypeService'

const date = ref();

const route = useRoute()

const id = route.params.id

const versions = ref()
const currentVersion = ref()

const regions = ref()
const currentRegion = ref()

const searchTypes = ref()
const currentSearchType = ref()

const getCores = async () => {
	const { data, status } = await getListCores(+id)
	if (status === 200) {
		versions.value = data.data
			currentVersion.value = data.data[0]
		}
}

const getRegions = async () => {
	const { data, status } = await getRegion()
	if (status === 200) {
		regions.value = data.data
		currentRegion.value = data.data[0]
	}
}

const getSearchTypesData = async () => {
	const { data, status } = await getSearchType()
	if (status === 200) {
		searchTypes.value = data.data
		currentSearchType.value = data.data[0]
	}
}

onMounted(() => {
	getCores()
	getRegions()
	getSearchTypesData()
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
				v-model="currentSearchType"
				:options="searchTypes"
				placeholder="Поисковая система"
				optionLabel="name"
				class="w-[210px]" />
			<Dropdown
				v-model="currentRegion"
				:options="regions"
				placeholder="Регион"
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
