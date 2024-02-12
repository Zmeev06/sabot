import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', () => {
	const isSidebarExpanded = useLocalStorage('sidebar-expanded', true);

	const toggleSidebar = () => {
		isSidebarExpanded.value = !isSidebarExpanded.value;
	};

	return { isSidebarExpanded, toggleSidebar };
});
