<script setup lang="ts">
	import { RendererElement, computed, ref } from 'vue';

	const isShow = ref(true);
	const state = computed(() => (isShow.value ? 'opened' : 'hidden'));

	function toggle() {
		isShow.value = !isShow.value;
	}

	function onEnter(el: RendererElement, done: () => void) {
		done();
		console.log('done enter');
	}

	function onLeave(el: RendererElement, done: () => void) {
		el.addEventListener('transitionend', (event: Event) => {
			console.log(event);
			done();
		});

		el.style.height = `${el.offsetHeight}px`;
		el.style.height = 0;
	}
</script>

<template>
	<div>
		<slot :toggle="toggle" :state="state" />
		<Transition @enter="onEnter" @leave="onLeave" :css="false">
			<div class="transition-[height]" v-if="isShow">
				<slot name="content" />
			</div>
		</Transition>
	</div>
</template>
