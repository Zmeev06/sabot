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
              class="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-2.5 py-3 transition-colors hover:bg-border-mid"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="flex items-center gap-2">
                <Icon
                  :name="item.icon"
                  class="h-4 w-4"
                  :class="[
                    { 'text-text-secondary': !item.iconColor },
                    item.iconColor
                  ]"
                />
                <span class="whitespace-nowrap text-sm text-text-primary">{{
                  item.label
                }}</span>
              </div>
              <span
                class="whitespace-nowrap text-[12px] leading-[18px] text-text-tertiary"
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
        class="h-3 w-3 text-foreground"
        @contextmenu="onContextMenuPopup"
      />
    </template>
    <template #togglericon>
      <Icon
        name="chevron-right"
        class="h-5 w-5 text-fill-light"
        @contextmenu="onContextMenuPopup"
      />
    </template>
  </Tree>
</template>

<style>
.ptTreeRoot {
  @apply cursor-pointer text-sm text-text-secondary;
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
  @apply relative inline-flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded-sm;
}

.ptBox {
  @apply flex h-full w-full items-center justify-center rounded-sm border-[1px] border-border-strong bg-foreground p-[1px] transition-all hover:border-accent-normal peer-checked:border-accent-normal peer-checked:bg-accent-normal peer-hover:border-accent-normal;
}

.ptCheckboxInput {
  @apply absolute left-0 top-0 z-10 m-0 h-full w-full cursor-pointer appearance-none rounded-md border-2 border-border-mid p-0 opacity-0 outline-none;
}

.ptCheckboxIcon {
  @apply h-full w-full text-foreground transition-all;
}

.ptContextMenuRoot {
  @apply rounded-lg border-[1px] border-border-mid bg-foreground;

  box-shadow:
    0px 4px 6px -2px rgba(var(--text-primary), 0.03),
    0px 12px 16px -4px rgba(var(--text-primary), 0.08);
}

.ptContextMenuMenu {
  @apply px-1.5 py-1;
}
</style>
