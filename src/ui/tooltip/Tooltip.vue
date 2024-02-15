<script setup lang="ts">
	import { Tippy } from 'vue-tippy';

	interface ITippyProps {
		heading: string;
		body: string;
	}

	defineProps<ITippyProps>();
</script>

<template>
	<Tippy>
		<slot />

		<template #content>
			<div
				class="text-text-primary space-y-1 py-3 px-2 bg-base-white rounded-lg shadow-md shadow-text-primary/5 border-[1px] border-border-strong">
				<h3 class="text-base font-bold">{{ heading }}</h3>
				<p class="text-sm">{{ body }}</p>
			</div>
		</template>
	</Tippy>
</template>
