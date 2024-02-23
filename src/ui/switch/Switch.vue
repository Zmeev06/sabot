<script setup lang="ts">
import { ref } from 'vue';
import InputSwitch from 'primevue/inputswitch';

const modelValue = defineModel<boolean>();

const switchStyle = ref({
  root: 'ptSwitchRoot',
  slider: ['ptSwitchSlider'],
  input: ['ptSwitchInput', 'peer']
});
</script>

<template>
  <InputSwitch :pt="switchStyle" v-model="modelValue" />
</template>

<style>
.ptSwitchRoot {
  @apply inline-block relative w-11 h-6 p-0.5;
}

.ptSwitchSlider {
  @apply transition-colors absolute p-0.5 rounded-xl top-0 left-0 right-0 bottom-0 bg-grey-mid peer-checked:bg-accent-normal peer-checked:before:transform peer-checked:before:translate-x-5 before:rounded-full before:bg-base-white before:w-5 before:h-5 before:block before:transition-transform;
}

.ptSwitchSlider::before {
  filter: drop-shadow(0px 1px 2px rgba(var(--text-primary), 0.06))
    drop-shadow(0px 1px 3px rgba(var(--text-primary), 0.1));
}

.ptSwitchInput {
  @apply w-full h-full absolute top-0 left-0 z-10 p-0 m-0 opacity-0 rounded-full outline-none appearance-none cursor-pointer;
}
</style>
