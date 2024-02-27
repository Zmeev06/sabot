<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store';
import { Icon } from '../../../ui/icon';
import type { ISidebarItem } from '../constants/linkList';
import { Badge } from '../../../ui/badge';
import { Tippy } from 'vue-tippy';
import Tooltip from './Tooltip.vue';
import { useWindowSize } from '@vueuse/core';

const sidebarStore = useSidebarStore();
const { width } = useWindowSize();

const isTooltipEnabled = computed(() => width.value < 1536);

withDefaults(
  defineProps<{
    item: ISidebarItem;
    isCurrent: boolean;
  }>(),
  {
    isCurrent: false
  }
);
</script>

<template>
  <Tippy placement="right" sticky :duration="0" :hide-on-click="false">
    <router-link
      :to="item.to"
      class="group relative flex items-center justify-between gap-4 rounded-full px-4 py-3 text-[18px] font-medium leading-[26px] transition-colors hover:bg-brand-normal"
      :class="{
        'bg-brand-normal text-base-black': isCurrent,
        'text-base-white hover:text-base-black': !isCurrent,
        'w-fit': !sidebarStore.isSidebarExpanded
      }"
    >
      <div class="flex items-center gap-3">
        <Icon
          :name="item.icon"
          class="h-6 w-6 transition-all"
          :class="{
            [`${item.iconColor}`]: item.iconColor,
            'text-base-black': isCurrent,
            'text-grey-500 group-hover:text-base-black': !isCurrent
          }"
        />
        <span v-show="sidebarStore.isSidebarExpanded">{{ item.title }}</span>
      </div>
      <div v-if="item.notifications && sidebarStore.isSidebarExpanded">
        <Badge>{{ item.notifications }}</Badge>
      </div>
    </router-link>
    <template #content>
      <Tooltip :label="item.title" v-if="isTooltipEnabled" />
    </template>
  </Tippy>
</template>
