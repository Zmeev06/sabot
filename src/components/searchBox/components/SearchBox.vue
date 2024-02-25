<script setup lang="ts">
import { ref } from 'vue';
import { InputField } from '@//ui/inputField';
import { Dropdown } from '../../../ui/dropdown';

const modelValue = defineModel<any>();
const root = ref<InstanceType<typeof Dropdown>>();
const input = ref<InstanceType<typeof InputField>>();

const searchBoxStyle = ref({
  root: 'ptSearchBox',
  input: 'ptSearchBoxInput'
});

defineProps<{
  options: any[];
  optionLabel: string;
  placeholder?: string;
}>();

async function open(e: Event) {
  if (e.target !== input.value?.$el) {
    input.value?.$el.click();
  }
}
</script>

<template>
  <Dropdown
    :pt="searchBoxStyle"
    v-model="modelValue"
    :options="options"
    :optionLabel="optionLabel"
    :placeholder="placeholder ?? ''"
    ref="root"
  >
    <template #value>
      <InputField
        v-model="modelValue"
        :placeholder="placeholder"
        v-bind="$attrs"
        @focus="open"
        ref="input"
      />
    </template>
    <template #dropdownicon>
      <div></div>
    </template>
  </Dropdown>
</template>

<style>
.ptSearchBox {
  @apply border-none;
}

.ptSearchBoxInput {
  @apply whitespace-nowrap text-base text-text-secondary focus:font-medium focus:text-text-primary focus:outline-none;
}
</style>
