<script setup lang="ts">
	import { computed, ref, watchEffect } from 'vue';
	import { Calendar } from '@components/calendar';
	import { Overlay } from '@//ui/overlay';
	import { addDays, format } from 'date-fns';
	import { Button } from '@//ui/button';
import dayjs from 'dayjs';

	const date = ref({
		start: '2023-01-02.',
		end: '2023-01-03',
	});

	const dateComputed = computed(() =>
		date.value.start
			? date.value.end
				? `${dayjs(date.value.start).format('DD.MM.YYYY')} - ${dayjs(date.value.end).format('DD.MM.YYYY')}`
				:dayjs(date.value.start).format('DD.MM.YYYY')
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
