import {ref, computed } from 'vue';

export const scrollTrackPercent = ref(0);
export const wrapper = ref<HTMLElement>();	
	
export function controlScroll() {
  const scrollWidth = computed(() => wrapper.value?.scrollWidth ?? 0);
  const clientWidth = computed(() => wrapper.value?.clientWidth ?? 0);
  const progress = computed(() => Number(scrollWidth.value - clientWidth.value) / 100 * scrollTrackPercent.value);

  wrapper.value?.scroll({ 
    top: 0,
    left: progress.value,
    });
	}

export function handleNativeScroll(event: Event) {
		const target = event.target as HTMLElement;
		scrollTrackPercent.value = Number(target.scrollLeft) / (target.scrollWidth - target.clientWidth) * 100;
	};