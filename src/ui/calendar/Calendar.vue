<script setup lang="ts">
	import { computed } from 'vue';
	import Calendar from 'primevue/calendar';
	import { Icon } from '../icon';
	import { Button } from '../button';
	import { Input } from '../input';

	const modelValue = defineModel();

	const calendarStyle = computed(() => ({
		root: 'ptCalendarRoot',
		input: 'ptCalendarInput',
		title: 'ptCalendarTitle',
		tableheadercell: 'ptCalendarTableHeaderCell',
		tableheadercelllabel: 'ptCalendarTableHeaderCellLabel',
		panel: 'ptCalendarPanel',
		header: 'ptCalendarHeader',
		groupcontainer: 'ptCalendarGroupContainer',
		group: 'ptCalendarGroup',
		table: 'ptCalendarTable',
		tablebodyrow: 'ptCalendarTableBodyRow',
		day: 'ptCalendarDay',
		daylabel: ({ context }: any) => ({
			class: [
				'ptCalendarDayLabel',
				{
					ptCalendarDaySelected: context.selected,
				},
			],
		}),
		previousbutton: 'ptCalendarButton',
		nextbutton: 'ptCalendarButton',
		transition: {
			enterFromClass: 'opacity-0 scale-y-[0.8]',
			enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
			leaveActiveClass: 'transition-opacity duration-100 ease-linear',
			leaveToClass: 'opacity-0',
		},
	}));
</script>

<template>
	<Calendar :pt="calendarStyle" v-model="modelValue">
		<template #previousicon>
			<Icon name="chevron-left" class="ptCalendarIcon" />
		</template>
		<template #nexticon>
			<Icon name="chevron-right" class="ptCalendarIcon" />
		</template>
		<template #footer>
			<div class="grid grid-cols-2 items-center overflow-hidden border-t-[1px] border-t-border-mid p-4">
				<div class="flex items-center gap-3 justify-center">
					<Input class="max-w-[136px] w-full" placeholder="06.01.2022" />
					<span class="text-base text-fill-mid">-</span>
					<Input class="max-w-[136px] w-full" placeholder="06.01.2022" />
				</div>
				<div class="flex items-center justify-end gap-3">
					<Button variant="secondary" label="Отмена" />
					<Button variant="primary" label="Применить" />
				</div>
			</div>
		</template>
	</Calendar>
</template>

<style>
	.ptCalendarRoot {
		@apply inline-flex max-w-full relative;
	}

	.ptCalendarInput {
		@apply rounded-lg py-2.5 px-3.5 border-[1px] border-border-strong bg-base-white shadow-sm shadow-text-primary/5 outline-none outline-transparent ring-0 focus:border-accent-normal ring-transparent transition-all appearance-none hover:border-accent-normal text-base placeholder:text-text-tertiary text-text-primary font-medium placeholder:font-normal;
	}

	.ptCalendarTitle {
		@apply text-base text-text-secondary font-semibold;
	}

	.ptCalendarHeader {
		@apply flex items-center justify-between m-0;
	}

	.ptCalendarHeader > button.ptCalendarButton {
		@apply !block;
	}

	.ptCalendarTableHeaderCell {
		@apply px-2 py-2.5;
	}

	.ptCalendarTableHeaderCellLabel {
		@apply text-text-secondary text-sm font-medium;
	}

	.ptCalendarGroupContainer {
		@apply flex;
	}

	.ptCalendarGroup {
		@apply py-5 px-6 space-y-3 border-r-[1px] border-r-border-mid last:border-none;
	}

	.ptCalendarTable {
		@apply border-spacing-y-1 border-separate;
	}

	.ptCalendarTableBodyRow {
		@apply border-spacing-0;
	}

	.ptCalendarPanel {
		@apply bg-base-white rounded-lg border-[1px] border-grey-mid !mt-1;

		box-shadow: 0px 8px 8px -4px rgba(var(--text-primary), 0.03), 0px 20px 24px -4px rgba(var(--text-primary), 0.08);
	}

	.ptCalendarButton {
		@apply p-2;
	}

	.ptCalendarIcon {
		@apply w-5 h-5 text-fill-strong;
	}

	.ptCalendarDay:has(.ptCalendarDayLabel.ptCalendarDaySelected) {
		@apply bg-grey-light;
	}

	.ptCalendarDayLabel {
		@apply flex items-center justify-center text-text-secondary text-sm w-10 h-10 text-center p-1 cursor-pointer select-none;
	}
</style>
