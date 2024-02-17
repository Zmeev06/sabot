import { defineStore } from "pinia";
import { ref } from "vue";
import { ISearchType } from "../intercaces/analytics/searchType";

export const useSearchTypeStore = defineStore("searchType", () => {
  const searchType = ref<ISearchType>();

  const setSearchType = (value: ISearchType) => {
    searchType.value = value
  }
  return {
    searchType, setSearchType
  };
});
