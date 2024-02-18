<script setup lang="ts">
	import { ref } from 'vue';
	import type { ColumnDef, ExpandedState } from '@tanstack/vue-table';
	import type { Response } from '../constants/types';
	import {
		FlexRender,
		getCoreRowModel,
		getPaginationRowModel,
		useVueTable,
		getExpandedRowModel,
	} from '@tanstack/vue-table';
	import { valueUpdater } from '../../../utils/helpers';
	import TableTopHeader from './TableTopHeader.vue';
	import { Button } from '@//ui/button';
	import { Pagination } from '@//components/pagination';
	import RowExpanded from './RowExpanded.vue';

	import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../ui/table';

	const props = defineProps<{
		columns: ColumnDef<Response>[];
		data: Response[];
	}>();

	const rowSelection = ref({});
	const expanded = ref<ExpandedState>({});

	const table = useVueTable({
		get data() {
			return props.data;
		},
		get columns() {
			return props.columns;
		},
		onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
		onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expanded),
		getExpandedRowModel: getExpandedRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSubRows: (row) => row.subRows,
		state: {
			get rowSelection() {
				return rowSelection.value;
			},
			get expanded() {
				return expanded.value;
			},
		},
	});
</script>

<template>
	<div
		class="shadow-sm shadow-text-primary/5 outline outline-1 outline-border-mid rounded-xl overflow-hidden grid grid-flow-row">
		<TableTopHeader class="border-b-[1px] border-b-border-heavy" />
		<div class="w-full overflow-auto">
			<Table>
				<TableHeader class="!p-0 !border-none">
					<TableRow
						class="!p-0 border-b-[1px] border-b-border-heavy"
						v-for="headerGroup in table.getHeaderGroups()"
						:key="headerGroup.id">
						<TableHead class="!p-0 !border-none" v-for="header in headerGroup.headers" :key="header.id">
							<FlexRender
								v-if="!header.isPlaceholder"
								:render="header.column.columnDef.header"
								:props="header.getContext()" />
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody class="border-b-2">
					<template v-if="table.getRowModel().rows?.length">
						<TableRow
							class="border-b-[1px] border-b-border-mid last:border-b-transparent transition-colors hover:bg-grey-light hover:outline hover:outline-1 hover:outline-border-heavy group"
							v-for="row in table.getRowModel().rows"
							:key="row.id"
							:data-state="row.getIsSelected() ? 'selected' : undefined">
							<template v-if="row.depth === 0">
								<TableCell class="h-[40px]" v-for="cell in row.getVisibleCells()" :key="cell.id">
									<FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
								</TableCell>
							</template>
							<TableCell v-else :colspan="table.getAllColumns().length">
								<RowExpanded />
							</TableCell>
						</TableRow>
					</template>
					<template v-else>
						<TableRow>
							<TableCell :colSpan="columns.length" class="h-24 text-center"> No results. </TableCell>
						</TableRow>
					</template>
				</TableBody>
			</Table>
		</div>
		<div class="pt-3 pb-4 px-6 flex items-center justify-between gap-4 border-t-[1px] border-t-border-mid">
			<Button variant="secondary" size="sm" icon="arrow-narrow-left" iconPos="left" label="Назад" />
			<Pagination />
			<Button variant="secondary" size="sm" icon="arrow-narrow-right" iconPos="right" label="Вперёд" />
		</div>
	</div>
</template>
