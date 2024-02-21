<script setup lang="ts">
import { ref, watch } from 'vue';
import { SearchBox } from '@components/searchBox';
import { Icon } from '@ui/icon';
import { Tree } from '@ui/tree';
import { getClusters } from '@services/analysis/getClustersService';
import { useCoreStore } from '../../../store/coreStore';
import { ICluster, INode } from '../../../intercaces/analytics/clusters';

const selectedCity = ref();
const cities = ref([
	{ name: 'New York', code: 'NY' },
	{ name: 'Rome', code: 'RM' },
	{ name: 'London', code: 'LDN' },
	{ name: 'Istanbul', code: 'IST' },
	{ name: 'Paris', code: 'PRS' },
]);

const nodes = ref<ICluster[]>()
const nodesTree = ref()

const storeCore = useCoreStore()
const getClustersData = async (parentId?: number) => {
	if (storeCore.core) {
		const { data, status } = await getClusters(+storeCore.core.id, parentId)
		if (status === 200) {
			nodes.value = data.data
			nodesTree.value = data.data.map((item: ICluster) => { return { key: item.id, label: item.name, leaf: item.children_count ? false : true, loading: false } })
		}
	}
}

const onNodeExpand = async (node: INode) => {
	if (!node.children) {
		node.loading = true;
		try {
			if (storeCore.core) {
				const { data, status } = await getClusters(storeCore.core?.id, node.key);
			if (status === 200) {
				node.loading = false
				const childrenNodes = data.data.map((item: ICluster) => {
					return {
						key: item.id,
						label: item.name,
						leaf: item.children_count ? false : true,
						loading: false
					}
				})
				console.log(node.key);
				const index = nodesTree.value.findIndex((item: any) => item.key === node.key);
				console.log(index);
				if (index !== -1) {
					const updatedObject = { ...nodesTree.value[index], children: childrenNodes };
					nodesTree.value.splice(index, 1, updatedObject);
				}
			}
			}
		} catch (error) {
			console.error('Error while fetching clusters:', error);
		}
	}
};
const selectedKey = ref(null);
// const nodes = ref([
// 	{
// 		key: '0',
// 		label: 'Introduction',
// 		children: [
// 			{
// 				key: '0-0',
// 				label: 'What is Vue.js?',
// 				data: 'https://vuejs.org/guide/introduction.html#what-is-vue',
// 				type: 'url',
// 			},
// 			{
// 				key: '0-1',
// 				label: 'Quick Start',
// 				data: 'https://vuejs.org/guide/quick-start.html#quick-start',
// 				type: 'url',
// 			},
// 			{
// 				key: '0-2',
// 				label: 'Creating a Vue Application',
// 				data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application',
// 				type: 'url',
// 			},
// 			{
// 				key: '0-3',
// 				label: 'Conditional Rendering',
// 				data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering',
// 				type: 'url',
// 			},
// 		],
// 	},
// 	{
// 		key: '1',
// 		label: 'Components In-Depth',
// 		children: [
// 			{
// 				key: '1-0',
// 				label: 'Component Registration',
// 				data: 'https://vuejs.org/guide/components/registration.html#component-registration',
// 				type: 'url',
// 			},
// 			{
// 				key: '1-1',
// 				label: 'Props',
// 				data: 'https://vuejs.org/guide/components/props.html#props',
// 				type: 'url',
// 			},
// 			{
// 				key: '1-2',
// 				label: 'Components Events',
// 				data: 'https://vuejs.org/guide/components/events.html#component-events',
// 				type: 'url',
// 			},
// 			{
// 				key: '1-3',
// 				label: 'Slots',
// 				data: 'https://vuejs.org/guide/components/slots.html#slots',
// 				type: 'url',
// 			},
// 		],
// 	},
// 	{
// 		key: '2',
// 		label: 'Components In-Depth',
// 		children: [
// 			{
// 				key: '2-0',
// 				label: 'Component Registration',
// 				data: 'https://vuejs.org/guide/components/registration.html#component-registration',
// 				type: 'url',
// 			},
// 			{
// 				key: '2-1',
// 				label: 'Props',
// 				data: 'https://vuejs.org/guide/components/props.html#props',
// 				type: 'url',
// 			},
// 			{
// 				key: '2-2',
// 				label: 'Components Events',
// 				data: 'https://vuejs.org/guide/components/events.html#component-events',
// 				type: 'url',
// 			},
// 			{
// 				key: '2-3',
// 				label: 'Slots',
// 				data: 'https://vuejs.org/guide/components/slots.html#slots',
// 				type: 'url',
// 			},
// 		],
// 	},
// 	{
// 		key: '3',
// 		label: 'Components In-Depth',
// 		children: [
// 			{
// 				key: '3-0',
// 				label: 'Component Registration',
// 				data: 'https://vuejs.org/guide/components/registration.html#component-registration',
// 				type: 'url',
// 			},
// 			{
// 				key: '3-1',
// 				label: 'Props',
// 				data: 'https://vuejs.org/guide/components/props.html#props',
// 				type: 'url',
// 			},
// 			{
// 				key: '3-2',
// 				label: 'Components Events',
// 				data: 'https://vuejs.org/guide/components/events.html#component-events',
// 				type: 'url',
// 			},
// 			{
// 				key: '3-3',
// 				label: 'Slots',
// 				data: 'https://vuejs.org/guide/components/slots.html#slots',
// 				type: 'url',
// 			},
// 		],
// 	},
// 	{
// 		key: '4',
// 		label: 'Components In-Depth',
// 		children: [
// 			{
// 				key: '4-0',
// 				label: 'Component Registration',
// 				data: 'https://vuejs.org/guide/components/registration.html#component-registration',
// 				type: 'url',
// 			},
// 			{
// 				key: '4-1',
// 				label: 'Props',
// 				data: 'https://vuejs.org/guide/components/props.html#props',
// 				type: 'url',
// 			},
// 			{
// 				key: '4-2',
// 				label: 'Components Events',
// 				data: 'https://vuejs.org/guide/components/events.html#component-events',
// 				type: 'url',
// 			},
// 			{
// 				key: '4-3',
// 				label: 'Slots',
// 				data: 'https://vuejs.org/guide/components/slots.html#slots',
// 				type: 'url',
// 			},
// 		],
// 	},
// 	{
// 		key: '5',
// 		label: 'Components In-Depth',
// 		children: [
// 			{
// 				key: '5-0',
// 				label: 'Component Registration',
// 				data: 'https://vuejs.org/guide/components/registration.html#component-registration',
// 				type: 'url',
// 			},
// 			{
// 				key: '5-1',
// 				label: 'Props',
// 				data: 'https://vuejs.org/guide/components/props.html#props',
// 				type: 'url',
// 			},
// 			{
// 				key: '5-2',
// 				label: 'Components Events',
// 				data: 'https://vuejs.org/guide/components/events.html#component-events',
// 				type: 'url',
// 			},
// 			{
// 				key: '5-3',
// 				label: 'Slots',
// 				data: 'https://vuejs.org/guide/components/slots.html#slots',
// 				type: 'url',
// 			},
// 		],
// 	},
// ]);
watch(() => storeCore.core, () => {
	{
		getClustersData()
	}
})
</script>

<template>
	<div class="rounded-xl border-[1px] border-border-mid bg-grey-light p-[22px] grid grid-rows-[auto_1fr]">
		<div class="flex items-center gap-4 mb-4">
			<SearchBox v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Поиск по группам"
				class="flex-shrink w-full max-h-9" />
			<button>
				<Icon name="show-more" class="w-5 h-5 text-fill-light" />
			</button>
		</div>
		<div class="overflow-auto scrollbar -mr-[18px]">
			<Tree :value="nodesTree" v-model="selectedKey" selectionMode="checkbox" @node-expand="onNodeExpand"
				loadingMode="icon" />
		</div>
	</div>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
	@apply w-2;
}

.scrollbar::-webkit-scrollbar-track {
	@apply bg-transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
	@apply rounded-lg bg-border-mid;
}
</style>
