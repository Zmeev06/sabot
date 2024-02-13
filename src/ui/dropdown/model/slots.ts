import type { DropdownSlotName } from '../constants/slots';

export function isDropdownSlot(slotName: string): slotName is DropdownSlotName {
	const validSlots: DropdownSlotName[] = [
		'value',
		'header',
		'footer',
		'option',
		'optiongroup',
		'emptyfilter',
		'empty',
		'content',
		'loader',
		'clearicon',
		'dropdownicon',
		'loadingicon',
		'filtericon',
	];

	return validSlots.includes(slotName as DropdownSlotName);
}
