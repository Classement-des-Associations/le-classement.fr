<script setup>
const props = defineProps({
  fill: {
    type: Boolean,
    default: false
  },
  white: {
    type: Boolean,
    default: false
  },
})

const getClassName = function () {
  const classNames = ['motion-safe:transition-all motion-safe:duration-300']

  if (props.fill) {
    classNames.push('bg-primary-base hover:bg-primary-variation-1 text-white')
  } else {
    if (props.white) {
      classNames.push('bg-transparent text-white outline outline-2 outline-white outline-offset-[-2px] hover:bg-white hover:text-black')
    } else {
      classNames.push('bg-white text-primary-base outline outline-2 outline-primary-base outline-offset-[-2px] hover:text-primary-variation-1 hover:outline-primary-variation-1')
    }
  }

  return classNames.join(' ')
}
</script>

<template>
  <NuxtLink class="text-sm leading-4 tracking-wider font-semibold px-4 py-3 rounded-[0.875rem]" :class="getClassName()">
    <slot />
  </NuxtLink>
</template>