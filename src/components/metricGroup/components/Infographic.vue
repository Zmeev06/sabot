<script setup lang="ts">
	import { Button } from '../../../ui/button';
	import InfographicItem from './InfographicItem.vue';
	import { IGraphicItem } from '../constants/types';

	defineProps<{
		items: IGraphicItem[];
	}>();
</script>

<template>
	<div class="flex items-center gap-2">
		<div class="flex items-center rounded-lg overflow-hidden outline outline-1 outline-border-mid flex-wrap">
			<InfographicItem
				v-for="(item, index) in items"
				:key="index"
				v-bind="item"
				class="outline outline-1 outline-border-mid" />
		</div>
		<Button icon="chevron-up" class="!rounded-full" />
	</div>
</template>
