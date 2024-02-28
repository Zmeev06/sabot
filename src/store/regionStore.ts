import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IRegion } from '../intercaces/analytics/region';

export const useRegionStore = defineStore('region', () => {
  const region = ref<IRegion>();

  const setRegion = (value: IRegion) => {
    region.value = value;
  };
  return {
    region,
    setRegion
  };
});
