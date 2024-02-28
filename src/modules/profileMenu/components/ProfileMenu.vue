<script setup lang="ts">
import { Overlay } from '@//ui/overlay';
import ProfileHeader from './ProfileHeader.vue';
import ContentItemGroup from './ContentItemGroup.vue';
import { Icon } from '../../../ui/icon';

import { headerData } from '../constants/header';
import { contentGroups } from '../constants/links';
</script>

<template>
  <Overlay>
    <template #trigger="{ toggle }">
      <button @click="toggle">
        <slot />
      </button>
    </template>
    <template #content>
      <div class="profileOverlay min-w-[240px]">
        <ProfileHeader
          v-bind="headerData"
          class="border-b-[1px] border-b-border-mid"
        />
        <ContentItemGroup
          v-for="(group, index) in contentGroups"
          :key="index"
          :group="group"
          class="border-b-[1px] border-b-border-mid"
        />
        <div class="px-1.5 py-1">
          <button
            class="flex w-full items-center gap-2 rounded-md p-2.5 transition-colors hover:bg-border-mid"
          >
            <Icon name="logout" class="h-4 w-4 text-fill-extra" />
            <span class="text-sm text-text-secondary">Выйти</span>
          </button>
        </div>
      </div>
    </template>
  </Overlay>
</template>

<style scoped>
.profileOverlay {
  @apply rounded-lg border-[1px] border-foreground !bg-foreground shadow-md;

  box-shadow:
    0px 4px 6px -2px rgba(var(--text-primary), 0.03),
    0px 12px 16px -4px rgba(var(--text-primary), 0.08);
}
</style>
