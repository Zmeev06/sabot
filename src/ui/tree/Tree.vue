<script setup lang="ts">
	import { ref } from 'vue';
	import Tree from 'primevue/tree';
	import { TreeNode } from 'primevue/treenode';

	import { Icon } from '../icon';

	const modelValue = defineModel();

	defineProps<{
		value: TreeNode[];
	}>();

	const treeStyle = ref({
		root: 'ptTreeRoot',
		container: 'ptTreeContainer',
		subgroup: 'ptTreeSubgroup',
		content: ({ context }: any) => ({
			class: [
				'ptContent',
				{
					'mb-2': context.expanded,
				},
			],
		}),
		toggler: ({ context }: any) => ({
			class: [{ 'rotate-90': context.expanded, invisible: context.leaf }],
		}),
		nodeCheckbox: {
			root: 'ptCheckboxRoot',
			box: 'ptBox',
			input: ['peer', 'ptCheckboxInput'],
			icon: 'ptCheckboxIcon',
		},
	});
</script>

<template>
	<Tree :pt="treeStyle" :value="value" v-model:selectionKeys="modelValue">
		<template #checkboxicon>
			<Icon name="checkbox" class="w-3 h-3 text-base-white" />
		</template>
		<template #togglericon>
			<Icon name="chevron-right" class="w-5 h-5 text-fill-light" />
		</template>
	</Tree>
</template>

<style>
	.ptTreeRoot {
		@apply text-text-secondary text-sm cursor-pointer;
	}

	.ptTreeContainer {
		@apply space-y-2;
	}

	ul.ptTreeSubgroup {
		@apply ml-[25px] space-y-2;
	}

	.ptContent {
		@apply flex items-center gap-1;
	}

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
