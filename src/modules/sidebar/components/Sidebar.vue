<script setup lang="ts">
	import { computed } from 'vue';
	import { useSidebarStore } from '../store';
	import SidebarList from './SidebarList.vue';
	import { mainLinks, additionalLinks } from '../constants/linkList';
	import { Icon } from '../../../ui/icon';

	const sidebarStore = useSidebarStore();
	const iconLogoName = computed(() => (sidebarStore.isSidebarExpanded ? 'logo-full' : 'logo-collapsed'));
</script>

<template>
	<div class="flex flex-col gap-16">
		<div class="flex items-center gap-[15px]">
			<RouterLink to="/">
				<Icon
					:name="iconLogoName"
					class="h-5"
					:class="{ 'w-[204px]': sidebarStore.isSidebarExpanded, 'w-10': !sidebarStore.isSidebarExpanded }" />
			</RouterLink>

			<button
				class="flex items-center justify-center p-0.5 transition-transform"
				@click="sidebarStore.toggleSidebar"
				:class="{ 'rotate-180': !sidebarStore.isSidebarExpanded }">
				<Icon name="arrow-narrow-left" class="w-7 h-7" />
			</button>
		</div>
		<div class="flex flex-col gap-16">
			<SidebarList :items="mainLinks" title="Аналитика" />
			<SidebarList :items="additionalLinks" title="Дополнительно" />
		</div>
	</div>
</template>
