<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { SidebarItem } from '../constants/types';

	const sidebarList = ref<HTMLUListElement>();
	const sidebarListWidth = computed(() => sidebarList.value?.offsetWidth);

	interface Props {
		items: SidebarItem[];
	}

	const props = defineProps<Props>();
</script>

<template>
	<div
		class="calendarWrapper absolute w-full h-full top-0 left-0 bg-base-white rounded-lg border-[1px] border-grey-mid -z-10"
		:style="{ width: `calc(100% + ${sidebarListWidth}px)`, left: `-${sidebarListWidth}px` }">
		<div class="h-full">
			<ul
				class="inline-flex flex-col h-full gap-1 px-4 py-3 border-r-[1px] border-r-border-mid"
				ref="sidebarList">
				<li v-for="item in props.items" :key="item.text" class="px-1.5">
					<button class="text-text-secondary font-medium text-sm px-2.5 py-[9px]">
						{{ item.text }}
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.calendarWrapper {
		box-shadow: 0px 8px 8px -4px rgba(var(--text-primary), 0.03), 0px 20px 24px -4px rgba(var(--text-primary), 0.08);
	}
</style>
