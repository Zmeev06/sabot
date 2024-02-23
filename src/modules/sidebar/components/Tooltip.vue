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
      class="flex items-center justify-center rounded-lg bg-base-white p-3 text-text-primary text-sm/[18px] font-medium capitalize"
    >
      {{ props.label }}
    </div>
    <Icon
      name="tooltip-arrow"
      class="rotate-90 text-grey-light w-4 h-1.5 absolute top-[50%] -left-1 -translate-y-[50%]"
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
