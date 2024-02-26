<script setup lang="ts">
import { ref } from 'vue';

import { Header } from '@components/header';
import { Navbar } from '@//modules/navbar';
import { PageTabs } from '@//modules/pageLinkTabs';

import { SearchBox } from '@//components/searchBox';
import { ColorModeToggler } from '@//modules/colorModeToggler';
import { ReadMessages } from '@//modules/readMessage';
import { Notifications } from '@//modules/notifications';
import { Avatar } from '@//ui/avatar';
import { ProfileMenu } from '@//modules/profileMenu';

const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
</script>

<template>
  <div
    class="my-3 h-full w-full rounded-l-[32px] bg-foreground px-8 pb-12 pt-6 text-text-primary"
  >
    <Header
      class="relative -mx-8 mb-6 px-8 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-border-mid"
    >
      <template #navbar>
        <Navbar />
      </template>
      <template #actions>
        <div class="flex items-center gap-4">
          <SearchBox
            class="w-[220px] 2xl:w-[240px] 3xl:w-[280px]"
            v-model="selectedCity"
            :options="cities"
            placeholder="Поиск по странице"
            optionLabel="name"
          />
          <div class="flex items-center gap-1">
            <ColorModeToggler />
            <ReadMessages />
            <Notifications :notifications="28" />
          </div>
          <ProfileMenu>
            <Avatar image="../assets/media/avatar.jpg" />
          </ProfileMenu>
        </div>
      </template>
    </Header>
    <div>
      <PageTabs class="mb-4 xl:mb-6" />
      <slot />
    </div>
  </div>
</template>
