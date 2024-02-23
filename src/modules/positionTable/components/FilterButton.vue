<script setup lang="ts">
import { Icon } from '../../../ui/icon';

defineProps<{
  icon: string;
}>();
</script>

<template>
  <button
    class="p-2.5 text-fill-mid bg-base-white transition-colors hover:bg-border-mid rounded-lg"
  >
    <Icon :name="icon" class="w-5 h-5" />
  </button>
</template>
