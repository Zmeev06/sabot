<script setup lang="ts">
import { Routing } from './router';
import { Sidebar } from './modules/sidebar';
import { SvgSprite } from './components/svgSprite';
</script>

<template>
  <div class="flex h-full min-h-screen w-full">
    <Sidebar />

    <Routing />
    <SvgSprite />
  </div>
</template>
