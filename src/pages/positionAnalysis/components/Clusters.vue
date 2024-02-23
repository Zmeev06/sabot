<script setup lang="ts">
import { ref } from 'vue';
import { SearchBox } from '../../../components/searchBox';
import { Icon } from '../../../ui/icon';
import { Tree } from '../../../ui/tree';

const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

const selectedKey = ref(null);
const nodes = ref([
  {
    key: '0',
    label: 'Introduction',
    children: [
      {
        key: '0-0',
        label: 'What is Vue.js?',
        data: 'https://vuejs.org/guide/introduction.html#what-is-vue',
        type: 'url'
      },
      {
        key: '0-1',
        label: 'Quick Start',
        data: 'https://vuejs.org/guide/quick-start.html#quick-start',
        type: 'url'
      },
      {
        key: '0-2',
        label: 'Creating a Vue Application',
        data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application',
        type: 'url'
      },
      {
        key: '0-3',
        label: 'Conditional Rendering',
        data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering',
        type: 'url'
      }
    ]
  },
  {
    key: '1',
    label: 'Components In-Depth',
    children: [
      {
        key: '1-0',
        label: 'Component Registration',
        data: 'https://vuejs.org/guide/components/registration.html#component-registration',
        type: 'url'
      },
      {
        key: '1-1',
        label: 'Props',
        data: 'https://vuejs.org/guide/components/props.html#props',
        type: 'url'
      },
      {
        key: '1-2',
        label: 'Components Events',
        data: 'https://vuejs.org/guide/components/events.html#component-events',
        type: 'url'
      },
      {
        key: '1-3',
        label: 'Slots',
        data: 'https://vuejs.org/guide/components/slots.html#slots',
        type: 'url'
      }
    ]
  },
  {
    key: '2',
    label: 'Components In-Depth',
    children: [
      {
        key: '2-0',
        label: 'Component Registration',
        data: 'https://vuejs.org/guide/components/registration.html#component-registration',
        type: 'url'
      },
      {
        key: '2-1',
        label: 'Props',
        data: 'https://vuejs.org/guide/components/props.html#props',
        type: 'url'
      },
      {
        key: '2-2',
        label: 'Components Events',
        data: 'https://vuejs.org/guide/components/events.html#component-events',
        type: 'url'
      },
      {
        key: '2-3',
        label: 'Slots',
        data: 'https://vuejs.org/guide/components/slots.html#slots',
        type: 'url'
      }
    ]
  },
  {
    key: '3',
    label: 'Components In-Depth',
    children: [
      {
        key: '3-0',
        label: 'Component Registration',
        data: 'https://vuejs.org/guide/components/registration.html#component-registration',
        type: 'url'
      },
      {
        key: '3-1',
        label: 'Props',
        data: 'https://vuejs.org/guide/components/props.html#props',
        type: 'url'
      },
      {
        key: '3-2',
        label: 'Components Events',
        data: 'https://vuejs.org/guide/components/events.html#component-events',
        type: 'url'
      },
      {
        key: '3-3',
        label: 'Slots',
        data: 'https://vuejs.org/guide/components/slots.html#slots',
        type: 'url'
      }
    ]
  },
  {
    key: '4',
    label: 'Components In-Depth',
    children: [
      {
        key: '4-0',
        label: 'Component Registration',
        data: 'https://vuejs.org/guide/components/registration.html#component-registration',
        type: 'url'
      },
      {
        key: '4-1',
        label: 'Props',
        data: 'https://vuejs.org/guide/components/props.html#props',
        type: 'url'
      },
      {
        key: '4-2',
        label: 'Components Events',
        data: 'https://vuejs.org/guide/components/events.html#component-events',
        type: 'url'
      },
      {
        key: '4-3',
        label: 'Slots',
        data: 'https://vuejs.org/guide/components/slots.html#slots',
        type: 'url'
      }
    ]
  },
  {
    key: '5',
    label: 'Components In-Depth',
    children: [
      {
        key: '5-0',
        label: 'Component Registration',
        data: 'https://vuejs.org/guide/components/registration.html#component-registration',
        type: 'url'
      },
      {
        key: '5-1',
        label: 'Props',
        data: 'https://vuejs.org/guide/components/props.html#props',
        type: 'url'
      },
      {
        key: '5-2',
        label: 'Components Events',
        data: 'https://vuejs.org/guide/components/events.html#component-events',
        type: 'url'
      },
      {
        key: '5-3',
        label: 'Slots',
        data: 'https://vuejs.org/guide/components/slots.html#slots',
        type: 'url'
      }
    ]
  }
]);
</script>

<template>
  <div
    class="grid grid-rows-[auto_1fr] rounded-xl border-[1px] border-border-mid bg-grey-light p-4 xl:p-[22px]"
  >
    <div class="mb-4 flex items-center gap-4">
      <SearchBox
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Поиск по группам"
        class="max-h-9 w-full flex-shrink"
      />
      <button>
        <Icon name="show-more" class="h-5 w-5 text-fill-light" />
      </button>
    </div>
    <div class="scrollbar -mr-[18px] overflow-auto">
      <Tree :value="nodes" v-model="selectedKey" selectionMode="checkbox" />
    </div>
  </div>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  @apply w-2;
}

.scrollbar::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
  @apply rounded-lg bg-border-mid;
}
</style>
