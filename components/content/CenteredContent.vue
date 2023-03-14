<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
}>()
</script>

<template>
  <div :class="sectionClass" class="not-prose flex flex-row justify-center">
    <ContentSlot :use="$slots.content" />
  </div>
</template>
