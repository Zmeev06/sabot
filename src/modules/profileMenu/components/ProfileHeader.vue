<script setup lang="ts">
import type { IHeaderInterface } from '../constants/header';
import { Avatar } from '../../../ui/avatar';

defineProps<IHeaderInterface>();
</script>

<template>
  <div class="flex items-center gap-3 py-3 px-4">
    <Avatar indicator="online" :image="avatarUrl" size="sm" />
    <div class="flex flex-col justify-center">
      <div class="text-fill-extra text-sm font-semibold">
        {{ `${firstName} ${secondName}` }}
      </div>
      <RouterLink
        class="text-[12px]/[18px] text-fill-strong"
        :to="`mailto:${email}`"
        >{{ email }}</RouterLink
      >
    </div>
  </div>
</template>
