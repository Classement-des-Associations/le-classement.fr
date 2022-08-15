<script setup>
import { vIntersectionObserver } from '@vueuse/components'

const props = defineProps({
  experiences: {
    type: Object,
    default: () => ({}),
  },
})

const slider = ref()
const currentSlide = ref(0)

function goTo(indice) {
  currentSlide.value = indice
  const offset = slider.value.firstElementChild.getBoundingClientRect().width
  const left = offset * indice
  slider.value.scrollTo({ left, behavior: 'smooth' })
}

const isCurrentSlide = function (indice) {
  return currentSlide.value === indice
}

/**
 * Handle intersection with slides
 */
const onIntersectionSlide = function (indice) {
  return function (state) {
    const el = state[0]

    if (el.isIntersecting) {
      currentSlide.value = indice
    }
  }
}
</script>

<template>
  <section class="relative">
    <div class="flex flex-row text-white overflow-x-scroll snap-x snap-mandatory no-scrollbar" ref="slider"
      tabindex="0">
      <article v-for="(experience, indice) in props.experiences" :key="experience.title"
        class="px-4 pt-14 pb-[7.5rem] w-screen shrink-0 snap-start" :class="experience['background-color']"
        v-intersection-observer="[onIntersectionSlide(indice), { root: slider }]">
        <AtomsSectionTitle>{{ experience.title }}</AtomsSectionTitle>
        <p class="mt-8 text-sm">{{ experience.text }}</p>
      </article>
    </div>
    <div
      class="absolute flex flex-row justify-center items-center gap-[0.875rem] bottom-14 left-1/2 transform -translate-x-1/2">
      <button v-for="value in Object.keys(props.experiences).length" :key="value"
        class="bg-white rounded-full transition-all"
        :class="{ 'w-4 h-4 mx-[0.125rem] shrink-0 opacity-50': !isCurrentSlide(value - 1), 'w-5 h-5 opacity-100': isCurrentSlide(value - 1) }"
        @click="goTo(value - 1)" :tabindex="isCurrentSlide(value - 1) ? '-1' : '0'"
        :disabled="isCurrentSlide(value - 1) ? true : false"></button>
    </div>
  </section>
</template>