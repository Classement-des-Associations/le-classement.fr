<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

defineProps<{
  sectionClass?: string
}>()

const { smaller } = useBreakpoints(breakpointsTailwind)
const xs = smaller('sm')

const slidesPerView = computed(() => {
  if (xs.value) {
    return 3
  } else {
    return 9
  }
})

const { data } = await useHomeAssociations()

const toImg = function (src: string) {
  return 'assets/home/images/associations/' + src
}

const slideWidth = '360px'
const imageWidth = '200px'
const imageHeight = '200px'
</script>

<template>
  <div aria-hidden="true" :class="sectionClass" class="relative overflow-hidden flex flex-col gap-5">
    <HomeSlider v-if="data" v-for="(line, index) in data.lines" :key="index" :images="line" :reversed="index === 1"
      :slides-per-view="slidesPerView" :slide-width="slideWidth" :image-width="imageWidth" :image-height="imageHeight">
      <template #default="{ image }">
        <img class="rounded-lg" :src="toImg(image.src)" :alt="image.alt" :width="imageWidth" :height="imageHeight">
      </template>
    </HomeSlider>
  </div>
</template>
