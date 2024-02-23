<script setup lang="ts">
	import { computed } from 'vue';
	import { Badge } from '../../../ui/badge';
	import { Icon } from '../../../ui/icon';
	import { IGraphicItem } from '../constants/types';

	function getTypeStyles(type: 'up' | 'down' | 'equal') {
		switch (type) {
			case 'up':
				return ['bg-error-50', 'border-error-200', 'text-error-700'].join(' ');
			case 'down':
				return ['bg-success-50', 'border-success-200', 'text-success-700'].join(' ');
			case 'equal':
				return ['bg-grey-50', 'border-border-mid', 'text-fill-strong'].join(' ');
		}
	}

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

	const computedStyles = computed(() => ({
		root: [
			{
				ptBadgePrimary: props.badge.variant === 'primary',
				ptBadgeError: props.badge.variant === 'error',
			},
			{
				ptBadgeSm: props.badge.size === 'sm',
				ptBadgeMd: props.badge.size === 'md',
				ptBadgeLg: props.badge.size === 'lg',
			},
			getTypeStyles(props.badge.increaseType),
		],
	}));
</script>

<template>
	<div class="py-2 px-3 xl:pl-3.5 xl:pr-1.5">
		<div class="mb-2 text-[0.75rem] leading-[1.125rem] font-medium text-fill-strong">
			<span>{{ label }}</span>
			<span class="text-fill-light">{{ additionalLabel }}</span>
		</div>
		<div class="flex items-center gap-2">
			<div class="text-xl xl:text-2xl font-medium text-text-primary">{{ numberValue }}</div>
			<Badge :pt="computedStyles" :size="badge.size" :variant="badge.variant" class="flex gap-1 items-center">
				<Icon :name="iconName" class="w-3 h-3" />
				<span>{{ badge.increaseValue }}</span>
			</Badge>
		</div>
	</div>
</template>

<style>
	.ptBadgePrimary {
		@apply outline outline-1;
	}

	.ptBadgeError {
		@apply bg-error-500 text-base-white;
	}

	.ptBadgeSm {
		@apply rounded-md text-[0.625rem] leading-[0.625] px-0.5 py-1;
	}
	.ptBadgeMd {
		@apply rounded-2xl text-xs px-2 py-0.5;
	}
	.ptBadgeLg {
		@apply rounded-2xl text-sm px-3 py-1;
	}
</style>
