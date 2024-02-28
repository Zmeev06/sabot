<script setup lang="ts">
import { ref } from 'vue';
import ScrollPanel from 'primevue/scrollpanel';

const scrollPanelStyle = ref({
  wrapper: {
    class: ['h-full w-full', 'z-[1]', 'overflow-hidden', 'relative float-left']
  },
  content: {
    class: [
      'h-full w-full p-0',
      'overflow-scroll scrollbar-none',
      'box-border',
      'relative',
      '[&::-webkit-scrollbar]:hidden'
    ]
  }
});
</script>

<template>
  <ScrollPanel :pt="scrollPanelStyle" class="sticky top-0 h-svh">
    <slot />
  </ScrollPanel>
</template>
