<script setup lang="ts">
	import { computed } from 'vue';
	import { Badge } from '../../../ui/badge';
	import { BadgeItemStyles } from '../constants/types';

	const props = withDefaults(
		defineProps<{
			styles?: BadgeItemStyles;
			variant?: 'primary' | 'error';
			size?: 'sm' | 'md' | 'lg';
		}>(),
		{
			variant: 'primary',
			size: 'md',
		}
	);

	const computedStyles = computed(() => ({
		root: [
			{
				ptBadgePrimary: props.variant === 'primary',
				ptBadgeError: props.variant === 'error',
			},
			{
				ptBadgeSm: props.size === 'sm',
				ptBadgeMd: props.size === 'md',
				ptBadgeLg: props.size === 'lg',
			},
			typeof props.styles !== 'undefined' ? Object.values(props.styles).join(' ') : '',
		],
	}));
</script>

<template>
	<Badge :pt="computedStyles" :variant="variant" :size="size">
		<slot />
	</Badge>
</template>

<style>
	.ptBadgePrimary {
		@apply border-[1px];
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
