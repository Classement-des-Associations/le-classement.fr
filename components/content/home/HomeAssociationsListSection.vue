<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

defineProps<{
  sectionClass?: string
}>()

const { data } = await useHomeAssociations()

const toImg = function (src: string) {
  return 'assets/home/images/associations/' + src
}

const { smaller } = useBreakpoints(breakpointsTailwind)
const xs = smaller('sm')

const slidesPerView = 9
const slideWidth = computed(() => {
  if (xs.value) {
    return '160px'
  } else {
    return '360px'
  }
})
const imageWidth = computed(() => {
  if (xs.value) {
    return '100px'
  } else {
    return '200px'
  }
})
const imageHeight = imageWidth
const timing = computed(() => {
  if (xs.value) {
    return '40s'
  } else {
    return '40s'
  }
})
</script>

<template>
  <div v-if="data" aria-hidden="true" :class="sectionClass" class="relative overflow-hidden flex flex-col gap-6">
    <HomeSlider
      v-for="(line, index) in data.lines"
      :key="index"
      :images="line"
      :reversed="index === 1"
      :slides-per-view="slidesPerView"
      :slide-width="slideWidth"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :timing="timing"
    >
      <template #default="{ image }">
        <img class="rounded-lg" :src="toImg(image.src)" :alt="image.alt" :width="imageWidth" :height="imageHeight">
      </template>
    </HomeSlider>
  </div>
</template>
