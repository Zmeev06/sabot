<script setup lang="ts">
import type { IContentItem } from '../constants/links';
import { Icon } from '../../../ui/icon';

defineProps<IContentItem>();
</script>

<template>
  <RouterLink
    :to="to"
    class="flex items-center justify-between gap-3 rounded-md p-2.5 transition-colors hover:bg-border-mid"
  >
    <div class="flex items-center gap-2">
      <Icon :name="icon" class="h-4 w-4 text-fill-extra" />
      <span class="text-sm text-text-secondary">{{ text }}</span>
    </div>
    <span
      v-if="additional"
      class="text-[12px] leading-[18px] text-text-tertiary"
      >{{ additional }}</span
    >
  </RouterLink>
</template>
