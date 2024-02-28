<script setup lang="ts">
import { computed } from 'vue';
import MultiSelect from 'primevue/multiselect';
import { Icon } from '@//ui/icon';

import { ref } from 'vue';

defineProps<{
  iconName: string;
  header: string;
}>();

const selectedCities = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

const multiSelectStyle = computed(() => ({
  input: 'ptMultiDropdownInput',
  trigger: 'ptMultiDropdownTrigger',
  wrapper: ['!max-h-none'],
  header: ['hidden'],
  panel: 'ptMultiDropdownPanel',
  item: 'ptMultiDropdownItem',
  option: 'ptMultiDropdownOption',
  itemCheckbox: {
    root: 'ptCheckboxRoot',
    box: 'ptBox',
    input: ['peer', 'ptCheckboxInput'],
    icon: 'ptCheckboxIcon'
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0'
  }
}));
</script>

<template>
  <MultiSelect
    :pt="multiSelectStyle"
    v-model="selectedCities"
    :options="cities"
    optionLabel="name"
    placeholder="Select Cities"
    class="md:w-20rem w-full"
  >
    <template #value>
      <button>
        <Icon :name="iconName" v-bind="$attrs" />
      </button>
    </template>
    <template #header>
      <div class="px-4 py-2">
        <h2 class="font-secondary text-lg/[22px] font-medium text-text-primary">
          {{ header }}
        </h2>
      </div>
    </template>
    <template #dropdownicon>
      <div></div>
    </template>
    <template #itemcheckboxicon="{ checked }">
      <Icon
        name="checkbox"
        class="h-3 w-3 text-foreground"
        :modelValue="checked"
      />
    </template>
  </MultiSelect>
</template>

<style>
.ptMultiDropdownInput {
  @apply line-clamp-1 whitespace-nowrap text-base text-text-secondary focus:font-medium focus:text-text-primary focus:outline-none;
}

.ptMultiDropdownPanel {
  @apply !min-w-[200px] overflow-auto rounded-lg border-[1px] border-border-mid bg-foreground py-1 shadow-md shadow-text-primary/[3] [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-border-mid [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2;
}

.ptMultiDropdownItem {
  @apply mx-1.5 my-0.5 flex cursor-pointer items-center gap-2 rounded-md p-2.5 transition-colors hover:bg-grey-light aria-[selected="true"]:bg-grey-light data-[p-focused="true"]:bg-grey-light;
}

.ptMultiDropdownTrigger svg {
  @apply h-5 w-5 text-text-tertiary;
}

.ptDropdownIndicator {
  @apply h-5 w-5 text-accent-normal;
}

.ptMultiDropdownOption {
  @apply text-sm text-text-secondary;
}

.pt-fade-in-enter-active,
.pt-fade-in-leave-active {
  transition: opacity 0.2s ease;
}

.pt-fade-in-enter-from,
.pt-fade-in-leave-to {
  opacity: 0;
}
</style>
