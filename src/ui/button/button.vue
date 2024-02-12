<script setup lang="ts">
	import { computed, ref } from 'vue';
	import Button from 'primevue/button';
	import { cn, concatString } from '../../utils/helpers';
	import { Icon } from '../icon';

	interface ButtonProps {
		variant?: 'primary' | 'secondary' | 'tertiary';
		size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		error?: boolean;
		icon?: string;
		prependIcon?: string;
		appendIcon?: string;
	}

	const props = withDefaults(defineProps<ButtonProps>(), {
		variant: 'primary',
		size: 'md',
		error: false,
	});

	const defaultStyles = ref(
		props.error
			? 'group inline-flex items-center justify-center rounded-lg whitespace-nowrap font-semibold transition-all disabled:pointer-events-none'
			: 'group inline-flex items-center justify-center rounded-lg whitespace-nowrap font-semibold transition-all disabled:pointer-events-none'
	);
	const computedStyles = ref('');

	switch (props.variant) {
		case 'primary':
			computedStyles.value = props.error
				? 'bg-error-600 text-base-white border-[1px] border-error-600 hover:bg-error-700 hover:border-error-700 disabled:bg-error-200 disabled:bg-error-200 disabled:border-error-200 shadow-sm shadow-text-primary/5 focus:ring-4 focus:ring-error-100'
				: 'bg-accent-normal text-base-white border-[1px] border-accent-normal hover:bg-accent-dark hover:border-bg-accent-dark disabled:bg-accent-light disabled:border-accent-light shadow-sm shadow-text-primary/5 focus:shadow-none focus:ring-2 focus:ring-accent-light';
			break;
		case 'secondary':
			computedStyles.value = props.error
				? 'border-[1px] bg-global border-error-300 text-error-700 shadow-sm shadow-text-primary/5 hover:text-error-800 hover:bg-error-50 focus:ring-4 focus:ring-error-100 disabled:text-error-300 disabled:border-error-200'
				: 'border-[1px] bg-global border-border-strong text-text-secondary shadow-sm shadow-text-primary/5 hover:text-text-primary hover:bg-bg-secondary focus:ring-4 focus:ring-accent-light disabled:text-border-strong disabled:border-broder-mid';
			break;
		case 'tertiary':
			computedStyles.value = props.error
				? ''
				: 'bg-global text-fill-strong hover:text-text-secondary hover:bg-bg-secondary focus:bg-bg-secondary disabled:bg-bg-secondary disabled:text-border-strong';
	}

	switch (props.size) {
		case 'sm':
			computedStyles.value = concatString(computedStyles.value, 'py-2 px-[14px] gap-2 text-sm');
			break;
		case 'md':
			computedStyles.value = concatString(computedStyles.value, 'py-[10px] px-[16px] gap-2 text-sm');
			break;
		case 'lg':
			computedStyles.value = concatString(computedStyles.value, 'py-[10px] px-[18px] gap-2 text-base');
			break;
		case 'xl':
			computedStyles.value = concatString(computedStyles.value, 'py-3 px-[20px] gap-2 text-base');
			break;
		case '2xl':
			computedStyles.value = concatString(computedStyles.value, 'py-4 px-7 gap-3 text-lg');
			break;
	}

	const hasIconOnly = computed(() => !!props.icon);
	const iconStyles = ref('h-5 w-5');
</script>

<template>
	<Button :class="cn(defaultStyles, computedStyles, hasIconOnly ? '!p-3' : '', $attrs.class ?? '')">
		<Icon v-if="props.prependIcon" :name="prependIcon ?? ''" :class="iconStyles" />
		<slot v-if="!hasIconOnly" />
		<Icon v-if="props.appendIcon" :name="icon ?? ''" :class="iconStyles" />
		<Icon v-if="hasIconOnly" :name="icon ?? ''" :class="iconStyles" />
	</Button>
</template>
