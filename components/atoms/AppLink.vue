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
  disabled: {
    type: Boolean,
    default: false
  },
})

const getClassName = function () {
  const classNames = ['motion-safe:transition-all motion-safe:duration-300']

  if (props.fill) {
    if (props.white) {
      classNames.push('py-3 px-4 bg-white text-black')
    } else {
      classNames.push('py-3 px-4 bg-primary-base hover:bg-primary-variation-1 text-white')
    }
  } else {
    if (props.white) {
      classNames.push('py-[0.625rem] px-[0.875rem] bg-transparent text-white border-2 border-white hover:bg-white hover:text-black')
    } else {
      classNames.push('py-[0.625rem] px-[0.875rem] text-primary-base border-2 border-primary-base hover:text-primary-variation-1 hover:border-primary-variation-1')
    }
  }

  if(props.disabled) {
    classNames.push('cursor-not-allowed opacity-70')
  }

  return classNames.join(' ')
}
</script>

<template>
  <NuxtLink class="flex flex-row items-center text-sm leading-4 tracking-wider font-semibold rounded-[0.875rem]" :class="getClassName()" :disabled="props.disabled">
    <slot />
  </NuxtLink>
</template>