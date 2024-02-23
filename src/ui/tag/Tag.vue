<script setup lang="ts">
import { computed } from 'vue';
import Tag from 'primevue/tag';
import { Icon } from '../icon';

const props = defineProps<{
  value?: any;
  icon?: string;
  active?: boolean;
}>();

const tagStyle = computed(() => ({
  root: [
    'group',
    'ptTagRoot',
    {
      'bg-grey-mid': props.active,
      ptTagIconOnly: typeof props.value === 'undefined'
    }
  ],

  value: [
    'ptTagValue',
    {
      'text-text-primary': props.active
    }
  ]
}));
</script>

<template>
  <div>
    <Tag :pt="tagStyle" :value="value">
      <template #icon v-if="icon">
        <Icon
          :name="icon"
          class="h-5 w-5"
          :class="{ 'text-fill-strong': active, 'text-text-tertiary': !active }"
        />
      </template>
    </Tag>
  </div>
</template>

<style>
.ptTagRoot {
  @apply inline-flex items-center gap-3 whitespace-nowrap rounded-md p-[6px] transition-colors hover:bg-grey-mid xl:px-3 xl:py-2;
}

.ptTagIconOnly {
  @apply !p-[10px];
}

.ptTagValue {
  @apply text-sm/[22px] font-medium text-text-tertiary transition-colors group-hover:text-text-primary xl:text-base;
}
</style>
