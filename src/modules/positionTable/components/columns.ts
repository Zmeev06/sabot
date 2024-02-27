import { createColumnHelper } from '@tanstack/vue-table';
import { h, computed } from 'vue';
import { Icon } from '@//ui/icon';
import { Checkbox } from '@//ui/checkbox';
import { Dropdown } from '@//ui/dropdown';
import { MultiSelect } from '@//components/positionTable';
import TooltipDelete from './TooltipDelete.vue';

import {
  TitleContentItem,
  TitleContentHeader,
  CellContentItem,
  CellContentHeader
} from '../../../components/positionTable';
import { responseData } from '../constants/data';

import type { Response } from '../constants/types';

const columnHelper = createColumnHelper<Response>();

export const columns = [
  columnHelper.display({
    id: 'actions',
    cell: ({ row }) =>
      h(
        'button',
        {
          class: 'px-2 h-10 sticky top-0 left-0',
          onClick: () => row.toggleExpanded()
        },
        h(Icon, {
          class: 'w-4 h-4 text-fill-mid',
          name: row.getIsExpanded() ? 'chevron-down' : 'chevron-right'
        })
      )
  }),
  columnHelper.display({
    id: 'select',
    header: ({ table }) =>
      h(
        'div',
        { class: 'px-2 flex items-center justify-center h-[50px]' },
        h(Checkbox, {
          modelValue: table.getIsAllPageRowsSelected(),
          'onUpdate:modelValue': (value: boolean) =>
            table.toggleAllPageRowsSelected(!!value),
          ariaLabel: 'Select all'
        })
      ),
    cell: ({ row }) =>
      h(
        'div',
        { class: 'px-2 flex items-center justify-center' },
        h(Checkbox, {
          modelValue: row.getIsSelected(),
          'onUpdate:modelValue': (value: boolean) =>
            row.toggleSelected(!!value),
          ariaLabel: 'Select row'
        })
      )
  }),
  columnHelper.display({
    id: 'menu',
    header: () =>
      h(
        'button',
        {
          class: 'flex items-center justify-center px-2 h-[50px]'
        },
        h(MultiSelect, {
          class: 'w-4 h-4 text-fill-light',
          iconName: 'settings',
          header: 'Поля таблицы'
        })
      ),
    cell: () =>
      h(
        'button',
        {
          class: 'flex items-center justify-center px-2 h-10'
        },
        h(Icon, {
          class: 'w-4 h-4 text-fill-mid',
          name: 'menu'
        })
      )
  }),
  columnHelper.display({
    id: 'status',
    header: ({ table }) =>
      h(
        'button',
        {
          class: 'px-2 h-[50px]'
        },
        h(Icon, {
          class: 'w-4 h-4 text-fill-light',
          name: 'attach'
        })
      ),
    cell: ({ row }) => {
      const iconName = computed(() => {
        switch (row.original.status) {
          case 'failed':
            return 'close';
          case 'pending':
          case 'processing':
            return 'minus';
          case 'success':
            return 'checkbox';
        }
      });

      const iconColor = computed(() => {
        switch (row.original.status) {
          case 'failed':
            return 'text-error-500';
          case 'pending':
            return 'text-fill-light';
          case 'processing':
            return 'text-warning-500';
          case 'success':
            return 'text-success-500';
        }
      });

      return h(
        'button',
        {
          class: 'px-2 h-10'
        },
        h(Icon, {
          class: `w-4 h-4 ${iconColor.value}`,
          name: iconName.value
        })
      );
    }
  }),
  columnHelper.display({
    id: 'title',
    header: () =>
      h(TitleContentHeader, { class: 'w-[271px]', requestsAmount: 1280 }),
    cell: ({ row }) => {
      return h(TitleContentItem, {
        class: 'w-[271px]',
        title: row.original.title,
        trend: row.original.trend
      });
    }
  }),
  columnHelper.display({
    id: 'ws',
    header: () =>
      h(Dropdown, {
        class: 'py-1 px-2 w-full',
        options: [{ name: 'WS' }, { name: '"WS"' }],
        optionLabel: 'name',
        modelValue: { name: 'WS' }
      }),
    cell: () =>
      h(
        'div',
        {
          class:
            'text-fill-strong w-[72px] text-sm/[22px] px-3 py-[9px] flex items-center justify-center'
        },
        56
      )
  }),
  ...responseData[0].contentCells.map((item) =>
    columnHelper.display({
      id: `content-cell-${item.header.date}`,
      header: () =>
        h(TooltipDelete, { placement: 'top', appendTo: () => document.body }, () =>
          h(CellContentHeader, {
            date: item.header.date,
            value: item.header.value
          })
        ),
      cell: ({ row }) =>
        h(CellContentItem, {
          class: 'w-full h-[40px] border-r-[1px] border-r-foreground',
          increaseType: item.body.increaseType,
          increaseLevel: item.body.increaseLevel,
          title: item.body.title,
          value: item.body.value,
          date: row
        })
    })
  ),
  columnHelper.display({
    id: 'download',
    header: () =>
      h(
        'h2',
        { class: 'text-text-primary text-sm/[18px] p-2 text-left' },
        'Дата загрузки'
      ),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'w-full h-full p-2 pr-3 bg-foreground' },
        h(
          'h2',
          { class: 'text-text-primary text-sm/[14px]' },
          row.original.download
        )
      );
    }
  })
];
