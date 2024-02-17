<script setup lang="ts">
	import { Tippy } from 'vue-tippy';
	import { Icon } from '@//ui/icon';
</script>

<template>
	<Tippy interactive sticky :duration="0" :hide-on-click="false">
		<slot />

		<template #content>
			<div class="wrapper relative overflow-visible">
				<button class="flex items-center gap-1 text-error-500 bg-base-white p-3 rounded-lg overflow-hidden">
					<Icon name="trash" class="w-4 h-4" />
					<span class="text-sm/[18px] font-medium">Удалить</span>
				</button>
				<Icon
					name="tooltip-arrow"
					class="w-4 text-base-white h-1.5 absolute top-[100%] left-[50%] -translate-x-[50%]" />
			</div>
		</template>
	</Tippy>
</template>

<style scoped>
	.wrapper {
		box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
	}
</style>
