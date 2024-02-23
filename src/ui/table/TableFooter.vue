<script setup lang="ts">
import { cn } from '../../utils/helpers';

const props = defineProps<{ class?: string }>();
</script>

<template>
  <tfoot :class="cn('bg-grey-mid font-medium text-base-white', props.class)">
    <slot />
  </tfoot>
</template>
