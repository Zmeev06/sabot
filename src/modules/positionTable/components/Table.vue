<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import type { ColumnDef, ExpandedState } from '@tanstack/vue-table';
import type { Response } from '../constants/types';
import {
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useVueTable,
  getExpandedRowModel
} from '@tanstack/vue-table';
import { valueUpdater } from '../../../utils/helpers';
import TableTopHeader from './TableTopHeader.vue';
import { Button } from '@//ui/button';
import { Pagination } from '@//components/pagination';
import RowExpanded from './RowExpanded.vue';
import { Icon } from '@//ui/icon';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@//ui/table';
import {
  wrapper as scrollWrapperRef,
  scrollTrackPercent,
  controlScroll,
  handleNativeScroll
} from './table-scrollbar/model';

const props = defineProps<{
  columns: ColumnDef<Response>[];
  data: Response[];
}>();

const tableRef = ref();
const wrapper = ref<HTMLDivElement>();
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
  onRowSelectionChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, rowSelection),
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
    }
  }
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

  return `sticky top-0 after:absolute after:z-[-1] after:top-0 after:left-0 after:w-full after:h-full after:bg-foreground group-hover:after:bg-grey-light after:transition-colors`;
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

function isContentRefExits(
  rowIndex: number,
  cellIndex: number,
  rowLength: number
) {
  if (!contentCell.value) {
    return false;
  }

  if (!contentCell.value[rowIndex * rowLength + cellIndex]) {
    return false;
  }

  return true;
}

function isContentFixedCell(
  rowIndex: number,
  cellIndex: number,
  rowLength: number
) {
  if (!isContentRefExits(rowIndex, cellIndex, rowLength)) {
    return false;
  }

  if (!isFixedCell(cellIndex)) {
    return false;
  }

  return true;
}

function getFixedContentCellPosition(
  rowIndex: number,
  cellIndex: number,
  rowLength: number
) {
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

const scrollYValue = ref(0);
const arrowTopValue = ref(132);

function getTableScrollYValue() {
  const scrollValue = Math.abs(
    scrollYValue.value +
      tableRef.value?.$el.getBoundingClientRect().top -
      (scrollYValue.value + tableRef.value?.$el.getBoundingClientRect().top) +
      tableRef.value?.$el.getBoundingClientRect().top
  );

  const allowScrollValue = wrapper.value?.offsetHeight! - window.innerHeight;
  return scrollValue > allowScrollValue ? allowScrollValue : scrollValue;
}

function setScrollYValue() {
  scrollYValue.value = document.documentElement.scrollTop;

  if (tableRef.value?.$el.getBoundingClientRect().top <= 0) {
    arrowTopValue.value = 132 + getTableScrollYValue();
  } else {
    arrowTopValue.value = 132;
  }
}

const isScrollable = ref(false);

function setIsScrollable() {
  const scrollWidth = computed(() => scrollWrapperRef.value?.scrollWidth ?? 0);
  const clientWidth = computed(() => scrollWrapperRef.value?.clientWidth ?? 0);

  Number(scrollWidth.value - clientWidth.value)
    ? (isScrollable.value = true)
    : (isScrollable.value = false);
}

onMounted(() => {
  setScrollYValue();
  setIsScrollable();

  document.addEventListener('scroll', setScrollYValue);
  window.addEventListener('resize', setIsScrollable);
});
onUnmounted(() => {
  document.removeEventListener('scroll', setScrollYValue);
  window.removeEventListener('resize', setIsScrollable);
});
</script>

<template>
  <div
    class="relative grid grid-flow-row rounded-xl shadow-sm shadow-text-primary/5 outline outline-1 outline-border-mid"
    ref="wrapper"
  >
    <TableTopHeader
      :isScrollable="isScrollable"
      v-model:scroll-track="scrollTrackPercent"
      @update:scroll-track="controlScroll"
      class="border-b-[1px] border-b-border-heavy"
    />
    <div
      class="w-full overflow-y-auto overflow-x-hidden"
      ref="scrollWrapperRef"
      @scroll="handleNativeScroll"
      position-table-component
    >
      <Table class="w-full table-auto border-collapse" ref="tableRef">
        <TableHeader class="relative z-20 !border-none !p-0">
          <TableRow
            class="relative border-b-[1px] border-transparent !p-0 after:absolute after:left-0 after:top-[100%] after:h-[1px] after:w-full after:bg-border-heavy"
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              class="!border-none !p-0"
              v-for="(header, index) in headerGroup.headers"
              :key="header.id"
              ref="headerCell"
              :class="[getFixedCellStyle(index)]"
              :style="{
                width: `${getCellWidth(index)}px`,
                left: `${getFixedHeaderCellPosition(index)}px`,
                minWidth: `${getMinWidthContentCell(index)}px`
              }"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="relative z-10 border-b-2">
          <template v-if="table.getRowModel().rows?.length">
            <TableRow
              class="group relative z-10 min-w-min max-w-min overflow-visible border-none outline outline-1 outline-offset-0 outline-border-mid"
              :class="[
                {
                  'hover:outline-border-heavy': row.depth === 0,
                  'outline outline-1 outline-border-heavy': row.getIsExpanded()
                }
              ]"
              v-for="(row, rowIndex) in table.getRowModel().rows"
              :key="row.id"
              :data-state="row.getIsSelected() ? 'selected' : undefined"
            >
              <template v-if="row.depth === 0">
                <TableCell
                  class="h-[40px]"
                  v-for="(cell, cellIndex) in row.getVisibleCells()"
                  :key="cell.id"
                  ref="contentCell"
                  :class="[getFixedCellStyle(cellIndex)]"
                  :style="{
                    width: `${getCellWidth(cellIndex)}px`,
                    left: `${getFixedContentCellPosition(rowIndex, cellIndex, table.getAllColumns().length)}px`,
                    minWidth: `${getMinWidthContentCell(cellIndex)}px`
                  }"
                >
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </TableCell>
              </template>
              <TableCell v-else :colspan="table.getAllColumns().length">
                <RowExpanded />
              </TableCell>
            </TableRow>
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
    </div>
    <div
      class="flex items-center justify-between gap-4 border-t-[1px] border-t-border-mid px-6 pb-4 pt-3"
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
    <div
      class="group absolute right-[-32px] z-10 inline-flex h-full max-h-svh items-center overflow-hidden"
      :style="{ top: `${arrowTopValue}px` }"
    >
      <button
        class="inline-flex h-[132px] w-[90px] translate-x-[100%] items-center justify-end rounded-bl-full rounded-tl-full bg-accent-normal/60 backdrop-blur-[6px] transition-transform group-hover:translate-x-0"
      >
        <Icon name="chevron-right" class="h-12 w-12 text-base-white" />
      </button>
    </div>
  </div>
</template>
