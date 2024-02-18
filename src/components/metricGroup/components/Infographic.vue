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
	<div class="grid grid-cols-[1fr_auto] items-center gap-2 w-full">
		<div class="flex items-center rounded-lg overflow-hidden outline outline-1 outline-border-mid flex-wrap">
			<InfographicItem
				class="flex-auto outline outline-1 outline-border-mid"
				v-for="(item, index) in items"
				:key="index"
				v-bind="item" />
		</div>
		<Button icon="chevron-up" class="!rounded-full" @click="emit('toggle')" />
	</div>
</template>
