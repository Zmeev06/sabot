<script setup lang="ts">
	import { computed, ref, useSlots } from 'vue';
	import { isDropdownSlot } from '../model/slots';
	import Dropdown from 'primevue/dropdown';
	import { Icon } from '../../icon';

	const modelValue = defineModel();

	const props = defineProps<{
		pt?: any;
		options: any[];
		optionLabel: string;
		placeholder?: string;
	}>();

	const isShow = ref(false);

	const dropdownStyleObject = {
		root: ['ptDropdownRoot', { ptRootFocused: isShow }],
		input: 'ptDropdownInput',
		trigger: 'ptDropdownTrigger',
		wrapper: 'ptDropdownWrapper',
		item: 'ptDropdownItem',
		transition: {
			enterFromClass: 'opacity-0 scale-y-[0.8]',
			enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
			leaveActiveClass: 'transition-opacity duration-100 ease-linear',
			leaveToClass: 'opacity-0',
		},
	};

	const dropdownStyle =
		typeof props.pt === 'undefined' ? ref(dropdownStyleObject) : ref(Object.assign(dropdownStyleObject, props.pt));

	const $slots = useSlots();
	const dropDownSlots = computed(() => {
		return Object.keys($slots)
			.filter((name) => isDropdownSlot(name))
			.reduce((obj: Record<string, any>, key: string) => {
				obj[key] = $slots[key];
				return obj;
			}, {});
	});
</script>

<template>
	<Dropdown
		:pt="dropdownStyle"
		v-model="modelValue"
		:options="options"
		:optionLabel="optionLabel"
		:placeholder="placeholder"
		scrollHeight="410px"
		@before-show="isShow = true"
		@before-hide="isShow = false">
		<template #dropdownicon>
			<Icon name="chevron-down" />
		</template>
		<template #option="{ option, index }">
			{{ option[optionLabel] }}
			<Transition mode="out-in" name="pt-fade-in">
				<Icon v-if="modelValue === options[index]" name="checkbox" class="ptDropdownIndicator" />
			</Transition>
		</template>
		<template v-for="(_, slot) of dropDownSlots" #[slot]="scope">
			<slot :name="slot" v-bind="scope" />
		</template>
	</Dropdown>
</template>

<style>
	.ptDropdownRoot {
		@apply inline-flex justify-between bg-base-white transition-all items-center hover:outline-accent-normal outline rounded-lg outline-1 outline-border-strong shadow-sm shadow-text-primary/5 px-[14px] py-[10px] gap-2 cursor-pointer focus:outline-accent-normal;
	}

	.ptRootFocused {
		@apply outline-accent-normal;
	}

	.ptDropdownInput {
		@apply text-base text-text-secondary whitespace-nowrap line-clamp-1 focus:outline-none focus:text-text-primary focus:font-medium;
	}

	.ptDropdownWrapper {
		@apply rounded-lg border-[1px] overflow-auto border-border-mid bg-base-white shadow-md shadow-text-primary/[3] my-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border-mid [&::-webkit-scrollbar-thumb]:rounded-lg;
	}

	.ptDropdownItem {
		@apply my-0.5 mx-1.5 py-2.5 flex gap-3 items-center justify-between px-2 cursor-pointer transition-colors rounded-md hover:bg-grey-light aria-[selected="true"]:bg-grey-light data-[p-focused="true"]:bg-grey-light;
	}

	.ptDropdownTrigger svg {
		@apply h-5 w-5 text-text-tertiary;
	}

	.ptDropdownIndicator {
		@apply w-5 h-5 text-accent-normal;
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
