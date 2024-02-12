<script setup lang="ts">
	import { SelectGroup, type SelectGroupProps } from 'radix-vue';
	import { cn } from '../../utils/helpers';

	const props = defineProps<SelectGroupProps & { class?: string }>();
</script>

<template>
	<SelectGroup :class="cn('bg-base-white w-full', props.class)" v-bind="props">
		<slot />
	</SelectGroup>
</template>
