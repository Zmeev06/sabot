<script setup lang="ts">
import { Icon } from '../../ui/icon';

defineProps<{
  icon: string;
}>();
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded-lg p-2.5 transition-colors hover:bg-border-mid"
  >
    <Icon :name="icon" class="h-5 w-5 text-fill-mid" />
    <slot />
  </button>
</template>
