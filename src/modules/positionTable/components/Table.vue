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
	import { Icon } from '@//ui/icon';

	import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@//ui/table';
	import {
		wrapper as scrollWrapperRef,
		scrollTrackPercent,
		controlScroll,
		handleNativeScroll,
	} from './table-scrollbar/model';

	const props = defineProps<{
		columns: ColumnDef<Response>[];
		data: Response[];
	}>();

	const tableRef = ref();
	const headerCell = ref();
	const contentCell = ref();

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

	table.setPageSize(100);

	function getCellWidth(index: number): number | string {
		switch (index) {
			case 0:
			case 1:
			case 2:
			case 3:
				return 32;
			case 4:
				return 271;
			case 5:
				return 72;
			default:
				return '';
		}
	}

	function isFixedCell(index: number) {
		if (index > 5) {
			return false;
		}

		return true;
	}

	function getFixedCellStyle(index: number) {
		if (!isFixedCell(index)) {
			return '';
		}

		return `sticky top-0 after:absolute after:z-[-1] after:top-0 after:left-0 after:w-full after:h-full after:bg-base-white group-hover:after:bg-grey-light after:transition-colors`;
	}

	/* */

	function isHeaderRefExist(index: number) {
		if (!headerCell.value) {
			return false;
		}

		if (!headerCell.value[index]) {
			return false;
		}

		return true;
	}

	function isHeaderFixedCell(index: number) {
		if (!isHeaderRefExist(index)) {
			return false;
		}

		if (!isFixedCell(index)) {
			return false;
		}

		return true;
	}

	function getFixedHeaderCellPosition(index: number) {
		if (!isHeaderFixedCell(index)) {
			return '';
		}

		const tableBox = tableRef.value?.$el.getBoundingClientRect();
		const cellBox = headerCell.value[index].$el.getBoundingClientRect();

		return cellBox.x - tableBox.x;
	}

	/* */

	function isContentRefExits(rowIndex: number, cellIndex: number, rowLength: number) {
		if (!contentCell.value) {
			return false;
		}

		if (!contentCell.value[rowIndex * rowLength + cellIndex]) {
			return false;
		}

		return true;
	}

	function isContentFixedCell(rowIndex: number, cellIndex: number, rowLength: number) {
		if (!isContentRefExits(rowIndex, cellIndex, rowLength)) {
			return false;
		}

		if (!isFixedCell(cellIndex)) {
			return false;
		}

		return true;
	}

	function getFixedContentCellPosition(rowIndex: number, cellIndex: number, rowLength: number) {
		if (!isContentFixedCell(rowIndex, cellIndex, rowLength)) {
			return '';
		}

		const currentIndex = rowIndex * rowLength + cellIndex;
		const tableBox = tableRef.value?.$el.getBoundingClientRect();
		const cellBox = contentCell.value[currentIndex].$el.getBoundingClientRect();

		return cellBox.x - tableBox.x;
	}

	function getMinWidthContentCell(index: number) {
		if (index > 5) {
			return 80;
		}

		return '';
	}
</script>

<template>
	<div
		class="relative shadow-sm shadow-text-primary/5 outline outline-1 outline-border-mid rounded-xl overflow-visible grid grid-flow-row">
		<TableTopHeader
			v-model:scroll-track="scrollTrackPercent"
			@update:scroll-track="controlScroll"
			class="border-b-[1px] border-b-border-heavy" />
		<div
			class="w-full overflow-y-auto overflow-x-hidden"
			ref="scrollWrapperRef"
			@scroll="handleNativeScroll"
			position-table-component>
			<Table class="w-full border-collapse table-auto" ref="tableRef">
				<TableHeader class="!p-0 !border-none relative z-20">
					<TableRow
						class="relative !p-0 border-b-[1px] border-transparent after:absolute after:top-[100%] after:left-0 after:w-full after:h-[1px] after:bg-border-heavy"
						v-for="headerGroup in table.getHeaderGroups()"
						:key="headerGroup.id">
						<TableHead
							class="!p-0 !border-none"
							v-for="(header, index) in headerGroup.headers"
							:key="header.id"
							ref="headerCell"
							:class="[getFixedCellStyle(index)]"
							:style="{
								width: `${getCellWidth(index)}px`,
								left: `${getFixedHeaderCellPosition(index)}px`,
								minWidth: `${getMinWidthContentCell(index)}px`,
							}">
							<FlexRender
								v-if="!header.isPlaceholder"
								:render="header.column.columnDef.header"
								:props="header.getContext()" />
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody class="border-b-2 relative z-10">
					<template v-if="table.getRowModel().rows?.length">
						<TableRow
							class="group overflow-visible relative z-10 border-none min-w-min max-w-min outline outline-1 outline-offset-0 outline-border-mid"
							:class="[
								{
									'hover:outline-border-heavy': row.depth === 0,
									'outline outline-1 outline-border-heavy': row.getIsExpanded(),
								},
							]"
							v-for="(row, rowIndex) in table.getRowModel().rows"
							:key="row.id"
							:data-state="row.getIsSelected() ? 'selected' : undefined">
							<template v-if="row.depth === 0">
								<TableCell
									class="h-[40px]"
									v-for="(cell, cellIndex) in row.getVisibleCells()"
									:key="cell.id"
									ref="contentCell"
									:class="[getFixedCellStyle(cellIndex)]"
									:style="{
										width: `${getCellWidth(cellIndex)}px`,
										left: `${getFixedContentCellPosition(
											rowIndex,
											cellIndex,
											table.getAllColumns().length
										)}px`,
										minWidth: `${getMinWidthContentCell(cellIndex)}px`,
									}">
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
		<div class="absolute group top-0 right-[-32px] h-full z-10">
			<div class="inline-flex items-center sticky top-0 h-full max-h-svh">
				<button
					class="inline-flex items-center justify-end w-[90px] h-[132px] rounded-tl-full rounded-bl-full bg-accent-normal transition-transform translate-x-[100%] group-hover:translate-x-0">
					<Icon name="chevron-right" class="h-12 w-12 text-base-white" />
				</button>
			</div>
		</div>
	</div>
</template>
