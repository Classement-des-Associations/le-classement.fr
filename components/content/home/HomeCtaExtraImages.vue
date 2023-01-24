<script lang="ts" setup>
defineProps<{
  images: {
    src: string
    alt: string
    width: string | number
    height: string | number
  }[]
}>()
</script>

<template>
  <div class="sm:max-w-md sm:ml-12 flex flex-col gap-6">
    <template v-for="image in images" :key="image.src">
      <img :src="image.src" :alt="image.alt" class="rounded-lg" :width="image.width" :height="image.height">
    </template>
  </div>
</template>
