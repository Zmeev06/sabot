<script setup lang="ts">
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';

const modelValue = defineModel();

const radioButtonStyle = ref({
  root: 'ptRadioButtonRoot',
  box: 'ptRadioButtonBox',
  input: ['peer', 'ptRadioButtonInput'],
  icon: ({ props }: { props: { value: any } }) => ({
    class: [
      'ptRadioButtonIcon',
      {
        ptRadioButtonIconChecked: props.value === modelValue.value
      }
    ]
  })
});
</script>

<template>
  <RadioButton :pt="radioButtonStyle" v-model="modelValue" />
</template>

<style>
.ptRadioButtonRoot {
  @apply relative inline-flex h-5 w-5 cursor-pointer select-none;
}

.ptRadioButtonBox {
  @apply flex h-full w-full items-center justify-center rounded-full border-[1px] border-grey-heavy transition-all peer-checked:border-accent-normal peer-checked:bg-cyan-50 peer-hover:border-accent-normal;
}

.ptRadioButtonInput {
  @apply absolute left-0 top-0 z-10 m-0 h-full w-full cursor-pointer appearance-none rounded-md border-2 border-accent-normal p-0 opacity-0 outline-none;
}

.ptRadioButtonIcon {
  @apply block h-2 w-2 rounded-full transition-colors;
}

.ptRadioButtonIconChecked {
  @apply bg-accent-normal;
}
</style>
