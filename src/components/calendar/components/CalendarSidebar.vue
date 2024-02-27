<script setup lang="ts">
import type { SidebarItem } from '../constants/types';
import { useVModel } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    data?: string | number | Date | DatePickerModel;
  }>(),
  {
    type: 'single',
    columns: 1,
    sidebar: false
  }
);

const emits = defineEmits<{
  (e: 'update:data', payload: typeof props.data): void;
  (e: 'changedValue', payload: any): void;
}>();

const data = useVModel(props, 'data', emits, {
  passive: true
});

const today = new Date();
const thisYear = today.getFullYear();
const thisMonth = today.getMonth() + 1;
const thisDate = today.getDate();
const thisDay = today.getDay();
console.log(thisYear, thisMonth, thisDate);

const setToday = () => {
  props.data.start = today;
  props.data.end = today;
  emits('changedValue', new Date());
};

const setYesterday = () => {
  props.data.start = new Date(thisYear, thisMonth - 1, thisDate - 1);
  props.data.end = new Date(thisYear, thisMonth - 1, thisDate - 1);
  emits('changedValue', new Date());
};

const setThisWeek = () => {
  const first = thisDate - thisDay;
  const last = first + 6;
  props.data.start = new Date(thisYear, thisMonth - 1, first);
  props.data.end = new Date(thisYear, thisMonth - 1, last);
  emits('changedValue', new Date());
};

const setLastWeek = () => {
  const lastWeekToday = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const first = lastWeekToday.getDate() - thisDay;
  const last = first + 6;
  props.data.start = new Date(thisYear, thisMonth - 1, first);
  props.data.end = new Date(thisYear, thisMonth - 1, last);
  emits('changedValue', new Date());
};

const setThisMonth = () => {
  props.data.start = new Date(thisYear, thisMonth - 1, 1);
  props.data.end = new Date(thisYear, thisMonth, 0);
  emits('changedValue', new Date());
};

const setLastMonth = () => {
  props.data.start = new Date(thisYear, thisMonth - 2, 1);
  props.data.end = new Date(thisYear, thisMonth - 1, 0);
  emits('changedValue', new Date());
};

const setThisYear = () => {
  props.data.start = new Date(thisYear, 0, 1);
  props.data.end = new Date(thisYear, 11, 31);
  emits('changedValue', new Date());
};

const setLastYear = () => {
  props.data.start = new Date(thisYear - 1, 0, 1);
  props.data.end = new Date(thisYear - 1, 11, 31);
  emits('changedValue', new Date());
};

const setAllTheTime = () => {
  props.data.start = new Date(2011, 10, 11);
  props.data.end = today;
  emits('changedValue', new Date());
};

const sidebarItems: SidebarItem[] = [
  {
    text: 'Сегодня',
    onClick: setToday
  },
  {
    text: 'Вчера',
    onClick: setYesterday
  },
  {
    text: 'Текущая неделя',
    onClick: setThisWeek
  },
  {
    text: 'Прошлая неделя',
    onClick: setLastWeek
  },
  {
    text: 'Этот месяц',
    onClick: setThisMonth
  },
  {
    text: 'Прошлый месяц',
    onClick: setLastMonth
  },
  {
    text: 'Этот год',
    onClick: setThisYear
  },
  {
    text: 'Прошлый год',
    onClick: setLastYear
  },
  {
    text: 'Всё время',
    onClick: setAllTheTime
  }
];
</script>

<template>
  <div class="border-r-[1px] border-r-border-mid px-4 py-3">
    <ul>
      <li
        v-for="item in sidebarItems"
        :key="item.text"
        class="mb-1 w-full rounded-lg px-[6px] transition-colors last:mb-0 hover:bg-grey-50"
      >
        <button
          class="w-full px-2.5 py-[9px] text-left text-sm font-medium text-text-secondary"
          @click="item.onClick"
        >
          {{ item.text }}
        </button>
      </li>
    </ul>
  </div>
</template>
