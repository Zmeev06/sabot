<script setup lang="ts">
	import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText } from 'radix-vue';
	import { cn } from '../../utils/helpers';
	import { Icon } from '../icon';

	const props = defineProps<SelectItemProps & { class?: string }>();
</script>

<template>
	<SelectItem
		v-bind="props"
		:class="
			cn(
				'focus:text-accent-foreground relative mb-1 flex w-full cursor-pointer select-none items-center justify-between rounded-sm px-2 py-[10px] text-text-primary outline-none transition-colors last:mb-0 focus:bg-grey-strong data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				props.class
			)
		">
		<SelectItemText>
			<slot />
		</SelectItemText>

		<span class="flex items-center justify-center">
			<SelectItemIndicator>
				<Icon name="checkbox" class="h-[20px] w-[20px] text-[#00C2FF]" />
			</SelectItemIndicator>
		</span>
	</SelectItem>
</template>
