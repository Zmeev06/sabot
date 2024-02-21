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
		error: false,
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
					props.size === 'sm' && (typeof props.iconPos !== 'undefined' || typeof props.label !== 'undefined'),
				ptButtonSizeMd:
					props.size === 'md' && (typeof props.iconPos !== 'undefined' || typeof props.label !== 'undefined'),
				ptButtonSizeLg:
					props.size === 'lg' && (typeof props.iconPos !== 'undefined' || typeof props.label !== 'undefined'),
				ptButtonSizeXl:
					props.size === 'xl' && (typeof props.iconPos !== 'undefined' || typeof props.label !== 'undefined'),
				ptButtonSize2Xl:
					props.size === '2xl' &&
					(typeof props.iconPos !== 'undefined' || typeof props.label !== 'undefined'),

				ptButtonIconOnly: typeof props.iconPos === 'undefined' && typeof props.label === 'undefined',

				'flex-row-reverse': props.iconPos === 'left',
			},
		],
	});
</script>

<template>
	<Button :pt="buttonStyle" class="group" :label="label" :icon="icon" :iconPos="iconPos">
		<template #default v-if="label?.length !== 0">
			{{ label }}
			<Icon v-if="icon" :name="icon" class="ptButtonIcon" />
		</template>
	</Button>
</template>

<style>
	.ptButtonDefault {
		@apply inline-flex items-center justify-center rounded-lg whitespace-nowrap font-semibold transition-all disabled:pointer-events-none;
	}

	.ptButtonIconOnly {
		@apply p-3 rounded-md;
	}

	.ptButtonPrimary {
		@apply bg-accent-normal text-base-white outline -outline-offset-1 outline-1 outline-accent-normal hover:bg-accent-dark hover:outline-accent-dark disabled:bg-accent-light disabled:border-accent-light shadow-sm shadow-text-primary/5 focus:shadow-none focus:ring-2 focus:ring-accent-light;
	}

	.ptButtonSecondary {
		@apply outline outline-1 -outline-offset-1 bg-base-white outline-border-strong text-text-secondary shadow-sm shadow-text-primary/5 hover:text-text-primary hover:bg-bg-secondary focus:ring-4 focus:ring-accent-light disabled:text-border-strong disabled:outline-border-mid;
	}

	.ptButtonTertiary {
		@apply bg-base-white text-fill-strong hover:text-text-secondary hover:bg-bg-secondary focus:bg-bg-secondary disabled:bg-bg-secondary disabled:text-border-strong;
	}

	.ptButtonPrimaryError {
		@apply bg-error-600 text-base-white -outline-offset-1 outline outline-1 outline-error-600 hover:bg-error-700 hover:outline-error-700 disabled:bg-error-200 disabled:outline-error-200 shadow-sm shadow-text-primary/5 focus:ring-4 focus:ring-error-100;
	}

	.ptButtonSecondaryError {
		@apply outline outline-1 bg-base-white outline-error-300 text-error-700 shadow-sm shadow-text-primary/5 hover:text-error-800 hover:bg-error-50 focus:ring-4 focus:ring-error-100 disabled:text-error-300 disabled:outline-error-200;
	}

	.ptButtonSizeSm {
		@apply py-2 px-[14px] gap-2 text-sm;
	}

	.ptButtonSizeMd {
		@apply py-[10px] px-[16px] gap-2 text-sm;
	}

	.ptButtonSizeLg {
		@apply py-[10px] px-[18px] gap-2 text-base;
	}

	.ptButtonSizeXl {
		@apply py-3 px-[20px] gap-2 text-base;
	}

	.ptButtonSize2Xl {
		@apply py-4 px-7 gap-3 text-lg;
	}

	.ptButtonIcon {
		@apply h-5 w-5;
	}
</style>
