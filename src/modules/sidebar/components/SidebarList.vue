<script setup lang="ts">
import SidebarItem from './SidebarItem.vue';
import type { ISidebarItem } from '../constants/linkList';
import { useSidebarStore } from '../store';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

defineProps<{
  items: ISidebarItem[];
  title: string;
}>();

const sidebarStore = useSidebarStore();

const route = useRoute();
const currentPath = computed(() => {
  return route.path;
});

function isCurrent(currentUrl: string, itemUrl: string) {
  return currentUrl.includes(itemUrl);
}
</script>

<template>
  <div class="flex flex-col gap-[18px]">
    <div
      class="font-secondary text-lg font-medium text-gray-400"
      v-show="sidebarStore.isSidebarExpanded"
    >
      {{ title }}
    </div>
    <div class="flex flex-col gap-[6px]">
      <SidebarItem
        v-for="item in items"
        :key="item.title"
        :item="item"
        :is-current="isCurrent(currentPath, item.to)"
      />
    </div>
  </div>
</template>
