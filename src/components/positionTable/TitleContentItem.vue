<script setup lang="ts">
	import type { TrandType } from '../../modules/positionTable/constants/types';
	import { Icon } from '@//ui/icon';

	const props = defineProps<{
		title: string;
		trend: TrandType;
	}>();
</script>

<template>
	<div class="flex items-center justify-between gap-2 pl-2 pr-2">
		<h2 class="text-text-secondary text-sm/4">{{ title }}</h2>
		<div
			class="whitespace-nowrap text-sm/[22px]"
			:class="{
				'text-error-600': trend.increaseType === 'down',
				'text-success-600': trend.increaseType === 'up',
			}">
			{{ props.trend.increaseType === 'down' ? `↓${trend.increaseValue}` : `↑${trend.increaseValue}` }}
		</div>
		<div class="flex flex-col gap-0.5">
			<button>
				<Icon
					name="trash"
					class="w-4 h-4 text-error-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible" />
			</button>
			<button>
				<Icon
					name="refresh"
					class="w-4 h-4 text-success-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible" />
			</button>
		</div>
	</div>
</template>
