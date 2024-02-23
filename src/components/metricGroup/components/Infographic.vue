<script setup lang="ts">
import { Button } from '../../../ui/button';
import InfographicItem from './InfographicItem.vue';
import { IGraphicItem } from '../constants/types';
import { Swiper, SwiperSlide } from 'swiper/vue';

interface Props {
  items: IGraphicItem[];
  state: 'opened' | 'hidden';
}

interface Emits {
  (e: 'toggle'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="grid w-full grid-cols-[1fr_auto] items-center gap-2">
    <Swiper
      class="relative w-full rounded-lg outline outline-1 -outline-offset-1 outline-border-mid after:absolute after:-right-2 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-r after:from-transparent after:to-base-white xl:after:content-none"
      :slides-per-view="'auto'"
      :resistanceRatio="0"
    >
      <SwiperSlide
        v-for="(item, index) in items"
        :key="index"
        class="!w-auto !flex-grow"
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
