<script setup lang="ts">
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import { Icon } from '../../ui/icon';

const modelValue = defineModel();

const checkboxStyle = ref({
  root: 'ptCheckboxRoot',
  box: 'ptBox',
  input: ['peer', 'ptCheckboxInput'],
  icon: 'ptCheckboxIcon'
});
</script>

<template>
  <Checkbox :pt="checkboxStyle" v-model="modelValue" :binary="true">
    <Icon name="checkbox" class="ptCheckboxIcon" />
  </Checkbox>
</template>

<style>
.ptCheckboxRoot {
  @apply relative inline-flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded-sm;
}

.ptBox {
  @apply flex h-full w-full items-center justify-center rounded-sm border-[1px] border-border-strong bg-base-white p-[1px] transition-all hover:border-accent-normal peer-checked:border-accent-normal peer-checked:bg-accent-normal peer-hover:border-accent-normal;
}

.ptCheckboxInput {
  @apply absolute left-0 top-0 z-10 m-0 h-full w-full cursor-pointer appearance-none rounded-md border-2 border-border-mid p-0 opacity-0 outline-none;
}

.ptCheckboxIcon {
  @apply h-full w-full text-base-white transition-all;
}
</style>
