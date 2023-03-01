<script setup lang="ts">
defineProps<{
  id?: string;
}>()
</script>

<template>
  <div :id="id">
    <h2 class="text-2xl text-black font-bold">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ul class="mt-4 flex flex-col gap-3">
      <ContentSlot :use="$slots.items" unwrap="p" />
    </ul>
  </div>
</template>
