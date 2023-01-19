<script setup lang="ts">
const { filled, white, disabled } = defineProps<{
  filled?: boolean
  white?: boolean
  disabled?: boolean
}>()

const linkClassNames = function () {
  const classNames = ['motion-safe:transition-all motion-safe:duration-300']

  if (filled) {
    classNames.push('py-3 px-4')
    if (white) {
      classNames.push('bg-white text-black')
    } else {
      classNames.push('bg-primary-base hover:bg-primary-light text-white')
    }
  } else {
    classNames.push('py-[0.625rem] px-[0.875rem] border-2')
    if (white) {
      classNames.push('border-white bg-transparent hover:bg-white text-white hover:text-black')
    } else {
      classNames.push('border-primary-base hover:border-primary-light text-primary-base hover:text-primary-light')
    }
  }

  if (disabled) { classNames.push('cursor-not-allowed opacity-70') }

  return classNames.join(' ')
}
</script>

<template>
  <NuxtLink
    class="flex flex-row items-center text-sm leading-4 tracking-wider font-semibold rounded-[0.875rem]"
    :class="linkClassNames()"
    :disabled="disabled"
  >
    <slot />
  </NuxtLink>
</template>
