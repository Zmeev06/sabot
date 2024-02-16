<script setup lang="ts">
	import { cn } from '../../utils/helpers';

	const props = defineProps<{ class?: string }>();
</script>

<template>
	<table :class="cn('caption-bottom', props.class)">
		<slot />
	</table>
</template>
