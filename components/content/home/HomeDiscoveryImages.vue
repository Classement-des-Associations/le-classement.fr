<script lang="ts" setup>
defineProps<{
  images: {
    src: string;
    alt: string;
  }[];
}>();
</script>

<template>
  <div class="w-full flex flex-row gap-16">
    <template v-for="image in images" :key="image.src">
      <img width="608" height="400" :src="image.src" :alt="image.alt" class="rounded-[1.25rem]" loading="lazy">
    </template>
  </div>
</template>
