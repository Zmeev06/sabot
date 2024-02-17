import { defineStore } from "pinia";
import { ref } from "vue";
import { ICore } from "../intercaces/analytics/core";

export const useCoreStore = defineStore("core", () => {
  const core = ref<ICore>();

  const setCore = (value: ICore) => {
    core.value = value
  }
  return {
    core, setCore
  };
});
