<script setup lang="ts">
import { computed } from 'vue';
import BorderGroup from './BorderGroup.vue';
import BorderItem from './BorderItem.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

import { analyticsTabList } from '../constants/analytics';
// import { semanticsTabList } from '../constants/semantics';

const currentTabs = computed(() => analyticsTabList);
const currentTabIndex = computed(() =>
  analyticsTabList.findIndex((tab) => tab.url.includes(route.fullPath))
);
</script>

<template>
  <nav>
    <BorderGroup>
      <BorderItem v-for="(tab, index) in currentTabs" :key="tab.url">
        <router-link
          :key="tab.url"
          :to="tab.url"
          class="x:px-4 block px-2.5 py-2 text-sm/5 font-medium transition-colors hover:bg-bg-secondary hover:text-text-primary xl:py-2.5"
          :class="
            currentTabIndex === index
              ? 'bg-bg-secondary text-text-primary'
              : 'bg-foreground text-text-tertiary'
          "
        >
          {{ tab.title }}
        </router-link>
      </BorderItem>
    </BorderGroup>
  </nav>
</template>
