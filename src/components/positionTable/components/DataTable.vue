<script setup lang="ts">
	import DataTable from 'primevue/datatable';
	import Column from 'primevue/column';

	interface IColumn {
		id: string | number;
		field: string;
		header: string;
	}

	defineProps<{
		value: any[];
		columns: IColumn[];
	}>();
</script>

<template>
	<DataTable>
		<Column v-for="col in columns" :key="col.id" :field="col.field" :header="col.header"> </Column>
	</DataTable>
</template>
