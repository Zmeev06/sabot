<script setup lang="ts">
import { HeaderActionItem } from '../../components/headerActionItem';
import { Badge } from '../../ui/badge';

defineProps<{
  notifications?: number;
}>();
</script>

<template>
  <HeaderActionItem icon="notifications" class="relative">
    <Badge
      class="absolute right-0 top-0"
      v-if="notifications"
      variant="error"
      size="sm"
      >{{ notifications }}</Badge
    >
  </HeaderActionItem>
</template>
