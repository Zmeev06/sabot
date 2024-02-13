<script setup lang="ts">
	import { ref } from 'vue';
	import InputText from 'primevue/inputtext';

	const inputStyle = ref({
		root: 'ptInputRoot',
	});
</script>

<template>
	<InputText :pt="inputStyle" />
</template>

<style>
	.ptInputRoot {
		@apply rounded-lg py-2.5 px-3.5 border-[1px] border-border-strong bg-base-white shadow-sm shadow-text-primary/5 outline-none outline-transparent ring-0 focus:border-accent-normal ring-transparent transition-all appearance-none hover:border-accent-normal text-base placeholder:text-text-tertiary text-text-primary font-medium placeholder:font-normal;
	}
</style>
