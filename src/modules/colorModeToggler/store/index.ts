import { useDark, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useColorModeStore = defineStore('colorMode', () => {
	const isDark = useDark();
	const toggleDark = useToggle(isDark);

	return { isDark, toggleDark };
});
