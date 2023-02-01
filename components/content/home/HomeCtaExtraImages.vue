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
  <div class="hidden sm:max-w-md sm:ml-12 mt-4 sm:mt-10 sm:flex flex-col gap-6">
    <template v-for="image in images" :key="image.src">
      <NuxtImg
        :src="image.src"
        :alt="image.alt"
        class="rounded-lg"
        :width="image.width"
        :height="image.height"
        sizes="md:500px"
      />
    </template>
  </div>
</template>
