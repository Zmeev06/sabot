<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue';

	import { Icon } from '@//ui/icon';

	import InputText from 'primevue/inputtext';
	import IconField from 'primevue/iconfield';
	import InputIcon from 'primevue/inputicon';
	import { Nullable } from 'primevue/ts-helpers';

	const modelValue = defineModel<Nullable<string>>();
	const isFocused = ref(false);
	const input = ref<InstanceType<typeof InputText>>();
	const root = ref<InstanceType<typeof IconField>>();

	withDefaults(
		defineProps<{
			icon?: string;
			iconPosition?: string;
			disabled?: boolean;
		}>(),
		{
			icon: 'search',
			iconPosition: 'left',
		}
	);

	const emit = defineEmits<{
		focus: [e: Event];
	}>();

	onMounted(() => document.addEventListener('click', click));
	onUnmounted(() => document.removeEventListener('click', click));

	function click(e: Event) {
		// @ts-expect-error
		if ((e.target === root.value?.$el || root.value?.$el.contains(e.target)) && !isFocused.value) {
			focus(e);
			// @ts-expect-error
			input.value?.$el.focus();
		}
	}

	function focus(e: Event) {
		emit('focus', e);
		isFocused.value = true;
	}

	function blur() {
		isFocused.value = false;
	}
</script>

<template>
	<IconField
		iconPosition="right"
		class="inline-flex rounded-lg py-1.5 px-3.5 xl:py-2.5 xl:px-3.5 items-center gap-2 border-[1px] border-border-strong bg-base-white shadow-sm shadow-text-primary/5 transition-all hover:border-accent-normal cursor-text"
		:class="{
			'!border-accent-normal': isFocused && !disabled,
			'bg-grey-light hover:border-border-strong cursor-default': disabled,
		}"
		ref="root">
		<InputIcon>
			<Icon
				:name="icon"
				class="w-5 h-5 text-fill-mid transition-colors flex-shrink-0"
				:class="{ 'text-text-primary': isFocused }" />
		</InputIcon>
		<InputText
			class="bg-transparent border-none border-transparent ring-0 ring-transparent outline-none appearance-none text-base placeholder:text-text-tertiary text-text-primary font-medium placeholder:font-normal disabled:text-fill-mid overflow-hidden"
			data-input-field
			v-model="modelValue"
			:disabled="disabled"
			v-bind="$attrs"
			@blur="blur"
			ref="input" />
	</IconField>
</template>
