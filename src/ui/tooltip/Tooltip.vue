<script setup lang="ts">
	import { Tippy } from 'vue-tippy';
	import { Icon } from '@//ui/icon';

	interface ITippyProps {
		heading: string;
		body: string;
	}

	defineProps<ITippyProps>();
</script>

<template>
	<Tippy interactive sticky :duration="0" :hide-on-click="false">
		<slot />

		<template #content>
			<div class="wrapper relative overflow-visible">
				<div class="text-text-primary space-y-1 py-2.5 px-1.5 bg-grey-mid rounded-lg">
					<h3 class="text-base font-bold">{{ heading }}</h3>
					<p class="text-sm">{{ body }}</p>
				</div>
				<Icon
					name="tooltip-arrow"
					class="w-4 z-10 text-grey-mid h-1.5 absolute top-[100%] left-[50%] -translate-x-[50%]" />
			</div>
		</template>
	</Tippy>
</template>

<style scoped>
	.wrapper {
		box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
	}
</style>
