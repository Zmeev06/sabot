<script setup lang="ts">
	import { Icon } from '../../ui/icon';

	defineProps<{
		icon: string;
	}>();
</script>

<template>
	<button class="p-2.5 inline-flex justify-center items-center rounded-lg transition-colors hover:bg-border-mid">
		<Icon :name="icon" class="w-5 h-5 text-fill-mid" />
		<slot />
	</button>
</template>
