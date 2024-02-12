<script setup lang="ts">
	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();

	if (route.path === '/projects/analytics') {
		router.push('/projects/analytics/position-analysis');
	}
</script>

<template>
	<div>Analytics</div>
</template>
