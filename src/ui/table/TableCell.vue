<script setup lang="ts">
import { cn } from '../../utils/helpers';

const props = defineProps<{ class?: string }>();
</script>

<template>
  <td :class="cn('align-middle !border-none !p-0', props.class)">
    <slot />
  </td>
</template>
