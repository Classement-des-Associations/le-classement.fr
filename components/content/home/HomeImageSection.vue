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
    <NuxtImg
      class="rounded-2xl md:rounded-[2rem]"
      :src="image.src"
      :alt="image.alt"
      sizes="xs:500px sm:800px md:900px lg:1200px xl:1600px"
      loading="lazy"
    />
  </BaseSection>
</template>
