<script setup lang="ts">
	import { ref } from 'vue';

	const isShow = ref(true);

	function toggle() {
		isShow.value = !isShow.value;
	}
</script>

<template>
	<div>
		<slot :toggle="toggle" />
		<div v-if="isShow">
			<slot name="content" />
		</div>
	</div>
</template>
