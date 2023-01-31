<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  image: {
    src: string;
    alt: string;
    width: string | number;
    height: string | number;
  }
}>()
</script>

<template>
  <BaseSection :class="sectionClass" class="relative z-10">
    <img
      class="rounded-2xl md:rounded-[2rem]"
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      loading="lazy"
    >
  </BaseSection>
</template>
