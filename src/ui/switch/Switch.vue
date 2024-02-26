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
  @apply relative inline-block h-6 w-11 p-0.5;
}

.ptSwitchSlider {
  @apply absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-grey-mid p-0.5 transition-colors before:block before:h-5 before:w-5 before:rounded-full before:bg-foreground before:transition-transform peer-checked:bg-accent-normal peer-checked:before:translate-x-5 peer-checked:before:transform;
}

.ptSwitchSlider::before {
  filter: drop-shadow(0px 1px 2px rgba(var(--text-primary), 0.06))
    drop-shadow(0px 1px 3px rgba(var(--text-primary), 0.1));
}

.ptSwitchInput {
  @apply absolute left-0 top-0 z-10 m-0 h-full w-full cursor-pointer appearance-none rounded-full p-0 opacity-0 outline-none;
}
</style>
