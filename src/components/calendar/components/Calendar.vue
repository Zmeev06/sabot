<script setup lang="ts">
	import { useVModel } from '@vueuse/core';
	import { Icon } from '@//ui/icon';
	import type { Calendar } from 'v-calendar';
	import { DatePicker } from 'v-calendar';
	import { computed, nextTick, onMounted, ref } from 'vue';
	import CalendarSidebar from './CalendarSidebar.vue';
	import CalendarFooter from './CalendarFooter.vue';
	import { Button } from '@//ui/button';

	/* Extracted from v-calendar */
	type DatePickerModel = DatePickerDate | DatePickerRangeObject;
	type DateSource = Date | string | number;
	type DatePickerDate = DateSource | Partial<SimpleDateParts> | null;
	interface DatePickerRangeObject {
		start: Exclude<DatePickerDate, null>;
		end: Exclude<DatePickerDate, null>;
	}
	interface SimpleDateParts {
		year: number;
		month: number;
		day: number;
		hours: number;
		minutes: number;
		seconds: number;
		milliseconds: number;
	}

	defineOptions({
		inheritAttrs: false,
	});

	const props = withDefaults(
		defineProps<{
			modelValue?: string | number | Date | DatePickerModel;
			modelModifiers?: object;
			columns?: number;
			type?: 'single' | 'range';
			sidebar?: boolean;
		}>(),
		{
			type: 'single',
			columns: 1,
			sidebar: false,
		}
	);
	const emits = defineEmits<{
		(e: 'update:modelValue', payload: typeof props.modelValue): void;
	}>();

	const modelValue = useVModel(props, 'modelValue', emits, {
		passive: true,
	});

	const datePicker = ref<InstanceType<typeof DatePicker>>();
	// @ts-expect-error in this current version of v-calendar has the calendaRef instance, which is required to handle arrow nav.
	const calendarRef = computed<InstanceType<typeof Calendar>>(() => datePicker.value.calendarRef);
	const monthsNames = computed(() => getCalendarMonths(calendarRef));

	function getCalendarMonths(calendar: ComputedRef<InstanceType<typeof Calendar>>) {
		return calendar.value.pages.map((page) =>
			new Date(page.year, page.month - 1).toLocaleString('default', { month: 'long' })
		);
	}

	function handleNav(direction: 'prev' | 'next') {
		if (!calendarRef.value) return;

		if (direction === 'prev') calendarRef.value.movePrev();
		else calendarRef.value.moveNext();
	}

	onMounted(async () => {
		await nextTick();
		if (modelValue.value instanceof Date && calendarRef.value) calendarRef.value.focusDate(modelValue.value);
	});
</script>

<template>
	<div class="flex bg-base-white mt-1 rounded-lg border-[1px] border-grey-mid calendar-shadow">
		<CalendarSidebar />

		<div class="relative">
			<div v-if="$attrs.mode !== 'time'" class="absolute top-3 z-[1] flex w-full justify-between px-6">
				<Button
					class="h-10 w-10 p-0"
					variant="tertiary"
					icon="chevron-left"
					@click="handleNav('prev')"></Button>
				<Button
					class="h-10 w-10 p-0"
					variant="tertiary"
					icon="chevron-right"
					@click="handleNav('next')"></Button>
			</div>

			<DatePicker
				ref="datePicker"
				v-bind="$attrs"
				v-model="modelValue"
				:model-modifiers="modelModifiers"
				class="calendar"
				trim-weeks
				:transition="'none'"
				:columns="columns">
				<template #nav-prev-button>
					<Icon name="chevron-left" />
				</template>

				<template #footer>
					<CalendarFooter class="border-t-[1px] border-t-border-mid" />
				</template>

				<template #nav-next-button>
					<Icon name="chevron-right" />
				</template>
			</DatePicker>
		</div>
	</div>
</template>

