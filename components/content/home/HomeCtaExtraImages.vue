<script lang="ts" setup>
defineProps<{
  images: {
    src: string
    alt: string
  }[]
}>()
</script>

<template>
  <div class="max-w-md ml-12 flex flex-col gap-6">
    <template v-for="image in images" :key="image.src">
      <img :src="image.src" :alt="image.alt" class="rounded-lg" />
    </template>
  </div>
</template>
