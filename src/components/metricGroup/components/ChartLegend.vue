<script setup lang="ts">
	import ChartLegendItem from './ChartLegendItem.vue';
	import { IBadgeLegendItem } from '../constants/types';

	defineProps<{
		items: IBadgeLegendItem[];
	}>();
</script>

<template>
	<div class="flex items-center justify-center gap-2">
		<ChartLegendItem v-for="item in items" :key="item.id" :styles="item.styles" size="lg">
			{{ item.text }}
		</ChartLegendItem>
	</div>
</template>
