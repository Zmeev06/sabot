<script setup lang="ts">
import ContentItem from './ContentItem.vue';
import type { ContentGroup } from '../constants/links';

defineProps<{
  group: ContentGroup;
}>();
</script>

<template>
  <div class="px-1.5 py-1">
    <ContentItem v-for="item in group" :key="item.to" v-bind="item" />
  </div>
</template>
