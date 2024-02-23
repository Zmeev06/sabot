<script setup lang="ts">
import { cn } from '../../utils/helpers';

const props = defineProps<{ class?: string }>();
</script>

<template>
  <th
    :class="
      cn(
        'text-muted-foreground align-middle font-medium [&:has([role=checkbox])]:pr-0',
        props.class
      )
    "
  >
    <slot />
  </th>
</template>
