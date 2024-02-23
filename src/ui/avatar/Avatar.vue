<script setup lang="ts">
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import AvatarIndicator from './AvatarIndicator.vue';

type IndicatorType = 'online' | 'offline';

const props = withDefaults(
  defineProps<{
    indicator?: IndicatorType;
    image: string;
    size?: 'sm' | 'md' | 'lg';
    shape?: 'square' | 'circle';
  }>(),
  {
    size: 'sm',
    shape: 'circle'
  }
);

defineOptions({
  inheritAttrs: false
});

const avatarStyle = ref({
  root: [
    'ptAvatarRoot',
    {
      'rounded-full': props.shape === 'circle',
      ptAvatarSm: props.size === 'sm',
      ptAvatarMd: props.size === 'md',
      ptAvatarLg: props.size === 'lg'
    }
  ],
  image: 'ptAvatarImage'
});
</script>

<template>
  <div class="relative inline-flex justify-center">
    <AvatarIndicator v-if="indicator" />
    <Avatar :pt="avatarStyle" v-bind="$attrs" :image="image" :shape="shape" />
  </div>
</template>

<style>
.ptAvatarRoot {
  @apply inline-flex justify-center items-center;
}

.ptAvatarSm {
  @apply h-10 w-10;
}

.ptAvatarMd {
  @apply h-16 w-16;
}

.ptAvatarLg {
  @apply h-24 w-24;
}

.ptAvatarImage {
  @apply w-full h-full;
}
</style>
