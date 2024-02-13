<script setup lang="ts">
	import { HeaderActionItem } from '../../components/headerActionItem';
	import { Badge } from '../../ui/badge';

	defineProps<{
		notifications?: number;
	}>();
</script>

<template>
	<HeaderActionItem icon="notifications" class="relative">
		<Badge class="absolute top-0 right-0" v-if="notifications" variant="error" size="sm">{{ notifications }}</Badge>
	</HeaderActionItem>
</template>
