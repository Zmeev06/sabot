<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useSidebarStore } from '../store';
import SidebarList from './SidebarList.vue';
import { mainLinks, additionalLinks } from '../constants/linkList';
import SidebarScrollPanel from './SidebarScrollPanel.vue';

import { Icon } from '../../../ui/icon';

const { width } = useWindowSize();

const sidebarStore = useSidebarStore();
const iconLogoName = computed(() =>
  sidebarStore.isSidebarExpanded && width.value >= 1536
    ? 'logo-full'
    : 'logo-collapsed'
);
</script>

<template>
  <SidebarScrollPanel>
    <aside class="scrollbar-none top-0 px-4 py-16 xl:pl-[42px] xl:pr-8">
      <div class="flex flex-col gap-16">
        <div
          class="flex items-center justify-center gap-[15px] 2xl:justify-start"
        >
          <RouterLink to="/">
            <Icon
              :name="iconLogoName"
              class="h-5"
              :class="{
                'w-[204px]': sidebarStore.isSidebarExpanded,
                'w-10': !sidebarStore.isSidebarExpanded
              }"
            />
          </RouterLink>

          <button
            class="hidden items-center justify-center p-0.5 text-gray-400 transition-transform 2xl:flex"
            @click="sidebarStore.toggleSidebar"
            :class="{ 'rotate-180': !sidebarStore.isSidebarExpanded }"
          >
            <Icon name="arrow-narrow-left" class="h-7 w-7" />
          </button>
        </div>
        <div class="flex flex-col gap-16">
          <SidebarList :items="mainLinks" title="Аналитика" />
          <SidebarList :items="additionalLinks" title="Дополнительно" />
        </div>
      </div>
    </aside>
  </SidebarScrollPanel>
</template>
