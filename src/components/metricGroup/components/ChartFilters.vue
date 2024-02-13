<script setup lang="ts">
	import { Tag } from '../../../ui/tag';
	import type { IChartFilterProp } from '../constants/types';

	const modelValue = defineModel<number>();

	defineProps<{
		filters: IChartFilterProp[];
	}>();
</script>

<template>
	<div class="flex items-center gap-2">
		<button v-for="(filter, index) in filters" :key="index" @click="modelValue = index">
			<Tag :icon="filter.icon" :active="modelValue === index" />
		</button>
	</div>
</template>
