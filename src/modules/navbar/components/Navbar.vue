<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';

	import { menuLinks } from '../constants/linkList';

	const route = useRoute();

	const currentRouteIndex = computed(() => menuLinks.findIndex((link) => link.path.includes(route.fullPath)));
</script>

<template>
	<nav>
		<ul class="flex flex-wrap items-center gap-1 2xl:gap-2">
			<li v-for="(link, index) in menuLinks" :key="link.path">
				<router-link
					:to="link.path"
					class="block text-base/6 font-medium text-fill-mid transition-colors hover:text-text-primary px-3 py-2 rounded-[6px]"
					:class="currentRouteIndex === index ? 'bg-grey-mid text-text-primary' : ''">
					{{ link.title }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>
