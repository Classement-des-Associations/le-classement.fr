<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  images: {
    src: string;
    alt: string;
  }[];
}>();

const slidesPerView = 5;
const slideWidth = '1000px';
const imageWidth = '860px';
const imageHeight = 'auto';
</script>

<template>
  <div aria-hidden="true" class="relative overflow-hidden" :class="sectionClass">
    <HomeSlider :images="images" :slides-per-view="slidesPerView" :slide-width="slideWidth" :image-width="imageWidth"
      :image-height="imageHeight">
      <template #default="{ image }">
        <img class="rounded-[2rem]" :src="image.src" :alt="image.alt">
      </template>
    </HomeSlider>
  </div>
</template>
