<script setup lang="ts">
import { Icon } from '../../../ui/icon';

defineProps<{
  icon: string;
}>();
</script>

<template>
  <button
    class="rounded-lg bg-base-white p-2.5 text-fill-mid transition-colors hover:bg-border-mid"
  >
    <Icon :name="icon" class="h-5 w-5" />
  </button>
</template>
