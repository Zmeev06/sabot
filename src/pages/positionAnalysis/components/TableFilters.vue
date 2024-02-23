<script setup lang="ts">
	import { ref } from 'vue';
	import { Icon } from '../../../ui/icon';
	import { SearchBox } from '../../../components/searchBox';
	import { Tooltip } from '../../../ui/tooltip';
	import { Dropdown } from '../../../ui/dropdown';
	import { Button } from '../../../ui/button';
	import { Badge } from '../../../ui/badge';

	const selectedCity = ref();
	const cities = ref([
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' },
	]);
</script>

<template>
	<div class="space-y-4">
		<div class="flex items-center gap-2">
			<SearchBox
				v-model="selectedCity"
				:options="cities"
				optionLabel="name"
				placeholder="Поиск"
				class="max-w-[1036px] w-full" />
			<Tooltip
				heading="Заголовок подсказки"
				body="Это последовательность символов, которую пользователь вводит в поисковую строку, чтобы найти интересующую его информацию. Формат поискового запроса зависит как от устройства поисковой системы, так и от типа информации для поиска.">
				<Icon name="help-circle" class="tooltip-trigger" />
			</Tooltip>
		</div>
		<div class="flex items-center gap-2">
			<Dropdown
				v-model="selectedCity"
				:options="cities"
				placeholder="Запрос"
				optionLabel="name"
				class="dropdown-filter" />
			<Tooltip
				heading="Заголовок подсказки"
				body="Это последовательность символов, которую пользователь вводит в поисковую строку, чтобы найти интересующую его информацию. Формат поискового запроса зависит как от устройства поисковой системы, так и от типа информации для поиска.">
				<Icon name="help-circle" class="tooltip-trigger" />
			</Tooltip>
			<Dropdown
				v-model="selectedCity"
				:options="cities"
				placeholder="Строго равен"
				optionLabel="name"
				class="dropdown-filter" />
			<Tooltip
				heading="Заголовок подсказки"
				body="Это последовательность символов, которую пользователь вводит в поисковую строку, чтобы найти интересующую его информацию. Формат поискового запроса зависит как от устройства поисковой системы, так и от типа информации для поиска.">
				<Icon name="help-circle" class="tooltip-trigger" />
			</Tooltip>
			<Dropdown
				v-model="selectedCity"
				:options="cities"
				placeholder="Значение"
				optionLabel="name"
				class="dropdown-filter" />
			<Tooltip
				heading="Заголовок подсказки"
				body="Это последовательность символов, которую пользователь вводит в поисковую строку, чтобы найти интересующую его информацию. Формат поискового запроса зависит как от устройства поисковой системы, так и от типа информации для поиска.">
				<Icon name="help-circle" class="tooltip-trigger" />
			</Tooltip>
			<Button class="h-full" variant="secondary" label="И" />
			<Button class="h-full" variant="secondary" label="Или" />
			<Button variant="secondary" size="sm" error icon="close" />
		</div>
		<div class="flex items-center gap-2 py-2">
			<span class="font-secondary text-text-primary text-lg font-medium">Готовые фильтры:</span>
			<Tooltip
				heading="Заголовок подсказки"
				body="Это последовательность символов, которую пользователь вводит в поисковую строку, чтобы найти интересующую его информацию. Формат поискового запроса зависит как от устройства поисковой системы, так и от типа информации для поиска.">
				<Icon name="help-circle" class="tooltip-trigger" />
			</Tooltip>
			<Badge size="lg">Выпали из ТОП 10</Badge>
			<Badge size="lg">Рост в ТОП 10</Badge>
			<Badge size="lg">Сильная просадка</Badge>
			<Badge size="lg">В ТОП 10</Badge>
			<Badge size="lg">Близко к ТОП 10</Badge>
		</div>
		<div class="flex items-center gap-3">
			<Button class="w-[184px]" size="lg" variant="primary" label="Применить" />
			<Button class="w-[184px]" size="lg" variant="secondary" label="Очистить" />
		</div>
	</div>
</template>

<style scoped>
	.tooltip-trigger {
		@apply w-5 h-5 text-fill-light;
	}

	.dropdown-filter {
		@apply max-w-[340px] flex-grow flex-shrink;
	}
</style>
