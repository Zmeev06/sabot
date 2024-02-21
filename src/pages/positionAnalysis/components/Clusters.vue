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
					const index = nodesTree.value.findIndex((item: any) => item.key === node.key);
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
