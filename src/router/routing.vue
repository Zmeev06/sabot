<script setup lang="ts">
	import { Header } from '../components/header';
	import { Navbar } from '../modules/navbar';
	import { PageTabs } from '../modules/pageLinkTabs';
</script>

<template>
	<div class="my-3 h-full w-full rounded-l-[32px] bg-base-white px-8 pb-12 pt-6 text-text-primary">
		<Header class="-mx-8 mb-6 border-b-[1px] border-b-border-mid px-8">
			<template #navbar>
				<Navbar />
			</template>
			<template #actions>
				<div>Actions</div>
			</template>
		</Header>
		<div>
			<PageTabs class="mb-6" />
			<RouterView />
		</div>
	</div>
</template>
