<script setup lang="ts">
	import { ref, onMounted, watchEffect } from 'vue';
	import { Button } from '@ui/button';
	import { FullWidthSection } from '@components/fullWidthSection/';
	import { Dropdown } from '@ui/dropdown';
	import { Calendar } from '@ui/calendar';
	import { getListCores } from '@services/analysis/getListCoresService';
	import { useRoute } from 'vue-router';
	import { getRegion } from '@services/analysis/getRegionService';
	import { getSearchType } from '@services/analysis/getSearchTypeService';
	import type { ICore } from '@intercaces/analytics/core';
	import { useCoreStore } from '../../../store/coreStore';
	import { useRegionStore } from '../../../store/regionStore';
	import { useSearchTypeStore } from '../../../store/searchTypeStore';
	import dayjs from 'dayjs';

	function getLastWeek() {
		return [dayjs().date(-7).$d, new Date()];
	}

	const date = ref(getLastWeek());

	const route = useRoute();

	const id = route.params.id;

	const coreStore = useCoreStore();
	const regionStore = useRegionStore();
	const searchTypeStore = useSearchTypeStore();

	const versions = ref<ICore[]>();
	const currentVersion = ref<ICore>();

	const regions = ref();
	const currentRegion = ref();

	const searchTypes = ref();
	const currentSearchType = ref();

	const getCores = async () => {
		const { data, status } = await getListCores(+id);
		if (status === 200) {
			versions.value = data.data;
			currentVersion.value = data.data[0];
			coreStore.setCore(data.data[0]);
		}
	};

	const getRegions = async () => {
		const { data, status } = await getRegion();
		if (status === 200) {
			regions.value = data.data;
			currentRegion.value = data.data[0];
			regionStore.setRegion(data.data[0]);
		}
	};

	const getSearchTypesData = async () => {
		const { data, status } = await getSearchType();
		if (status === 200) {
			searchTypes.value = data.data;
			currentSearchType.value = data.data[0];
			searchTypeStore.setSearchType(data.data[0]);
		}
	};

	onMounted(() => {
		getCores();
		getRegions();
		getSearchTypesData();
	});
</script>

<template>
	<FullWidthSection>
		<div class="flex items-center gap-2 flex-wrap">
			<Button icon="refresh" />
			<Dropdown
				v-model="currentVersion"
				:options="versions ? versions : []"
				placeholder="Версия"
				optionLabel="name"
				@change="(e: any) => coreStore.setCore(e.value)"
				class="w-[220px]" />
			<Dropdown
				v-model="currentSearchType"
				:options="searchTypes"
				placeholder="Поисковая система"
				optionLabel="name"
				@change="(e: any) => searchTypeStore.setSearchType(e.value)"
				class="w-[210px]" />
			<Dropdown
				v-model="currentRegion"
				:options="regions"
				placeholder="Регион"
				optionLabel="name"
				@change="(e:any) => regionStore.setRegion(e.value)"
				class="w-[220px]" />
			<Calendar
				v-model="date"
				selectionMode="range"
				:manualInput="false"
				:numberOfMonths="2"
				dateFormat="dd.mm.y" />
		</div>
		<div class="flex items-center gap-2">
			<Button icon="settings" />
			<Button icon="download" />
		</div>
	</FullWidthSection>
</template>
