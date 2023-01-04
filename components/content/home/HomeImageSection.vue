<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  image: {
    src: string;
    alt: string;
  }
}>();
</script>

<template>
  <BaseSection :class="sectionClass">
    <img class="rounded-3xl" :src="image.src" :alt="image.alt" width="1280" height="700" loading="lazy">
  </BaseSection>
</template>
