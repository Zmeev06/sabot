<script setup lang="ts">
import { Tippy } from 'vue-tippy';
import { Icon } from '@//ui/icon';

interface ITippyProps {
  heading: string;
  body: string;
}

defineProps<ITippyProps>();
</script>

<template>
  <Tippy interactive sticky :duration="0" :hide-on-click="false">
    <slot />

    <template #content>
      <div class="wrapper relative overflow-visible">
        <div class="space-y-1 rounded-lg bg-grey-light p-3 text-text-primary">
          <h3 class="text-sm/[18px] font-medium text-text-primary">
            {{ heading }}
          </h3>
          <p class="text-[0.75rem]/[18px] text-text-secondary">{{ body }}</p>
        </div>
        <Icon
          name="tooltip-arrow"
          class="absolute left-[50%] top-[100%] z-10 h-1.5 w-4 -translate-x-[50%] text-grey-light"
        />
      </div>
    </template>
  </Tippy>
</template>

<style scoped>
.wrapper {
  box-shadow:
    0px 4px 6px -2px rgba(var(--text-primary), 0.03),
    0px 12px 16px -4px rgba(var(--text-primary), 0.08);
}
</style>
