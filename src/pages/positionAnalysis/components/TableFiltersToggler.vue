<script setup lang="ts">
	import { Icon } from '@//ui/icon';

	interface Props {
		state: 'opened' | 'hidden';
	}

	interface Emits {
		(e: 'toggle'): void;
	}

	const props = defineProps<Props>();
	const emit = defineEmits<Emits>();
</script>

<template>
	<div class="flex items-center gap-4">
		<h2 class="text-text-primary text-2xl xl:text-[1.75rem] leading-[2.25rem] font-medium">
			Запросы сайта <span class="text-accent-normal">kolbaska.biz</span>
		</h2>
		<button
			class="py-2 px-3 inline-flex items-center text-text-tertiary font-medium text-base transition-colors hover:bg-grey-mid hover:text-text-primary rounded-md"
			@click="emit('toggle')">
			<Icon name="filter-lines" class="w-5 h-5 mr-3" />
			<span class="mr-2">Фильтры</span>
			<Icon
				name="chevron-down"
				class="w-5 h-5 transition-all"
				:class="{ 'rotate-180': props.state === 'hidden' }" />
		</button>
	</div>
</template>
