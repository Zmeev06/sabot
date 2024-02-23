<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { menuLinks } from '../constants/linkList';

const route = useRoute();

const currentRouteIndex = computed(() =>
  menuLinks.findIndex((link) => link.path.includes(route.fullPath))
);
</script>

<template>
  <nav>
    <ul class="flex flex-wrap items-center gap-[6px] 3xl:gap-2">
      <li v-for="(link, index) in menuLinks" :key="link.path">
        <router-link :to="link.path">
          <div
            class="inline-flex items-center transition-colors hover:bg-grey-mid p-1.5 2xl:py-2 2xl:px-3 rounded-md whitespace-nowrap text-sm/[22px] 2xl:text-base font-medium text-text-tertiary hover:text-text-primary"
            :class="{
              'bg-grey-mid text-text-primary': currentRouteIndex === index
            }"
          >
            {{ link.title }}
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
