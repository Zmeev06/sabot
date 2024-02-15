<script setup lang="ts">
	import { computed } from 'vue';
	import { Badge } from '../../../ui/badge';
	import { Icon } from '../../../ui/icon';
	import { IGraphicItem } from '../constants/types';

	const props = defineProps<IGraphicItem>();

	const iconName = computed(() => {
		switch (props.badge.increaseType) {
			case 'up':
				return 'trend-up';
			case 'down':
				return 'trend-down';
			case 'equal':
				return 'trend-equal';
		}
	});
</script>

<template>
	<div class="py-2 px-3.5">
		<div class="mb-2 text-[0.75rem] leading-[1.125rem] font-medium text-fill-strong">
			<span>{{ label }}</span>
			<span class="text-fill-light">{{ additionalLabel }}</span>
		</div>
		<div class="flex items-center gap-2">
			<div class="text-2xl font-medium text-text-primary">{{ numberValue }}</div>
			<Badge :pt="badge.styles" size="md" class="flex gap-1 items-center">
				<Icon :name="iconName" class="w-3 h-3" />
				<span>{{ badge.increaseValue }}</span>
			</Badge>
		</div>
	</div>
</template>
