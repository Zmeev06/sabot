<script setup lang="ts">
	import { ref } from 'vue';
	import Checkbox from 'primevue/checkbox';
	import { Icon } from '../../ui/icon';

	const modelValue = defineModel();

	const checkboxStyle = ref({
		root: 'ptCheckboxRoot',
		box: 'ptBox',
		input: ['peer', 'ptCheckboxInput'],
		icon: 'ptCheckboxIcon',
	});
</script>

<template>
	<Checkbox :pt="checkboxStyle" v-model="modelValue" :binary="true">
		<Icon name="checkbox" class="ptCheckboxIcon" />
	</Checkbox>
</template>

<style>
	.ptCheckboxRoot {
		@apply relative inline-flex justify-center items-center w-4 h-4 rounded-sm cursor-pointer select-none;
	}

	.ptBox {
		@apply flex items-center justify-center w-full h-full rounded-sm p-[1px] border-[1px] border-border-strong transition-all hover:border-accent-normal peer-checked:bg-accent-normal bg-base-white peer-checked:border-accent-normal peer-hover:border-accent-normal;
	}

	.ptCheckboxInput {
		@apply w-full h-full absolute top-0 left-0 z-10 p-0 m-0 opacity-0 rounded-md outline-none border-2 border-border-mid appearance-none cursor-pointer;
	}

	.ptCheckboxIcon {
		@apply text-base-white w-full h-full transition-all;
	}
</style>
