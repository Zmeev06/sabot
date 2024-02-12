<script setup lang="ts">
	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();

	if (route.path === '/projects') {
		router.push('/projects/analytics');
	}
</script>

<template>
	<div>Projects</div>
</template>
