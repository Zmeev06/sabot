<script setup lang="ts">
	import { Tag } from '../../../ui/tag';
	import type { IChartCategoryProp } from '../constants/types';

	const modelValue = defineModel<number>();

	defineProps<{
		categories: IChartCategoryProp[];
	}>();
</script>

<template>
	<div class="flex items-center gap-2">
		<button v-for="(category, index) in categories" :key="index" @click="modelValue = index">
			<Tag :icon="category.icon" :value="category.value" :active="modelValue === index" />
		</button>
	</div>
</template>
