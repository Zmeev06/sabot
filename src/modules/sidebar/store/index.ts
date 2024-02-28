import { Ref, computed } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

export const useSidebarStore = defineStore('sidebar', () => {
  const isExpanded = useLocalStorage('sidebar-expanded', true) as Ref<boolean>;
  const isSidebarExpanded = computed({
    get() {
      return isExpanded.value && width.value >= 1536;
    },
    set(val: boolean) {
      isExpanded.value = val;
    }
  }) as Ref<boolean>;

  const toggleSidebar = () => {
    isSidebarExpanded.value = !isSidebarExpanded.value;
  };

  return { isSidebarExpanded, toggleSidebar };
});
