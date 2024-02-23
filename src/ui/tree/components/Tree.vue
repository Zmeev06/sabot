<script setup lang="ts">
import { ref } from 'vue';
import Tree from 'primevue/tree';
import { TreeNode } from 'primevue/treenode';
import ContextMenu from 'primevue/contextmenu';
import { menuContextItems } from '../constants/contextMenu';

import { Icon } from '@//ui/icon';

const modelValue = defineModel();
const menu = ref();

defineProps<{
  value: TreeNode[];
}>();

const treeStyle = ref({
  root: 'ptTreeRoot',
  container: 'ptTreeContainer',
  subgroup: 'ptTreeSubgroup',
  content: ({ context }: any) => ({
    class: [
      'ptContent',
      {
        'mb-2': context.expanded
      }
    ]
  }),
  toggler: ({ context }: any) => ({
    class: [{ 'rotate-90': context.expanded, invisible: context.leaf }]
  }),
  nodeCheckbox: {
    root: 'ptCheckboxRoot',
    box: 'ptBox',
    input: ['peer', 'ptCheckboxInput'],
    icon: 'ptCheckboxIcon'
  }
});

const contextMenuStyle = ref({
  root: 'ptContextMenuRoot',
  menu: 'ptContextMenuMenu',
  transition: {
    enterFromClass: 'opacity-0',
    enterActiveClass: 'transition-opacity duration-250'
  }
});

function onContextMenuPopup(event: Event) {
  menu.value.show(event);
}
</script>

<template>
  <Tree :pt="treeStyle" :value="value" v-model:selectionKeys="modelValue">
    <template #default="{ node }">
      <div>
        <div @contextmenu="onContextMenuPopup">{{ node.label }}</div>
        <ContextMenu
          :pt="contextMenuStyle"
          ref="menu"
          :model="menuContextItems"
        >
          <template #item="{ item }">
            <div
              class="flex items-center py-3 px-2.5 justify-between gap-3 transition-colors hover:bg-border-mid cursor-pointer rounded-lg"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="flex items-center gap-2">
                <Icon
                  :name="item.icon"
                  class="w-4 h-4"
                  :class="[
                    { 'text-text-secondary': !item.iconColor },
                    item.iconColor
                  ]"
                />
                <span class="text-text-primary text-sm whitespace-nowrap">{{
                  item.label
                }}</span>
              </div>
              <span
                class="text-text-tertiary text-[12px] leading-[18px] whitespace-nowrap"
                >{{ item.hotkey }}</span
              >
            </div>
          </template>
        </ContextMenu>
      </div>
    </template>
    <template #checkboxicon>
      <Icon
        name="checkbox"
        class="w-3 h-3 text-base-white"
        @contextmenu="onContextMenuPopup"
      />
    </template>
    <template #togglericon>
      <Icon
        name="chevron-right"
        class="w-5 h-5 text-fill-light"
        @contextmenu="onContextMenuPopup"
      />
    </template>
  </Tree>
</template>

<style>
.ptTreeRoot {
  @apply text-text-secondary text-sm cursor-pointer;
}

.ptTreeContainer {
  @apply space-y-2;
}

ul.ptTreeSubgroup {
  @apply ml-[25px] space-y-2;
}

.ptContent {
  @apply flex items-center gap-1;
}

.ptCheckboxRoot {
  @apply relative inline-flex justify-center items-center w-4 h-4 rounded-sm cursor-pointer select-none;
}

.ptBox {
  @apply flex items-center justify-center w-full h-full rounded-sm p-[1px] border-[1px] border-border-strong transition-all hover:border-accent-normal peer-checked:bg-accent-normal bg-base-white peer-checked:border-accent-normal peer-hover:border-accent-normal;
}

.ptCheckboxInput {
  @apply w-full h-full absolute top-0 left-0 z-10 p-0 m-0 opacity-0 rounded-md outline-none border-2 border-border-mid appearance-none cursor-pointer;
}

.ptCheckboxIcon {
  @apply text-base-white w-full h-full transition-all;
}

.ptContextMenuRoot {
  @apply rounded-lg border-[1px] border-border-mid bg-base-white;

  box-shadow:
    0px 4px 6px -2px rgba(var(--text-primary), 0.03),
    0px 12px 16px -4px rgba(var(--text-primary), 0.08);
}

.ptContextMenuMenu {
  @apply py-1 px-1.5;
}
</style>
