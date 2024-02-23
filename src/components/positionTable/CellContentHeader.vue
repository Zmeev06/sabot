<script setup lang="ts">
defineProps<{
  date: string;
  value: string;
}>();
</script>

<template>
  <div class="flex flex-col w-full gap-1 items-start p-2">
    <h2 class="text-text-primary text-sm/[14px] whitespace-nowrap">
      {{ date }}
    </h2>
    <div class="text-fill-mid text-[12px] leading-3 whitespace-nowrap">
      {{ value }}
    </div>
  </div>
</template>
