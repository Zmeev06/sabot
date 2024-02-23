<script setup lang="ts">
defineProps<{
  date: string;
  value: string;
}>();
</script>

<template>
  <div class="flex w-full flex-col items-start gap-1 p-2">
    <h2 class="whitespace-nowrap text-sm/[14px] text-text-primary">
      {{ date }}
    </h2>
    <div class="whitespace-nowrap text-[12px] leading-3 text-fill-mid">
      {{ value }}
    </div>
  </div>
</template>
