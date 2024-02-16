<script setup lang="ts">
	import type { TrandType } from '../../modules/positionTable/constants/types';

	const props = defineProps<{
		title: string;
		trend: TrandType;
	}>();
</script>

<template>
	<div class="flex items-center justify-between gap-2 pl-2 pr-8">
		<h2 class="text-text-secondary text-sm/4">{{ title }}</h2>
		<div
			class="whitespace-nowrap text-sm/[22px]"
			:class="{
				'text-error-600': trend.increaseType === 'down',
				'text-success-600': trend.increaseType === 'up',
			}">
			{{ props.trend.increaseType === 'down' ? `↓${trend.increaseValue}` : `↑${trend.increaseValue}` }}
		</div>
	</div>
</template>
