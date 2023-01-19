<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'

defineProps<{
  partners: {
    src: string
    alt: string
  }[]
}>()

const slider = ref()
const slides = ref([])

const skip = ref(1)

const atBeginning = ref(false)
const atEnd = ref(false)

/**
 * Move slide using a strategy
 *
 * @param strategy Function to tell how to move slide
 */
const to = function (strategy) {
  const current = slider.value.scrollLeft
  const offset = slider.value.firstElementChild.getBoundingClientRect().width
  slider.value.scrollTo({ left: strategy(current, offset), behavior: 'smooth' })
}

/**
 * Go the next slide using skip value
 */
const next = function () {
  to((current, offset) => current + (offset * skip.value))
}

/**
 * Go to previous slide using skip value
 */
const prev = function () {
  to((current, offset) => current - (offset * skip.value))
}

/**
 * Used to track slide
 */
const onIntersectionObserver = function (state) {
  const el = state[0]
  if (el.isIntersecting) {
    el.target.setAttribute('tabindex', '0')

    if (el.target === slides.value[0])
      atBeginning.value = true
    else if (el.target === slides.value[slides.value.length - 1])
      atEnd.value = true
  }
  else {
    el.target.setAttribute('tabindex', '-1')

    if (el.target === slides.value[0])
      atBeginning.value = false
    else if (el.target === slides.value[slides.value.length - 1])
      atEnd.value = false
  }
}
</script>

<template>
  <section
    tabindex="0" aria-labelledby="carousel-label" class="flex flex-row" @keydown.left="prev"
    @keydown.right="next"
  >
    <span id="carousel-label" class="sr-only">Carousel de nos partenaires</span>

    <button
      :tabindex="atBeginning ? -1 : 0" :class="{ 'opacity-50 cursor-not-allowed': atBeginning }" :aria-disabled="atBeginning"
      @click="prev"
    >
      <Icon name="heroicons:arrow-left-20-solid" class="w-6 h-6 md:w-20 md:h-20" />
      <span class="sr-only">Passer à l'item précédent</span>
    </button>

    <ul ref="slider" tabindex="0" class="md:ml-16 flex w-full overflow-x-scroll snap-x snap-mandatory no-scrollbar">
      <li
        v-for="partner in partners" :key="partner.src" ref="slides" v-intersection-observer="[onIntersectionObserver, { root: slider }]"
        class="snap-start px-9"
      >
        <img loading="lazy" :src="partner.src" class="max-w-none w-40 h-40 object-cover" :alt="partner.alt">
      </li>
    </ul>

    <button
      :tabindex="atEnd ? -1 : 0" :class="{ 'opacity-50 cursor-not-allowed': atEnd }" :aria-disabled="atEnd"
      class="md:ml-16" @click="next"
    >
      <Icon name="heroicons:arrow-left-20-solid" class="w-6 h-6 md:w-20 md:h-20 transform rotate-180" />
      <span class="sr-only">Passer à l'item suivant</span>
    </button>
  </section>
</template>
