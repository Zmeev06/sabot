<script setup lang="ts">
	import { ref } from 'vue';
	import Tag from 'primevue/tag';
	import { Icon } from '../icon';

	const props = defineProps<{
		value?: any;
		icon?: string;
		active?: boolean;
	}>();

	const tagStyle = ref({
		root: [
			'group',
			'ptTagRoot',
			{
				'bg-grey-mid': props.active,
				ptTagIconOnly: typeof props.value === 'undefined',
			},
		],

		value: [
			'ptTagValue',
			{
				'text-text-primary': props.active,
			},
		],
	});
</script>

<template>
	<div>
		<Tag :pt="tagStyle" :value="value">
			<template #icon v-if="icon">
				<Icon
					:name="icon"
					class="w-5 h-5"
					:class="{ 'text-fill-strong': active, 'text-text-tertiary': !active }" />
			</template>
		</Tag>
	</div>
</template>

<style>
	.ptTagRoot {
		@apply inline-flex items-center gap-3 transition-colors hover:bg-grey-mid px-3 py-2 rounded-md whitespace-nowrap;
	}

	.ptTagIconOnly {
		@apply !p-[10px];
	}

	.ptTagValue {
		@apply text-base font-medium text-text-tertiary transition-colors group-hover:text-text-primary;
	}
</style>
