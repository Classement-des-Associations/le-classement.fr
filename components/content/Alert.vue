<script lang="ts" setup>
defineProps<{
  type: 'success' | 'error' | 'info' | 'warning'
}>()
</script>

<template>
  <div class="border rounded-lg p-4 text-black" :class="{
  'border-blue-300 bg-blue-50': type === 'info',
}">
    <ContentSlot :use="$slots.default"></ContentSlot>
  </div>
</template>

<style scoped>
:deep(p) {
  margin: 0;
}
</style>
