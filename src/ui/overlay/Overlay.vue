<script setup lang="ts">
	import { ref } from 'vue';
	import OverlayPanel from 'primevue/overlaypanel';

	const overlay = ref<InstanceType<typeof OverlayPanel>>();

	const toggle = (event: any) => {
		overlay.value?.toggle(event);
	};

	const overlayStyle = ref({
		transition: {
			enterFromClass: 'opacity-0 scale-y-[0.8]',
			enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
			leaveActiveClass: 'transition-opacity duration-100 ease-linear',
			leaveToClass: 'opacity-0',
		},
	});

	defineOptions({
		inheritAttrs: false,
	});
</script>

<template>
	<slot name="trigger" :toggle="toggle" />
	<OverlayPanel :pt="overlayStyle" ref="overlay" v-bind="$attrs" class="overlayWrapper">
		<slot name="content" />
	</OverlayPanel>
</template>
