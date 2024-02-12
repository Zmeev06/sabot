<script setup lang="ts">
	import { SelectIcon, SelectTrigger, type SelectTriggerProps } from 'radix-vue';
	import { cn } from '../../utils/helpers';
	import { Icon } from '../icon';

	const props = withDefaults(defineProps<SelectTriggerProps & { class?: string; invalid?: boolean }>(), {
		class: '',
		invalid: false,
	});
</script>

<template>
	<SelectTrigger
		v-bind="props"
		:class="[
			cn(
				'bg-global shadow-text-primary/5 flex items-center justify-between whitespace-nowrap rounded-lg border border-border-strong px-[14px] py-[10px] text-base text-text-secondary shadow-sm focus:border-accent-normal focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:border-accent-normal data-[state=open]:font-medium data-[state=open]:text-text-primary [&>span]:min-w-0 [&>span]:truncate',
				props.class
			),
			props.invalid ? '!ring-destructive placeholder:!text-destructive ring-2' : '',
		]">
		<slot />
		<SelectIcon as-child>
			<Icon name="chevron-down" class="h-5 w-5 text-text-tertiary" />
		</SelectIcon>
	</SelectTrigger>
</template>
