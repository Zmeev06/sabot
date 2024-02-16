<script setup lang="ts">
	import { Icon } from '../../ui/icon';

	defineProps<{
		requestsAmount: number;
	}>();
</script>

<template>
	<div class="flex items-center gap-3 px-2 w-[271px]">
		<h2 class="text-text-primary text-lg/7 font-medium">Запросы ({{ requestsAmount }})</h2>
		<button class="flex items-center justify-center">
			<Icon name="search" class="w-[18px] h-[18px] text-fill-light" />
		</button>
		<div>Тренд</div>
	</div>
</template>
