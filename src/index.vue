<script setup lang="ts">
	import { Routing } from './router';
	import { Sidebar } from './modules/sidebar';
	import { SvgSprite } from './components/svgSprite';

	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();

	if (route.path === '/') {
		router.push('/projects');
	}
</script>

<template>
	<div class="flex h-full min-h-screen w-full">
		<aside class="sticky top-16 my-16 ml-[42px] mr-8 h-full">
			<Sidebar />
		</aside>

		<Routing />
		<SvgSprite />
	</div>
</template>
