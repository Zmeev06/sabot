<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  increaseType: 'up' | 'down' | 'equal' | 'empty' | 'blue';
  increaseLevel: number;
  title: number;
  value: number;
}>();

function getColorLevel(level: number): string {
  switch (level) {
    case 1:
      return '100';
    case 2:
      return '200';
    case 3:
      return '300';
  }
  return '300';
}

const bgColor = computed(() => {
  let result = 'bg-';

  switch (props.increaseType) {
    case 'up':
      result += 'success-';
      break;
    case 'down':
      result += 'error-';
      break;
    case 'equal':
      result += 'foreground';
      break;
    case 'blue':
      result += 'cyan-';
      break;
    case 'empty':
      result += 'warning-50';
      break;
  }

  props.increaseType !== 'empty' && props.increaseType !== 'equal'
    ? (result += getColorLevel(props.increaseLevel))
    : null;
  return result;
});

const textColor = computed(() => {
  let result = 'text-';

  switch (props.increaseType) {
    case 'up':
      result += 'success-600';
      break;
    case 'blue':
    case 'down':
      result += 'error-600';
      break;
  }

  return result;
});

const testColor = computed(() => '#CFF8FE');
</script>

<template>
  <div
    class="flex items-start gap-0.5 px-3 py-2"
    :style="{ backgroundColor: testColor }"
    :class="[textColor]"
    :data-increase-type="increaseType"
  >
    <h2 v-if="increaseType !== 'empty'" class="title">{{ title }}</h2>
    <h2 v-else class="title">--</h2>
    <div v-if="value === 0" class="value">
      {{ increaseType === 'up' ? `↑` : `↓` }}
    </div>
    <div
      v-else-if="increaseType === 'up' || increaseType === 'down'"
      class="value"
    >
      {{ increaseType === 'up' ? `▲${value}` : `▼${value}` }}
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply text-lg/[18px] text-text-primary;
}

.value {
  @apply text-[10px] leading-[10px];
}
</style>
