<script setup lang="ts">
import { Icon } from '@//ui/icon';

interface Props {
  state: 'opened' | 'hidden';
}

interface Emits {
  (e: 'toggle'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="flex items-center gap-4">
    <h2
      class="font-secondary text-2xl font-medium leading-[2.25rem] text-text-primary xl:text-[1.75rem]"
    >
      Запросы сайта <span class="text-accent-normal">kolbaska.biz</span>
    </h2>
    <button
      class="inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-text-tertiary transition-colors hover:bg-grey-mid hover:text-text-primary"
      @click="emit('toggle')"
    >
      <Icon name="filter-lines" class="mr-3 h-5 w-5" />
      <span class="mr-2">Фильтры</span>
      <Icon
        name="chevron-down"
        class="h-5 w-5 transition-all"
        :class="{ 'rotate-180': props.state === 'hidden' }"
      />
    </button>
  </div>
</template>
