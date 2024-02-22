<script setup lang="ts">
	import { computed } from 'vue';
	import BorderGroup from './BorderGroup.vue';
	import BorderItem from './BorderItem.vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();

	import { analyticsTabList } from '../constants/analytics';
	// import { semanticsTabList } from '../constants/semantics';

	const currentTabs = computed(() => analyticsTabList);
	const currentTabIndex = computed(() => analyticsTabList.findIndex((tab) => tab.url.includes(route.fullPath)));
</script>

<template>
	<nav>
		<BorderGroup>
			<BorderItem v-for="(tab, index) in currentTabs" :key="tab.url">
				<router-link
					:key="tab.url"
					:to="tab.url"
					class="block py-2 px-2.5 x:px-4 xl:py-2.5 text-sm/5 font-medium transition-colors hover:text-text-primary hover:bg-bg-secondary"
					:class="
						currentTabIndex === index
							? 'text-text-primary bg-bg-secondary'
							: 'text-text-tertiary bg-base-white'
					">
					{{ tab.title }}
				</router-link>
			</BorderItem>
		</BorderGroup>
	</nav>
</template>
