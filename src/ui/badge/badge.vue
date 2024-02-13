<script setup lang="ts">
	import { ref } from 'vue';
	import Badge from 'primevue/badge';

	interface BadgeProps {
		pt?: any;
		variant?: 'primary' | 'error';
		size?: 'sm' | 'md' | 'lg';
	}

	const props = withDefaults(defineProps<BadgeProps>(), {
		variant: 'primary',
		size: 'md',
	});

	const badgeStyleObject = {
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
	};

	const badgeStyle =
		typeof props.pt === 'undefined' ? ref(badgeStyleObject) : ref(Object.assign(badgeStyleObject, props.pt));
</script>

<template>
	<Badge :pt="badgeStyle">
		<slot />
	</Badge>
</template>

<style>
	.ptBadgePrimary {
		@apply border-[1px] border-grey-200 bg-gray-50 text-grey-700 font-medium;
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
