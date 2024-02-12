<script setup lang="ts">
	import { ref } from 'vue';
	import Badge from 'primevue/badge';

	interface BadgeProps {
		variant?: 'primary' | 'error';
		size?: 'sm' | 'md' | 'lg';
	}

	const props = withDefaults(defineProps<BadgeProps>(), {
		variant: 'primary',
		size: 'md',
	});

	const badgeStyle = ref({
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
		],
	});
</script>

<template>
	<Badge :pt="badgeStyle">
		<slot />
	</Badge>
</template>

<style>
	.ptBadgePrimary {
		@apply border-[1px] border-grey-200 bg-gray-50 text-grey-700;
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
