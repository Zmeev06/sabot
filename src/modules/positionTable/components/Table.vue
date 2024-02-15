<script setup lang="ts">
	import TableHeader from './TableHeader.vue';
	import DataTable from 'primevue/datatable';
	import Column from 'primevue/column';

	import { ref, onMounted } from 'vue';
	import { ProductService } from '../constants/ProductService';

	onMounted(() => {
		ProductService.getProductsMini().then((data) => (products.value = data));
	});

	const products = ref();
</script>

<template>
	<div class="shadow-sm shadow-text-primary/5 outline outline-1 outline-border-mid rounded-xl overflow-hidden">
		<TableHeader class="border-b-[1px] border-b-border-heavy" />
		<DataTable :value="products" class="w-full">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
		</DataTable>
	</div>
</template>
