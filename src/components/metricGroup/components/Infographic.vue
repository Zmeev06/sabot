<script setup lang="ts">
	import { Button } from '../../../ui/button';
	import InfographicItem from './InfographicItem.vue';
	import { IGraphicItem } from '../constants/types';

	interface Props {
		items: IGraphicItem[];
	}

	interface Emits {
		(e: 'toggle'): void;
	}

	defineProps<Props>();
	const emit = defineEmits<Emits>();
</script>

<template>
	<div class="flex items-center gap-2">
		<div class="flex items-center rounded-lg overflow-hidden outline outline-1 outline-border-mid flex-wrap">
			<InfographicItem
				v-for="(item, index) in items"
				:key="index"
				v-bind="item"
				class="outline outline-1 outline-border-mid w-[136px]" />
		</div>
		<Button icon="chevron-up" class="!rounded-full" @click="emit('toggle')" />
	</div>
</template>
