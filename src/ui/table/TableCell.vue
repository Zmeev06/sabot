<script setup lang="ts">
import { cn } from '../../utils/helpers';

const props = defineProps<{ class?: string }>();
</script>

<template>
  <td :class="cn('!border-none !p-0 align-middle', props.class)">
    <slot />
  </td>
</template>
