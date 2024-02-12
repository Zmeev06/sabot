<script setup lang="ts">
	import { computed } from 'vue';
	import { cn } from '../../utils/helpers';

	const props = defineProps<{
		name: string;
	}>();

	const iconName = computed(() => `#${props.name}`);
</script>

<template>
	<svg :class="cn($attrs.class ?? '')">
		<use :xlink:href="iconName"></use>
	</svg>
</template>
