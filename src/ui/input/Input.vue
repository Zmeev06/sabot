<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';

const inputStyle = ref({
  root: 'ptInputRoot'
});
</script>

<template>
  <InputText :pt="inputStyle" />
</template>

<style>
.ptInputRoot {
  @apply appearance-none rounded-lg bg-foreground px-3.5 py-2.5 text-base font-medium text-text-primary shadow-sm shadow-text-primary/5 !outline !outline-1 -outline-offset-1 !outline-border-strong ring-0 ring-transparent transition-all placeholder:font-normal placeholder:text-text-tertiary hover:!outline-accent-normal focus:!outline-accent-normal;
}
</style>
