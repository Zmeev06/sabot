<script setup lang="ts">
import { ref } from 'vue';
import Badge from 'primevue/badge';

interface BadgeProps {
  pt?: any;
  variant?: 'primary' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md'
});

const badgeStyleObject = {
  root: [
    {
      ptBadgePrimary: props.variant === 'primary',
      ptBadgeError: props.variant === 'error'
    },
    {
      ptBadgeSm: props.size === 'sm',
      ptBadgeMd: props.size === 'md',
      ptBadgeLg: props.size === 'lg'
    }
  ]
};

const badgeStyle =
  typeof props.pt === 'undefined'
    ? ref(badgeStyleObject)
    : ref(Object.assign(badgeStyleObject, props.pt));
</script>

<template>
  <Badge :pt="badgeStyle">
    <slot />
  </Badge>
</template>

<style>
.ptBadgePrimary {
  @apply bg-grey-50 font-medium text-grey-700 outline outline-1 -outline-offset-1 outline-grey-200 dark:bg-grey-lightmode-50 dark:text-grey-lightmode-700 dark:outline-grey-lightmode-200;
}

.ptBadgePrimaryDefault {
  @apply bg-grey-50 font-medium text-grey-700 outline outline-1 -outline-offset-1 outline-grey-200;
}

.ptBadgeError {
  @apply bg-error-500 text-base-white;
}

.ptBadgeSm {
  @apply rounded-md px-0.5 py-1 text-[0.625rem] leading-[0.625];
}
.ptBadgeMd {
  @apply rounded-2xl px-2 py-0.5 text-xs;
}
.ptBadgeLg {
  @apply rounded-2xl px-3 py-1 text-sm;
}
</style>
