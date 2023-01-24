<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="w-full h-full flex text-white bg-blue-500 items-center justify-center">
    <h1 :style="{ fontSize: '70px' }">
      {{ title }}
    </h1>
    <img src="/preview.png" alt="cover" width="320" height="320">
  </div>
</template>
