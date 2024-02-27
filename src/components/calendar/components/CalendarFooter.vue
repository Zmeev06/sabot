<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Button } from '@//ui/button';
import { Input } from '@//ui/input';
import { useVModel } from '@vueuse/core';
import { format } from 'date-fns';

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
}>();

const data = useVModel(props, 'data', emits, {
  passive: true
});

const startDate = ref(format(props.data.start, 'dd.LL.yyyy'));
const endDate = ref(format(props.data.end, 'dd.LL.yyyy'));

watch(props, () => {
  startDate.value = format(props.data.start, 'dd.LL.yyyy');
  endDate.value = format(props.data.end, 'dd.LL.yyyy');
});

const saveDate = () => {
  console.log('start-date:', format(props.data.start, 'yyyy-LL-dd'));
  console.log('end-date:', format(props.data.end, 'yyyy-LL-dd'));
};
</script>

<template>
  <div class="flex items-center justify-between gap-12 p-4">
    <div class="shrink-1 flex grow-0 items-center gap-3">
      <Input
        class="w-[136px] !font-normal"
        placeholder="06.01.2022"
        v-model="startDate"
      />
      <div class="text-base text-fill-mid">–</div>
      <Input
        class="w-[136px] !font-normal"
        placeholder="13.01.2022"
        v-model="endDate"
      />
    </div>
    <div class="flex items-center gap-3">
      <Button size="lg" variant="secondary" label="Отмена">Отмена</Button>
      <Button size="lg" label="Применить" @click="saveDate">Применить</Button>
    </div>
  </div>
</template>
