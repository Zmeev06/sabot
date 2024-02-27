<script setup lang="ts">
import { computed } from 'vue';
import { HeaderActionItem } from '../../../components/headerActionItem';
import { useColorModeStore } from '../store';

const colorModeStore = useColorModeStore();
const iconName = computed(() => (colorModeStore.isDark ? 'sun' : 'moon'));
</script>

<template>
  <HeaderActionItem :icon="iconName" @click="colorModeStore.toggleDark()" />
</template>
