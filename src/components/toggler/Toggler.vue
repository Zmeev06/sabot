<script setup lang="ts">
import { computed, ref } from 'vue';

const isShow = ref(true);
const state = computed(() => (isShow.value ? 'opened' : 'hidden'));

function toggle() {
  isShow.value = !isShow.value;
}
</script>

<template>
  <div>
    <slot :toggle="toggle" :state="state" />
    <div
      class="max-h-[999px] overflow-hidden transition-all"
      :style="{ maxHeight: isShow ? '' : '0' }"
    >
      <slot name="content" :state="state" />
    </div>
  </div>
</template>
