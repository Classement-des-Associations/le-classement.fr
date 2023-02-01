<script setup lang="ts">
const props = defineProps<{
  left?: boolean
  accent?: 'blue' | 'purple'
  action?: {
    text: string
    to: string
  }
  image: {
    src: string
    alt: string
  }
}>()

const isPurple = props.accent === 'purple'
const isBlue = props.accent === 'blue'
</script>

<template>
  <section
    class="flex flex-col-reverse gap-10 xl:gap-16 2xl:gap-[6.25rem] pb-[4.5rem] xl:pb-0"
    :class="{ 'xl:flex-row': !left, 'xl:space-x-reverse xl:flex-row-reverse': left, 'bg-accent-purple text-white': isPurple, 'bg-accent-blue text-white': isBlue }"
  >
    <div
      class="w-full flex-grow flex flex-col justify-center items-center xl:items-start px-4 xl:px-0"
      :class="{ 'xl:ml-20 2xl:ml-[7.5rem]': !left, 'xl:mr-20  2xl:mr-[7.5rem]': left }"
    >
      <div class="w-full space-y-8">
        <h2 class="text-2xl md:text-[1.75rem] font-bold">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </h2>
        <div class="flex flex-col space-y-4 text-sm leading-[1.25rem]">
          <slot name="text" />
        </div>
      </div>
      <AtomsAppLink v-if="action" class="mt-10 xl:mt-14" :white="isPurple || isBlue" :to="action.to">
        {{ action.text }}
      </AtomsAppLink>
    </div>
    <img
      :src="image.src"
      :alt="image.alt"
      loading="lazy"
      class="row-start-1 lg:row-auto w-full max-h-96 lg:max-h-max xl:w-[46rem] 2xl:w-[50rem] 4xl:w-[56rem] h-[38rem] object-cover"
      :class="{ 'xl:col-start-2 xl:row-start-1': left }"
    >
  </section>
</template>
