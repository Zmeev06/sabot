<script setup lang="ts">
import type { IContentItem } from '../constants/links';
import { Icon } from '../../../ui/icon';

defineProps<IContentItem>();
</script>

<template>
  <RouterLink
    :to="to"
    class="flex items-center gap-3 p-2.5 rounded-md justify-between transition-colors hover:bg-border-mid"
  >
    <div class="flex items-center gap-2">
      <Icon :name="icon" class="w-4 h-4 text-fill-extra" />
      <span class="text-sm text-text-secondary">{{ text }}</span>
    </div>
    <span
      v-if="additional"
      class="text-text-tertiary text-[12px] leading-[18px]"
      >{{ additional }}</span
    >
  </RouterLink>
</template>
