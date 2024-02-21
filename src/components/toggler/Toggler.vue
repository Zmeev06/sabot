<script setup lang="ts">
	import { RendererElement, computed, ref } from 'vue';

	const isShow = ref(true);
	const state = computed(() => (isShow.value ? 'opened' : 'hidden'));

	function toggle() {
		isShow.value = !isShow.value;
	}
</script>

<template>
	<div>
		<slot :toggle="toggle" :state="state" />
		<div class="transition-all overflow-hidden max-h-[999px]" :style="{ maxHeight: isShow ? '' : '0' }">
			<slot name="content" />
		</div>
	</div>
</template>
