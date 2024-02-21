<script setup lang="ts">
	import { computed, ref, watchEffect } from 'vue';
	import { Calendar } from '@components/calendar';
	import { Overlay } from '@//ui/overlay';
	import { addDays, format } from 'date-fns';
	import { Button } from '@//ui/button';

	const date = ref({
		start: new Date(2022, 0, 20),
		end: addDays(new Date(2022, 0, 20), 20),
	});

	const dateComputed = computed(() =>
		date.value.start
			? date.value.end
				? `${format(date.value.start, 'LL.dd.y')} - ${format(date.value.end, 'LL.dd.y')}`
				: format(date.value.start, 'LL.dd.y')
			: 'Pick a date'
	);

	watchEffect(() => {
		console.log(date.value);
	});
</script>

<template>
	<Overlay>
		<template #trigger="{ toggle }">
			<Button
				class="!font-normal"
				icon="calendar"
				size="lg"
				iconPos="left"
				variant="secondary"
				:label="dateComputed"
				@click="toggle" />
		</template>
		<template #content>
			<Calendar v-model.range="date" />
		</template>
	</Overlay>
</template>