<style lang="css">
	.calendar-shadow {
		box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);
	}

	.calendar .vc-monthly .is-not-in-month * {
		@apply !opacity-100 text-fill-mid;
	}
	.calendar.vc-bordered {
		@apply !border-none;
	}
	.calendar .vc-pane-layout {
		@apply grid;
	}
	.vc-header {
		@apply !m-0 !p-0 h-9;
	}
	.calendar .vc-title-wrapper {
		@apply text-base font-semibold text-text-secondary;
	}
	.calendar .vc-pane-layout .vc-pane {
		@apply px-6 py-5 border-r-[1px] border-r-border-mid last:border-none;
	}
	.calendar .vc-title {
		@apply relative z-20 text-base font-semibold text-text-secondary;
	}
	.vc-popover-content-wrapper .vc-popover-content {
		@apply mt-3 max-w-xs rounded-md border bg-background;
	}
	.vc-popover-content-wrapper .vc-nav-header {
		@apply flex items-center justify-between p-2;
	}
	.vc-popover-content-wrapper .vc-nav-items {
		@apply grid grid-cols-4 gap-2 p-2;
	}
	.vc-popover-content-wrapper .vc-nav-items .vc-nav-item {
		@apply rounded-md px-2 py-1;
	}
	.vc-popover-content-wrapper .vc-nav-items .vc-nav-item.is-active {
		@apply bg-grey-mid text-base-white;
	}
	.calendar .vc-pane-header-wrapper {
		@apply hidden;
	}
	.calendar .vc-weeks {
		@apply mt-3 p-0;
	}
	.calendar .vc-weekdays {
		@apply flex items-center gap-0;
	}
	.calendar .vc-weekday {
		@apply w-10 h-10 px-2 py-2.5 flex items-center justify-center text-sm font-medium text-text-secondary;
	}
	.calendar .vc-weeks {
		@apply !space-y-1;
	}
	.calendar .vc-highlight {
		@apply h-full w-full bg-grey-light;
	}
	.calendar .vc-day:has(.vc-highlights) {
		@apply first:rounded-l-[40px] last:rounded-r-[40px] overflow-hidden;
	}
	.vc-highlights.vc-day-layer {
		@apply !opacity-100 !pointer-events-auto;
	}
	.vc-highlights .vc-day-layer {
		@apply !opacity-100 !pointer-events-auto;
	}
	.vc-highlight.vc-highlight-base-middle {
		@apply !opacity-100 !pointer-events-auto;
	}
	.vc-day .vc-day-content {
		@apply !opacity-100 !pointer-events-auto;
	}
	.calendar .vc-day.is-today:not(:has(.vc-day-layer)) .vc-day-content {
		@apply rounded-md;
	}
	.calendar .vc-day .vc-day-content {
		@apply rounded-full;
	}
	.calendar .vc-day:has(.vc-highlight-base-start) {
		@apply rounded-l-[40px];
	}
	.calendar .vc-day:has(.vc-highlight) .vc-day-content {
		@apply font-medium;
	}
	.calendar .vc-day:has(.vc-highlight-base-start) .vc-day-content {
		@apply bg-accent-normal;
	}
	.calendar .vc-day:has(.vc-highlight-base-end) {
		@apply rounded-r-[40px];
	}
	.calendar .vc-day:has(.vc-highlight-base-end) .vc-day-content {
		@apply bg-accent-normal;
	}
	.calendar
		.vc-day:has(.vc-highlight-bg-outline):not(:has(.vc-highlight-base-start)):not(:has(.vc-highlight-base-end)) {
		@apply rounded-[40px];
	}
	.calendar .vc-day-content {
		@apply relative inline-flex h-10 w-10 select-none items-center justify-center p-0 text-center text-sm font-normal text-text-secondary ring-offset-background focus-within:relative focus-within:z-20 hover:bg-accent-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 aria-selected:opacity-100;
	}

	.calendar
		.is-not-in-month:not(:has(.vc-highlight-content-solid)):not(:has(.vc-highlight-content-light)):not(
			:has(.vc-highlight-content-outline)
		),
	.calendar .vc-disabled {
		@apply text-grey-mid;
	}
	.calendar .vc-day.is-not-in-month .vc-day-content {
		@apply text-[#667085];
	}
	.calendar .vc-highlight-content-solid,
	.calendar .vc-highlight-content-outline {
		@apply bg-grey-mid text-base-white;
	}
	.calendar .vc-day-content:hover {
		@apply text-base-white;
	}
	.calendar .vc-pane-container.in-transition {
		@apply overflow-hidden;
	}
	.calendar .vc-pane-container {
		@apply relative w-full;
	}
	:root {
		--vc-slide-translate: 22px;
		--vc-slide-duration: 0.15s;
		--vc-slide-timing: ease;
	}

	.calendar .vc-fade-enter-active,
	.calendar .vc-fade-leave-active,
	.calendar .vc-slide-left-enter-active,
	.calendar .vc-slide-left-leave-active,
	.calendar .vc-slide-right-enter-active,
	.calendar .vc-slide-right-leave-active,
	.calendar .vc-slide-up-enter-active,
	.calendar .vc-slide-up-leave-active,
	.calendar .vc-slide-down-enter-active,
	.calendar .vc-slide-down-leave-active,
	.calendar .vc-slide-fade-enter-active,
	.calendar .vc-slide-fade-leave-active {
		transition: opacity var(--vc-slide-duration) var(--vc-slide-timing),
			-webkit-transform var(--vc-slide-duration) var(--vc-slide-timing);
		transition: transform var(--vc-slide-duration) var(--vc-slide-timing),
			opacity var(--vc-slide-duration) var(--vc-slide-timing);
		transition: transform var(--vc-slide-duration) var(--vc-slide-timing),
			opacity var(--vc-slide-duration) var(--vc-slide-timing),
			-webkit-transform var(--vc-slide-duration) var(--vc-slide-timing);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		pointer-events: none;
	}

	.calendar .vc-none-leave-active,
	.calendar .vc-fade-leave-active,
	.calendar .vc-slide-left-leave-active,
	.calendar .vc-slide-right-leave-active,
	.calendar .vc-slide-up-leave-active,
	.calendar .vc-slide-down-leave-active {
		position: absolute !important;
		width: 100%;
	}

	.calendar .vc-none-enter-from,
	.calendar .vc-none-leave-to,
	.calendar .vc-fade-enter-from,
	.calendar .vc-fade-leave-to,
	.calendar .vc-slide-left-enter-from,
	.calendar .vc-slide-left-leave-to,
	.calendar .vc-slide-right-enter-from,
	.calendar .vc-slide-right-leave-to,
	.calendar .vc-slide-up-enter-from,
	.calendar .vc-slide-up-leave-to,
	.calendar .vc-slide-down-enter-from,
	.calendar .vc-slide-down-leave-to,
	.calendar .vc-slide-fade-enter-from,
	.calendar .vc-slide-fade-leave-to {
		opacity: 0;
	}

	.calendar .vc-slide-left-enter-from,
	.calendar .vc-slide-right-leave-to,
	.calendar .vc-slide-fade-enter-from.direction-left,
	.calendar .vc-slide-fade-leave-to.direction-left {
		-webkit-transform: translateX(var(--vc-slide-translate));
		transform: translateX(var(--vc-slide-translate));
	}

	.calendar .vc-slide-right-enter-from,
	.calendar .vc-slide-left-leave-to,
	.calendar .vc-slide-fade-enter-from.direction-right,
	.calendar .vc-slide-fade-leave-to.direction-right {
		-webkit-transform: translateX(calc(-1 * var(--vc-slide-translate)));
		transform: translateX(calc(-1 * var(--vc-slide-translate)));
	}

	.calendar .vc-slide-up-enter-from,
	.calendar .vc-slide-down-leave-to,
	.calendar .vc-slide-fade-enter-from.direction-top,
	.calendar .vc-slide-fade-leave-to.direction-top {
		-webkit-transform: translateY(var(--vc-slide-translate));
		transform: translateY(var(--vc-slide-translate));
	}

	.calendar .vc-slide-down-enter-from,
	.calendar .vc-slide-up-leave-to,
	.calendar .vc-slide-fade-enter-from.direction-bottom,
	.calendar .vc-slide-fade-leave-to.direction-bottom {
		-webkit-transform: translateY(calc(-1 * var(--vc-slide-translate)));
		transform: translateY(calc(-1 * var(--vc-slide-translate)));
	}
	/**
 * Timepicker styles
 */
	.vc-time-picker {
		@apply flex flex-col items-center p-2;
	}
	.vc-time-picker.vc-invalid {
		@apply pointer-events-none opacity-50;
	}
	.vc-time-picker.vc-attached {
		@apply mt-2 border-t border-solid;
	}
	.vc-time-picker > * + * {
		@apply mt-1;
	}
	.vc-time-header {
		@apply mt-1 flex items-center px-1 text-sm font-semibold uppercase leading-6;
	}
	.vc-time-select-group {
		@apply inline-flex items-center rounded-md border border-solid bg-base-white px-1;
	}
	.vc-time-select-group .vc-base-icon {
		@apply mr-1 stroke-grey-mid;
	}
	.vc-time-select-group select {
		@apply appearance-none bg-base-white p-1 text-center outline-none;
	}
	.vc-time-month {
		@apply ml-2;
	}
	.vc-time-day {
		@apply ml-1;
	}
	.vc-time-colon {
		@apply mb-0.5;
	}
	.vc-time-decimal {
		@apply ml-0.5;
	}
</style>
