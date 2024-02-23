<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";
import type { Response } from "../constants/types";
import {
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import { valueUpdater } from "../../../utils/helpers";
import TableTopHeader from "./TableTopHeader.vue";
import { Button } from "@//ui/button";
import { Pagination } from "@//components/pagination";

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

const tableData = reactive({
  data: [],
});

const table = useVueTable({
  get data() {
    return tableData.data;
  },
  get columns() {
    return props.columns;
  },
  onRowSelectionChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, rowSelection),
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  state: {
    get rowSelection() {
      return rowSelection.value;
    },
  },
});

const applyDrag = (arr: any, dragResult: any) => {
  const { removedIndex, addedIndex, payload } = dragResult;

  if (removedIndex === null && addedIndex === null) return arr;
  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  return result;
};

const onDrop = (dropResult: any) => {
  tableData.data = applyDrag(tableData.data, dropResult);
  localStorage.setItem("tableData", JSON.stringify(tableData.data));
};

watch(
  () => props.data,
  () => {
    const localData = localStorage.getItem("tableData");
    if (localData && localData !== null) {
      tableData.data = JSON.parse(localData);
    }
  }
);

const handleDragStart = () => {
  document.querySelector(".table-body")?.classList.add("dragging-background");
};
const handleDragEnd = () => {
  document
    .querySelector(".table-body")
    ?.classList.remove("dragging-background");
};
</script>

<template>
  <div
    class="shadow-sm shadow-text-primary/5 outline outline-1 outline-border-mid rounded-xl overflow-hidden"
  >
    <TableTopHeader class="border-b-[1px] border-b-border-heavy" />
    <Table>
      <Container>
        <TableHeader class="!p-0 !border-none">
          <TableRow
            class="!p-0 border-b-[1px] border-b-border-heavy"
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              class="!p-0 !border-none"
              v-for="header in headerGroup.headers"
              :key="header.id"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
      </Container>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <Container
            @drop="onDrop"
            :drop-placeholder="{
              className: `bg-white 
            border-dotted border-2 
            border-primary rounded-lg mx-4 my-2`,
              animationDuration: '200',
              showOnTop: true,
            }"
            class="table-body"
            @dragStart="handleDragStart"
            @dragEnd="handleDragEnd"
          >
            <Draggable v-for="row in table.getRowModel().rows" :key="row.id">
              <TableRow
                class="border-b-[1px] border-b-border-mid last:border-none"
                :data-state="row.getIsSelected() ? 'selected' : undefined"
              >
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </TableCell>
              </TableRow>
            </Draggable>
          </Container>
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colSpan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
    <div
      class="pt-3 pb-4 px-6 flex items-center justify-between gap-4 border-t-[1px] border-t-border-mid"
    >
      <Button
        variant="secondary"
        size="sm"
        icon="arrow-narrow-left"
        iconPos="left"
        label="Назад"
      />
      <Pagination />
      <Button
        variant="secondary"
        size="sm"
        icon="arrow-narrow-right"
        iconPos="right"
        label="Вперёд"
      />
    </div>
  </div>
</template>

<style>
.dragging-background {
  background-color: #e6e6e6; /* Cor de fundo escura enquanto arrasta um item */
  transition: background-color 0.3s; /* Adiciona uma transição suave */
}
</style>
