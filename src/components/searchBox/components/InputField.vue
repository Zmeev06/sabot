<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from 'vue';

	import { Icon } from '../../../ui/icon';

	import InputText from 'primevue/inputtext';
	import IconField from 'primevue/iconfield';
	import InputIcon from 'primevue/inputicon';

	const modelValue = defineModel();
	const isFocused = ref(false);
	const input = ref<InstanceType<typeof InputText>>();
	const root = ref<InstanceType<typeof IconField>>();

	withDefaults(
		defineProps<{
			icon?: string;
			iconPosition?: string;
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
		:data-focused="isFocused"
		class="inline-flex rounded-lg py-2.5 px-3.5 items-center gap-2 border-[1px] border-border-strong bg-base-white shadow-sm shadow-text-primary/5 transition-all hover:border-accent-normal cursor-text"
		:class="{ '!border-accent-normal': isFocused }"
		ref="root">
		<InputIcon>
			<Icon
				:name="icon"
				class="w-5 h-5 text-fill-mid transition-colors"
				:class="{ 'text-text-primary': isFocused }" />
		</InputIcon>
		<InputText
			class="bg-transparent outline-none outline-transparent ring-0 ring-transparent appearance-none text-base placeholder:text-text-tertiary text-text-primary font-medium placeholder:font-normal"
			data-input-field
			v-model="modelValue"
			v-bind="$attrs"
			@blur="blur"
			ref="input" />
	</IconField>
</template>
