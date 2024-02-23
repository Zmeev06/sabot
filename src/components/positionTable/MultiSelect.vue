<script setup lang="ts">
	import { computed } from 'vue';
	import MultiSelect from 'primevue/multiselect';
	import { Icon } from '@//ui/icon';

	import { ref } from 'vue';

	defineProps<{
		iconName: string;
		header: string;
	}>();

	const selectedCities = ref();
	const cities = ref([
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	]);

	const multiSelectStyle = computed(() => ({
		input: 'ptMultiDropdownInput',
		trigger: 'ptMultiDropdownTrigger',
		wrapper: ['!max-h-none'],
		header: ['hidden'],
		panel: 'ptMultiDropdownPanel',
		item: 'ptMultiDropdownItem',
		option: 'ptMultiDropdownOption',
		itemCheckbox: {
			root: 'ptCheckboxRoot',
			box: 'ptBox',
			input: ['peer', 'ptCheckboxInput'],
			icon: 'ptCheckboxIcon',
		},
		transition: {
			enterFromClass: 'opacity-0 scale-y-[0.8]',
			enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
			leaveActiveClass: 'transition-opacity duration-100 ease-linear',
			leaveToClass: 'opacity-0',
		},
	}));
</script>

<template>
	<MultiSelect
		:pt="multiSelectStyle"
		v-model="selectedCities"
		:options="cities"
		optionLabel="name"
		placeholder="Select Cities"
		class="w-full md:w-20rem">
		<template #value>
			<button>
				<Icon :name="iconName" v-bind="$attrs" />
			</button>
		</template>
		<template #header>
			<div class="px-4 py-2">
				<h2 class="font-secondary text-text-primary text-lg/[22px] font-medium">{{ header }}</h2>
			</div>
		</template>
		<template #dropdownicon>
			<div></div>
		</template>
		<template #itemcheckboxicon="{ checked }">
			<Icon name="checkbox" class="w-3 h-3 text-base-white" :modelValue="checked" />
		</template>
	</MultiSelect>
</template>

<style>
	.ptMultiDropdownInput {
		@apply text-base text-text-secondary whitespace-nowrap line-clamp-1 focus:outline-none focus:text-text-primary focus:font-medium;
	}

	.ptMultiDropdownPanel {
		@apply rounded-lg border-[1px] overflow-auto border-border-mid bg-base-white shadow-md shadow-text-primary/[3] py-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border-mid [&::-webkit-scrollbar-thumb]:rounded-lg !min-w-[200px];
	}

	.ptMultiDropdownItem {
		@apply my-0.5 mx-1.5 p-2.5 flex gap-2 items-center cursor-pointer transition-colors rounded-md hover:bg-grey-light aria-[selected="true"]:bg-grey-light data-[p-focused="true"]:bg-grey-light;
	}

	.ptMultiDropdownTrigger svg {
		@apply h-5 w-5 text-text-tertiary;
	}

	.ptDropdownIndicator {
		@apply w-5 h-5 text-accent-normal;
	}

	.ptMultiDropdownOption {
		@apply text-sm text-text-secondary;
	}

	.pt-fade-in-enter-active,
	.pt-fade-in-leave-active {
		transition: opacity 0.2s ease;
	}

	.pt-fade-in-enter-from,
	.pt-fade-in-leave-to {
		opacity: 0;
	}
</style>
