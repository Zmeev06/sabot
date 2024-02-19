<script setup lang="ts">
	import { ref } from 'vue';
	import type { ColumnDef } from '@tanstack/vue-table';
	import type { Response } from '../constants/types';
	import { FlexRender, getCoreRowModel, getPaginationRowModel, useVueTable } from '@tanstack/vue-table';
	import { valueUpdater } from '../../../utils/helpers';
	import TableTopHeader from './TableTopHeader.vue';
	import { Button } from '@//ui/button';
	import { Pagination } from '@//components/pagination';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";

// @ts-ignore
import { Container, Draggable } from "vue3-smooth-dnd";

const props = defineProps<{
  columns: ColumnDef<Response>[];
  data: Response[];
}>();

	const rowSelection = ref({});

	const table = useVueTable({
		get data() {
			return props.data;
		},
		get columns() {
			return props.columns;
		},
		onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			get rowSelection() {
				return rowSelection.value;
			},
		},
	});
</script>

<template>
	<div class="shadow-sm shadow-text-primary/5 outline outline-1 outline-border-mid rounded-xl overflow-hidden">
		<TableTopHeader class="border-b-[1px] border-b-border-heavy" />
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
			<TableBody>
				<template v-if="table.getRowModel().rows?.length">
					<TableRow
						class="border-b-[1px] border-b-border-mid last:border-none"
						v-for="row in table.getRowModel().rows"
						:key="row.id"
						:data-state="row.getIsSelected() ? 'selected' : undefined">
						<TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
							<FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
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
		<div class="pt-3 pb-4 px-6 flex items-center justify-between gap-4 border-t-[1px] border-t-border-mid">
			<Button variant="secondary" size="sm" icon="arrow-narrow-left" iconPos="left" label="Назад" />
			<Pagination />
			<Button variant="secondary" size="sm" icon="arrow-narrow-right" iconPos="right" label="Вперёд" />
		</div>
	</div>
</template>

<style>
.dragging-background {
  background-color: #e6e6e6; /* Cor de fundo escura enquanto arrasta um item */
  transition: background-color 0.3s; /* Adiciona uma transição suave */
}
</style>
