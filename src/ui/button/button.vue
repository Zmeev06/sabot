<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import { Icon } from '../icon';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  error?: boolean;
  label?: string;
  icon?: string;
  iconPos?: 'right' | 'left' | 'top' | 'bottom' | undefined;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  error: false
});

const buttonStyle = ref({
  root: [
    'ptButtonDefault',
    {
      ptButtonPrimary: props.variant === 'primary' && !props.error,
      ptButtonSecondary: props.variant === 'secondary' && !props.error,
      ptButtonTertiary: props.variant === 'tertiary' && !props.error,

      ptButtonPrimaryError: props.variant === 'primary' && props.error,
      ptButtonSecondaryError: props.variant === 'secondary' && props.error,

      ptButtonSizeSm:
        props.size === 'sm' &&
        (typeof props.iconPos !== 'undefined' ||
          typeof props.label !== 'undefined'),
      ptButtonSizeMd:
        props.size === 'md' &&
        (typeof props.iconPos !== 'undefined' ||
          typeof props.label !== 'undefined'),
      ptButtonSizeLg:
        props.size === 'lg' &&
        (typeof props.iconPos !== 'undefined' ||
          typeof props.label !== 'undefined'),
      ptButtonSizeXl:
        props.size === 'xl' &&
        (typeof props.iconPos !== 'undefined' ||
          typeof props.label !== 'undefined'),
      ptButtonSize2Xl:
        props.size === '2xl' &&
        (typeof props.iconPos !== 'undefined' ||
          typeof props.label !== 'undefined'),

      ptButtonIconOnly:
        typeof props.iconPos === 'undefined' &&
        typeof props.label === 'undefined',

      'flex-row-reverse': props.iconPos === 'left'
    }
  ]
});
</script>

<template>
  <Button
    :pt="buttonStyle"
    class="group"
    :label="label"
    :icon="icon"
    :iconPos="iconPos"
  >
    <template #default v-if="label?.length !== 0">
      {{ label }}
      <Icon v-if="icon" :name="icon" class="ptButtonIcon" />
    </template>
  </Button>
</template>

<style>
.ptButtonDefault {
  @apply inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all disabled:pointer-events-none;
}

.ptButtonIconOnly {
  @apply rounded-md p-3;
}

.ptButtonPrimary {
  @apply bg-accent-normal text-foreground shadow-sm shadow-text-primary/5 outline outline-1 -outline-offset-1 outline-accent-normal hover:bg-accent-dark hover:outline-accent-dark focus:shadow-none focus:ring-2 focus:ring-accent-light disabled:border-accent-light disabled:bg-accent-light;
}

.ptButtonSecondary {
  @apply bg-foreground text-text-secondary shadow-sm shadow-text-primary/5 outline outline-1 -outline-offset-1 outline-border-strong hover:bg-bg-secondary hover:text-text-primary focus:ring-4 focus:ring-accent-light disabled:text-border-strong disabled:outline-border-mid;
}

.ptButtonTertiary {
  @apply bg-foreground text-fill-strong hover:bg-bg-secondary hover:text-text-secondary focus:bg-bg-secondary disabled:bg-bg-secondary disabled:text-border-strong;
}

.ptButtonPrimaryError {
  @apply bg-error-600 text-foreground shadow-sm shadow-text-primary/5 outline outline-1 -outline-offset-1 outline-error-600 hover:bg-error-700 hover:outline-error-700 focus:ring-4 focus:ring-error-100 disabled:bg-error-200 disabled:outline-error-200;
}

.ptButtonSecondaryError {
  @apply bg-foreground text-error-700 shadow-sm shadow-text-primary/5 outline outline-1 -outline-offset-1 outline-error-300 hover:bg-error-50 hover:text-error-800 focus:ring-4 focus:ring-error-100 disabled:text-error-300 disabled:outline-error-200;
}

.ptButtonSizeSm {
  @apply gap-2 px-[14px] py-2 text-sm;
}

.ptButtonSizeMd {
  @apply gap-2 px-[16px] py-[10px] text-sm;
}

.ptButtonSizeLg {
  @apply gap-2 px-[18px] py-[10px] text-base;
}

.ptButtonSizeXl {
  @apply gap-2 px-[20px] py-3 text-base;
}

.ptButtonSize2Xl {
  @apply gap-3 px-7 py-4 text-lg;
}

.ptButtonIcon {
  @apply h-5 w-5 flex-shrink-0;
}
</style>
