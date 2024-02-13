<script setup lang="ts">
	import { ref } from 'vue';
	import OverlayPanel from 'primevue/overlaypanel';
	import ProfileHeader from './ProfileHeader.vue';
	import ContentItemGroup from './ContentItemGroup.vue';
	import { Icon } from '../../../ui/icon';

	import { headerData } from '../constants/header';
	import { contentGroups } from '../constants/links';

	const op = ref<InstanceType<typeof OverlayPanel>>();
	const toggle = (event: Event) => {
		op.value?.toggle(event);
	};

	const profileOverlayStyle = ref({
		root: 'ptProfileOverlayRoot',
		transition: {
			enterFromClass: 'opacity-0 scale-y-[0.8]',
			enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
			leaveActiveClass: 'transition-opacity duration-100 ease-linear',
			leaveToClass: 'opacity-0',
		},
	});
</script>

<template>
	<div>
		<button @click="toggle">
			<slot />
		</button>
		<OverlayPanel ref="op" :pt="profileOverlayStyle">
			<div>
				<ProfileHeader v-bind="headerData" class="border-b-[1px] border-b-border-mid" />
				<ContentItemGroup
					v-for="(group, index) in contentGroups"
					:key="index"
					:group="group"
					class="border-b-[1px] border-b-border-mid" />
				<div class="py-1 px-1.5">
					<button
						class="w-full flex items-center gap-2 p-2.5 rounded-md transition-colors hover:bg-border-mid">
						<Icon name="logout" class="w-4 h-4 text-fill-extra" />
						<span class="text-sm text-text-secondary">Выйти</span>
					</button>
				</div>
			</div>
		</OverlayPanel>
	</div>
</template>

<style>
	.ptProfileOverlayRoot {
		@apply rounded-lg border-[1px] border-base-white bg-base-white shadow-md;

		box-shadow: 0px 4px 6px -2px rgba(var(--text-primary), 0.03), 0px 12px 16px -4px rgba(var(--text-primary), 0.08);
	}
</style>
