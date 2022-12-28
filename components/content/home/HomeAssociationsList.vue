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
  return '/images/home/associations/' + src
}
</script>

<template>
  <div aria-hidden="true" :class="sectionClass" class="relative overflow-hidden flex flex-col gap-5">
    <div v-if="data" v-for="(line, index) in data.lines" :key="index" class="slider">
      <div class="slide-track" :class="index === 1 ? 'animation-reverse' : 'animation'">
        <template v-for="item in [...line, ...line]" :key="item.src">
          <div class="slide shrink-0 rounded-lg">
            <img :src="toImg(item.src)" :alt="item.alt">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-360px * v-bind(slidesPerView)));
    transform: translateX(calc(-360px * v-bind(slidesPerView)));
  }
}

.animation {
  -webkit-animation: scroll 80s linear infinite;
  animation: scroll 80s linear infinite;
}

.animation-reverse {
  -webkit-animation: scroll 80s linear infinite reverse;
  animation: scroll 80s linear infinite reverse;
}

.slider {
  margin: auto;
  position: relative;
}

.slider .slide-track {
  display: flex;
  width: calc(360px * (v-bind(slidesPerView) * 2));
}

.slide-track:hover {
  animation-play-state: paused;
}

.slider .slide {
  height: 200px;
  width: 360px;
}

.slider .slide img {
  width: 200px;
}
</style>
