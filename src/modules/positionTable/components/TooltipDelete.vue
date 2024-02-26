<script setup lang="ts">
import { Tippy } from 'vue-tippy';
import { Icon } from '@//ui/icon';
</script>

<template>
  <Tippy interactive sticky :duration="0" :hide-on-click="false">
    <slot />

    <template #content>
      <div class="wrapper relative overflow-visible">
        <button
          class="flex items-center gap-1 overflow-hidden rounded-lg bg-foreground p-3 text-error-500"
        >
          <Icon name="trash" class="h-4 w-4" />
          <span class="text-sm/[18px] font-medium">Удалить</span>
        </button>
        <Icon
          name="tooltip-arrow"
          class="absolute left-[50%] top-[100%] h-1.5 w-4 -translate-x-[50%] text-foreground"
        />
      </div>
    </template>
  </Tippy>
</template>

<style scoped>
.wrapper {
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
}
</style>
