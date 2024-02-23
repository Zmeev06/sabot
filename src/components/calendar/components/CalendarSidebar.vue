<script setup lang="ts">
import { sidebarItems } from '../constants/sidebar';
</script>

<template>
  <div class="border-r-[1px] border-r-border-mid px-4 py-3">
    <ul>
      <li
        v-for="item in sidebarItems"
        :key="item.text"
        class="mb-1 w-full rounded-lg px-[6px] transition-colors last:mb-0 hover:bg-grey-50"
      >
        <button
          class="w-full px-2.5 py-[9px] text-left text-sm font-medium text-text-secondary"
        >
          {{ item.text }}
        </button>
      </li>
    </ul>
  </div>
</template>
