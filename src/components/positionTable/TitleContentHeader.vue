<script setup lang="ts">
import { Icon } from '../../ui/icon';

defineProps<{
  requestsAmount: number;
}>();
</script>

<template>
  <div class="flex items-center gap-3 px-2">
    <h2 class="font-secondary text-lg/7 font-medium text-text-primary">
      Запросы ({{ requestsAmount }})
    </h2>
    <button class="flex items-center justify-center">
      <Icon name="search" class="h-[18px] w-[18px] text-fill-light" />
    </button>
    <div>Тренд</div>
  </div>
</template>
