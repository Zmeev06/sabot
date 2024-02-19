<script setup lang="ts">
	import { sidebarItems } from '../constants/sidebar';
</script>

<template>
	<div class="px-4 py-3 border-r-[1px] border-r-border-mid">
		<ul>
			<li
				v-for="item in sidebarItems"
				:key="item.text"
				class="mb-1 w-full px-[6px] last:mb-0 hover:bg-grey-50 transition-colors rounded-lg">
				<button class="w-full px-2.5 py-[9px] text-left text-sm font-medium text-text-secondary">
					{{ item.text }}
				</button>
			</li>
		</ul>
	</div>
</template>
