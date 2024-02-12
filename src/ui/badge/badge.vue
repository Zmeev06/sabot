<script setup lang="ts">
	import { ref } from 'vue';
	import Badge from 'primevue/badge';
	import { cn, concatString } from '../../utils/helpers';

	interface BadgeProps {
		variant?: 'primary' | 'error';
		size?: 'sm' | 'md' | 'lg';
	}

	const props = withDefaults(defineProps<BadgeProps>(), {
		variant: 'primary',
		size: 'md',
	});

	const computedStyles = ref('');

	switch (props.variant) {
		case 'primary':
			computedStyles.value = cn('border-[1px] border-grey-200 bg-gray-50 text-grey-700');
			break;
		case 'error':
			computedStyles.value = cn('bg-error-500 text-base-white');
			break;
	}

	switch (props.size) {
		case 'sm':
			computedStyles.value = concatString(
				computedStyles.value,
				'rounded-md text-[0.625rem] leading-[0.625] rounded-md px-0.5 py-1'
			);
			break;
		case 'md':
			computedStyles.value = concatString(computedStyles.value, 'rounded-2xl text-xs px-2 py-0.5');
			break;
		case 'lg':
			computedStyles.value = concatString(computedStyles.value, 'rounded-2xl text-sm px-3 py-1');
			break;
	}
</script>

<template>
	<Badge :class="cn(computedStyles, $attrs.class ?? '')">
		<slot />
	</Badge>
</template>
