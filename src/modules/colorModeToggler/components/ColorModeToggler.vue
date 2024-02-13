<script setup lang="ts">
	import { HeaderActionItem } from '../../../components/headerActionItem';
	import { useColorModeStore } from '../store';

	const colorModeStore = useColorModeStore();
</script>

<template>
	<HeaderActionItem icon="moon" @click="colorModeStore.toggleDark" />
</template>
