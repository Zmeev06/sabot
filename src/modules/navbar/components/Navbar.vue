<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import { Tag } from '../../../ui/tag';

	import { menuLinks } from '../constants/linkList';

	const route = useRoute();

	const currentRouteIndex = computed(() => menuLinks.findIndex((link) => link.path.includes(route.fullPath)));
</script>

<template>
	<nav>
		<ul class="flex flex-wrap items-center gap-[6px] 3xl:gap-2">
			<li v-for="(link, index) in menuLinks" :key="link.path">
				<router-link :to="link.path">
					<Tag :value="link.title" :active="currentRouteIndex === index" />
				</router-link>
			</li>
		</ul>
	</nav>
</template>
