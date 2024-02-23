<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Chart from 'primevue/chart';
import { Tag } from '@//ui/tag';
import {
  generateChartDataConfig,
  getChartOptionsConfig
} from '@//pages/positionAnalysis/constants/chart';
import { Icon } from '@//ui/icon';
import { InputField } from '@//ui/inputField';
import { Input } from '@//ui/input';
import { Button } from '@//ui/button';

const chart = ref();
let gradient: any = null;

const chartOptions = computed(() => getChartOptionsConfig('line'));
const chartData = computed(() => ({
  labels: generateChartDataConfig('line').labels,
  datasets: [generateChartDataConfig('line').datasets[0]]
}));

const relevantUrl = ref('https://kolbaska.biz/kolbasy/');
const targetUrl = ref('https://kolbaska.biz/kolbasy/');

function setGradient() {
  chartData.value.datasets = chartData.value.datasets.map((dataset: any) => ({
    ...dataset,
    backgroundColor: gradient
  }));
}

onMounted(() => {
  const canvasWrapper = chart.value.$el as HTMLDivElement;
  const canvas = canvasWrapper.querySelector('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  gradient = ctx?.createLinearGradient(
    0,
    0,
    0,
    canvasWrapper.offsetHeight / 1.3
  );
  gradient?.addColorStop(0, 'rgba(34, 204, 238, 0.5)');
  gradient?.addColorStop(1, 'rgba(255, 255, 255, 0)');
  setGradient();
});
</script>

<template>
  <div class="py-6 px-3 grid gap-6 grid-cols-[1026px_1fr]">
    <div class="space-y-4">
      <div class="flex items-center gap-2">
        <button>
          <Tag active value="Позиции" />
        </button>
        <button>
          <Tag value="Частотность" />
        </button>
      </div>
      <Chart
        class="chart"
        type="line"
        :options="chartOptions"
        :data="chartData"
        ref="chart"
      />
    </div>
    <div class="">
      <div class="space-y-[18px]">
        <div class="block">
          <div>
            <div class="title-wrapper">
              <Icon name="heading-square" class="title-icon" />
              <h2>Заголовок</h2>
            </div>
            <p class="description">Колбасы оптом от производителя в москве</p>
          </div>
          <div>
            <div class="title-wrapper">
              <Icon name="align-left" class="title-icon" />
              <h2>Описание</h2>
            </div>
            <p class="description">
              Колбасные изделия и полуфабрикаты для народа от Емельянов.
              Работаем для вас! Доставка. От производителя. Опт мелкий. Опт
              крупный
            </p>
          </div>
        </div>
        <div class="block">
          <div>
            <div class="title-wrapper">
              <Icon name="user-check" class="title-icon" />
              <h2>Релевантный url</h2>
            </div>
            <InputField
              disabled
              class="input-field w-full"
              icon="lock"
              v-model="relevantUrl"
            />
          </div>
          <div>
            <div class="title-wrapper">
              <Icon name="target" class="title-icon" />
              <h2>Целевой url</h2>
            </div>
            <div class="flex items-center gap-2">
              <Input
                class="input-field w-full"
                icon="lock"
                v-model="targetUrl"
              />
              <Button disabled variant="secondary" label="Сохранить" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block {
  @apply rounded-lg outline outline-1 outline-border-mid bg-base-white p-[14px] space-y-[14px] divide-y-[1px] divide-border-mid *:pt-[14px] first:*:pt-0;
}

.title-wrapper {
  @apply font-secondary flex items-center gap-2 text-base font-bold text-text-primary mb-1.5;
}

.title-icon {
  @apply w-5 h-5 text-fill-light;
}

.description {
  @apply text-sm/[22px] text-fill-strong;
}

.input-field {
  @apply py-2 px-3;
}

.chart {
  width: 100%;
  height: 360px;
}
:deep(.chart canvas) {
  height: 100% !important;
  width: 100% !important;
}
</style>
