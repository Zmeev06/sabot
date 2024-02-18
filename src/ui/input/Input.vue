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
		@apply rounded-lg py-2.5 px-3.5 outline outline-1 outline-border-strong bg-base-white shadow-sm shadow-text-primary/5 outline-none ring-0 focus:outline-accent-normal ring-transparent transition-all appearance-none hover:outline-accent-normal text-base placeholder:text-text-tertiary text-text-primary font-medium placeholder:font-normal;
	}
</style>
