<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'

defineProps<{
  sectionClass?: string;
  images: {
    src: string;
    alt: string;
    width: string | number;
    height: string | number;
  }[];
}>()

const { smaller } = useBreakpoints(breakpointsTailwind)
const xs = smaller('sm')

const slidesPerView = 5
const slideWidth = computed(() => {
  if (xs.value) {
    return '560px'
  } else {
    return '1000px'
  }
})
const imageWidth = computed(() => {
  if (xs.value) {
    return '520px'
  } else {
    return '860px'
  }
})
const imageHeight = 'auto'
const timing = computed(() => {
  if (xs.value) {
    return '60s'
  } else {
    return '80s'
  }
})
</script>

<template>
  <div aria-hidden="true" class="relative overflow-hidden" :class="sectionClass">
    <Slider
      :images="images"
      :slides-per-view="slidesPerView"
      :slide-width="slideWidth"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :timing="timing"
    >
      <template #default="{ image }">
        <img class="rounded-2xl md:rounded-[2rem]" :src="image.src" :alt="image.alt" :width="image.width" :height="image.height">
      </template>
    </Slider>
  </div>
</template>
