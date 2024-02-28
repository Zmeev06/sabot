<script setup lang="ts">
import { Icon } from '@//ui/icon';

interface Props {
  label: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="wrapper relative pl-1.5">
    <div
      class="flex items-center justify-center rounded-lg bg-foreground p-3 text-sm/[18px] font-medium capitalize text-text-primary"
    >
      {{ props.label }}
    </div>
    <Icon
      name="tooltip-arrow"
      class="absolute -left-1 top-[50%] h-1.5 w-4 -translate-y-[50%] rotate-90 text-grey-light"
    />
  </div>
</template>

<style scoped>
.wrapper {
  box-shadow:
    0px 4px 6px -2px rgba(var(--text-primary), 0.03),
    0px 12px 16px -4px rgba(var(--text-primary), 0.08);
}
</style>
