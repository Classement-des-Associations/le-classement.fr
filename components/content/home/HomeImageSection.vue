<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  image: {
    src: string;
    alt: string;
    width: string | number;
    height: string | number;
  }
}>();
</script>

<template>
  <BaseSection :class="sectionClass">
    <img class="rounded-3xl" :src="image.src" :alt="image.alt" :width="image.width" :height="image.height"
      loading="lazy">
  </BaseSection>
</template>
