<script lang="ts" setup>
import { vIntersectionObserver } from '@vueuse/components'


defineProps<{ id: string, path: string, images: { src: string, alt: string }[] }>()

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
const to = function (strategy: (current: number, offset: number) => number) {
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
const onIntersectionObserver = function (state: IntersectionObserverEntry[]) {
  const el = state[0]
  if (el.isIntersecting) {
    el.target.setAttribute('tabindex', '0')

    if (el.target === slides.value[0]) {
      atBeginning.value = true
    } else if (el.target === slides.value[slides.value.length - 1]) {
      atEnd.value = true
    }
  }
  else {
    el.target.setAttribute('tabindex', '-1')

    if (el.target === slides.value[0]) {
      atBeginning.value = false
    } else if (el.target === slides.value[slides.value.length - 1]) {
      atEnd.value = false
    }
  }

}
</script>

<template>
  <div tabindex="0" :aria-labelledby="id" class="not-prose flex flex-row gap-2" @keydown.left="prev"
    @keydown.right="next">
    <span :id="id" class="sr-only">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </span>

    <button @click="prev" :tabindex="atBeginning ? -1 : 0" :class="{ 'opacity-50 cursor-not-allowed': atBeginning }"
      :aria-disabled="atBeginning">
      <Icon name="heroicons:chevron-left" class="w-6 h-6 md:w-10 md:h-10" />
      <span class="sr-only">Passer à l'item précédent</span>
    </button>

    <ul tabindex="0" class="w-full flex overflow-x-scroll snap-x snap-mandatory no-scrollbar list-none gap-4"
      ref="slider">
      <template v-for="image in images" :key="image.alt">
        <li class="snap-start shrink-0 w-full flex flex-col gap-1" ref="slides"
          v-intersection-observer="[onIntersectionObserver, { root: slider }]">
          <img :src="`${path}${image.src}`" :alt="image.alt" class="object-cover rounded-lg" loading="lazy">
          <p class="italic text-center text-sm text-zinc-400">
            {{ image.alt }}
          </p>
        </li>
      </template>
    </ul>

    <button @click="next" :tabindex="atEnd ? -1 : 0" :class="{ 'opacity-50 cursor-not-allowed': atEnd }"
      :aria-disabled="atEnd">
      <Icon name="heroicons:chevron-right" class="w-6 h-6 md:w-10 md:h-10" />
      <span class="sr-only">Passer à l'item suivant</span>
    </button>
  </div>
</template>
