<script lang="ts" setup>
defineProps<{
  images: {
    src: string;
    alt: string;
    width: string | number;
    height: string | number;
  }[];
}>()
</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
    <template v-for="image in images" :key="image.src">
      <img
        :width="image.width"
        :height="image.height"
        :src="image.src"
        :alt="image.alt"
        class="rounded-[1.25rem]"
        loading="lazy"
      >
    </template>
  </div>
</template>
