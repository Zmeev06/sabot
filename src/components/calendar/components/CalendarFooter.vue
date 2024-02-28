<script setup lang="ts">
import { Button } from '@//ui/button';
import { Input } from '@//ui/input';
</script>

<template>
  <div class="flex items-center justify-between gap-12 p-4">
    <div class="shrink-1 flex grow-0 items-center gap-3">
      <Input class="w-[136px] !font-normal" value="06.01.2022" />
      <div class="text-base text-fill-mid">–</div>
      <Input class="w-[136px] !font-normal" value="13.01.2022" />
    </div>
    <div class="flex items-center gap-3">
      <Button size="lg" variant="secondary" label="Отмена">Отмена</Button>
      <Button size="lg" label="Применить">Применить</Button>
    </div>
  </div>
</template>
