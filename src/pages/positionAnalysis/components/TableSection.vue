<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TableFilters from './TableFilters.vue';
import TableFiltersToggler from './TableFiltersToggler.vue';
import { Toggler } from '@//components/toggler';

import { columns, Table } from '@//modules/positionTable';
import { responseData } from '@//modules/positionTable';
import type { Response } from '../../../modules/positionTable';

const data = ref<Response[]>([]);

async function getData(): Promise<Response[]> {
  return responseData;
}

onMounted(async () => {
  data.value = await getData();
});
</script>

<template>
  <div>
    <Toggler class="flex-col-reverse space-y-6">
      <template #default="{ toggle, state }">
        <TableFiltersToggler
          @toggle="toggle"
          :state="state"
          :class="{ 'mb-6': state === 'opened' }"
        />
      </template>
      <template #content="{ state }">
        <TableFilters :class="{ 'mb-6': state === 'opened' }" />
      </template>
    </Toggler>
    <Table :columns="columns" :data="data" />
  </div>
</template>
