<script setup lang="ts">
	import { ref } from 'vue';
	import RadioButton from 'primevue/radiobutton';

	const modelValue = defineModel();

	const radioButtonStyle = ref({
		root: 'ptRadioButtonRoot',
		box: 'ptRadioButtonBox',
		input: ['peer', 'ptRadioButtonInput'],
		icon: ({ props }: { props: { value: any } }) => ({
			class: [
				'ptRadioButtonIcon',
				{
					ptRadioButtonIconChecked: props.value === modelValue.value,
				},
			],
		}),
	});
</script>

<template>
	<RadioButton :pt="radioButtonStyle" v-model="modelValue" />
</template>

<style>
	.ptRadioButtonRoot {
		@apply relative inline-flex w-5 h-5 cursor-pointer select-none;
	}

	.ptRadioButtonBox {
		@apply flex items-center w-full h-full justify-center border-[1px] border-grey-heavy rounded-full transition-all peer-hover:border-accent-normal peer-checked:bg-cyan-50 peer-checked:border-accent-normal;
	}

	.ptRadioButtonInput {
		@apply w-full h-full absolute top-0 left-0 z-10 p-0 m-0 opacity-0 rounded-md outline-none border-2 border-accent-normal appearance-none cursor-pointer;
	}

	.ptRadioButtonIcon {
		@apply block rounded-full w-2 h-2 transition-colors;
	}

	.ptRadioButtonIconChecked {
		@apply bg-accent-normal;
	}
</style>
