<script setup lang="ts">
	import { Button } from '../../../ui/button';
	import TableRangeBar from './TableRangeBar.vue';

	const props = defineProps<{
		scrollTrack: number | string;
	}>();

	const emit = defineEmits<{
		'update:scrollTrack': [number];
	}>();

	function increaseScrollTrack() {
		emit('update:scrollTrack', Number(props.scrollTrack) + 10 > 100 ? 100 : Number(props.scrollTrack) + 10);
	}

	function decreaseScrollTrack() {
		emit('update:scrollTrack',  Number(props.scrollTrack) - 10 < 0 ? 0 : Number(props.scrollTrack) - 10);
	}
</script>

<template>
	<div class="grid grid-cols-[auto_1fr_auto] gap-2">
		<Button class="!py-2 !px-3.5" variant="secondary" size="sm" icon="arrow-narrow-left" @click="decreaseScrollTrack" />
		<TableRangeBar :model-value="props.scrollTrack" @update:model-value="emit('update:scrollTrack', $event)" />
		<Button class="!py-2 !px-3.5" variant="secondary" size="sm" icon="arrow-narrow-right" @click="increaseScrollTrack" />
	</div>
</template>
