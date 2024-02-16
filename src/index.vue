<script setup lang="ts">
	import { Routing } from './router';
	import { Sidebar } from './modules/sidebar';
	import { SvgSprite } from './components/svgSprite';
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
