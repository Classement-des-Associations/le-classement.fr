<script setup>
import { vIntersectionObserver } from '@vueuse/components'

const props = defineProps({
  years: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['year'])


const slider = ref()

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
 * Observe slide to track current year
 */
const onIntersectYear = function (year) {
  return function (state) {
    const el = state[0]
    if (el.isIntersecting) {
      emit('year', year)
    }
  }
}
</script>

<template>
  <section class="flex flex-row justify-between items-center" tabindex="0" @keydown.left="prev" @keydown.right="next"
    aria-labelledby="carousel-label">
    <span id="carousel-label" class="sr-only">Carousel des années du classement des associations</span>

    <button @click="prev" :tabindex="atBeginning ? -1 : 0" :class="{ 'opacity-50 cursor-not-allowed': atBeginning }"
      :aria-disabled="atBeginning">
      <AtomsIconsChevronRight class="h-16 w-16 transform rotate-180" />
      <span class="sr-only">Passer à l'item précédent</span>
    </button>

    <ul tabindex="0" class="flex flex-row w-full overflow-x-scroll snap-x snap-mandatory" ref="slider">
      <li v-for="year in props.years" :key="year"
        class="py-4 text-8xl font-extrabold w-full shrink-0 snap-start text-center">
        <h2 v-intersection-observer="[onIntersectYear(year), { root: slider }]">
          {{ year }}
        </h2>
      </li>
    </ul>

    <button @click="next" :tabindex="atEnd ? -1 : 0" :class="{ 'opacity-50 cursor-not-allowed': atEnd }"
      :aria-disabled="atEnd" class="md:ml-16">
      <AtomsIconsChevronRight class="h-16 w-16" />
      <span class="sr-only">Passer à l'item suivant</span>
    </button>
  </section>
</template>