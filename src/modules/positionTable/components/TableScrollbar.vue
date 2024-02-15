<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useElementSize } from '@vueuse/core';
	import { Button } from '../../../ui/button';

	const currentPage = defineModel<number>({ required: true });

	const props = defineProps<{
		totalPages: number;
		pageItemsCount: number;
	}>();

	const emit = defineEmits<{
		prevPage: [];
		nextPage: [];
	}>();

	const scrollTrack = ref<HTMLElement>();
	const { width } = useElementSize(scrollTrack);

	const scrollThumbWidth = computed(() => width.value / (props.totalPages / props.pageItemsCount));
	const scrollThumbOffset = computed(() => scrollThumbWidth.value * currentPage.value);

	function prevPage() {
		if (currentPage.value === 0) return;
		currentPage.value--;
	}

	function nextPage() {
		console.log(currentPage.value);
		console.log(Math.floor(props.totalPages / props.pageItemsCount));
		if (currentPage.value >= Math.floor(props.totalPages / props.pageItemsCount)) return;
		currentPage.value++;
	}
</script>

<template>
	<div class="grid grid-cols-[auto_1fr_auto] gap-2">
		<Button class="!py-2 !px-3.5" variant="secondary" size="sm" icon="arrow-narrow-left" @click="prevPage" />
		<div class="p-1 bg-transparent h-auto" ref="scrollTrack">
			<div
				class="rounded-lg h-full bg-grey-heavy w-[50px] transition-transform transform"
				:style="{ width: `${scrollThumbWidth}px`, translate: `${scrollThumbOffset}px` }"></div>
		</div>
		<Button class="!py-2 !px-3.5" variant="secondary" size="sm" icon="arrow-narrow-right" @click="nextPage" />
	</div>
</template>
