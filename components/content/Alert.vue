<script lang="ts" setup>
defineProps<{
  type: 'success' | 'error' | 'info' | 'warning'
}>()
</script>

<template>
  <div class="border rounded-lg p-4" :class="{
  'border-sky-300 bg-sky-50 text-sky-600': type === 'info',
}">
    <ContentSlot :use="$slots.default"></ContentSlot>
  </div>
</template>

<style scoped>
:deep(p) {
  margin: 0;
}
</style>
