<script setup lang="ts">
import { ref, computed, ComputedRef } from 'vue';
import { Button } from '../../../ui/button';
import InfographicItem from './InfographicItem.vue';
import { IGraphicItem } from '../constants/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Swiper as SwiperClass } from 'swiper/types';

interface Props {
  items: IGraphicItem[];
  state: 'opened' | 'hidden';
}

interface Emits {
  (e: 'toggle'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const swiper = ref<typeof Swiper>();
const isOverflowed = ref<boolean>();
let isEnd: ComputedRef | null = null;

const isSelected = ref<boolean>(false);
const selectedIndex = ref<number | undefined>();

function lock() {
  isOverflowed.value = false;
}

function unlock() {
  isOverflowed.value = true;
}

function init(swiper: SwiperClass) {
  isEnd = computed(() => swiper.isEnd);
}

function click(index: number) {
  if (selectedIndex.value === index) {
    isSelected.value = false;
    return;
  }

  isSelected.value = true;
  selectedIndex.value = index;
}
</script>

<template>
  <div
    class="grid w-full grid-cols-[1fr_auto] items-center gap-2"
    :class="{ isSelected: isSelected }"
  >
    <Swiper
      ref="swiper"
      class="relative w-full rounded-lg outline outline-1 -outline-offset-1 outline-border-mid"
      :class="[
        { 'after:hidden': isEnd },
        isOverflowed
          ? 'after:absolute after:-right-2 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-r after:from-transparent after:to-foreground'
          : ''
      ]"
      :slides-per-view="'auto'"
      :resistanceRatio="0"
      :watchOverflow="true"
      @lock="lock"
      @unlock="unlock"
      @init="init"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="slide !w-auto !flex-grow"
        :class="{ selected: selectedIndex === index }"
        @click="click(index)"
      >
        <InfographicItem
          class="outline outline-1 -outline-offset-1 outline-border-mid"
          v-bind="item"
        />
      </SwiperSlide>
    </Swiper>
    <Button
      icon="chevron-up"
      class="!rounded-full transition-all"
      :class="{ 'rotate-180': props.state === 'hidden' }"
      @click="emit('toggle')"
    />
  </div>
</template>

<style scoped>
.isSelected .slide {
  @apply opacity-30;
}
.isSelected .slide.selected {
  @apply opacity-100;
}
</style>
