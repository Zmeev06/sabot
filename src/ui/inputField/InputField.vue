<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import { Icon } from '@//ui/icon';

import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { Nullable } from 'primevue/ts-helpers';

const modelValue = defineModel<Nullable<string>>();
const isFocused = ref(false);
const input = ref<InstanceType<typeof InputText>>();
const root = ref<InstanceType<typeof IconField>>();

withDefaults(
  defineProps<{
    icon?: string;
    iconPosition?: string;
    disabled?: boolean;
    placeholder?: string;
  }>(),
  {
    icon: 'search',
    iconPosition: 'left'
  }
);

const emit = defineEmits<{
  focus: [e: Event];
}>();

onMounted(() => document.addEventListener('click', click));
onUnmounted(() => document.removeEventListener('click', click));

function click(e: Event) {
  if (
    // @ts-expect-error
    (e.target === root.value?.$el || root.value?.$el.contains(e.target)) &&
    !isFocused.value
  ) {
    focus(e);
    // @ts-expect-error
    input.value?.$el.focus();
  }
}

function focus(e: Event) {
  emit('focus', e);
  isFocused.value = true;
}

function blur() {
  isFocused.value = false;
}
</script>

<template>
  <IconField
    iconPosition="right"
    class="inline-flex w-full cursor-text items-center gap-2 rounded-lg bg-foreground px-3.5 py-1.5 shadow-sm shadow-text-primary/5 outline outline-1 -outline-offset-1 outline-border-strong transition-all hover:outline-accent-normal xl:px-3.5 xl:py-2.5"
    :class="{
      '!outline-accent-normal': isFocused && !disabled,
      'cursor-default bg-grey-light hover:outline-border-strong': disabled
    }"
    ref="root"
  >
    <InputIcon>
      <Icon
        :name="icon"
        class="h-5 w-5 flex-shrink-0 text-fill-mid transition-colors"
        :class="{ 'text-text-primary': isFocused }"
      />
    </InputIcon>
    <InputText
      class="appearance-none overflow-hidden border-none border-transparent bg-transparent text-base font-medium text-text-primary outline-none ring-0 ring-transparent placeholder:font-normal placeholder:text-text-tertiary disabled:text-fill-mid"
      data-input-field
      v-model="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @blur="blur"
      ref="input"
    />
  </IconField>
</template>
