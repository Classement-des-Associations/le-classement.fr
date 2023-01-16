<script setup lang="ts">
const { filled, white, disabled } = defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const classNames = function () {
  const names = []

  if (filled) {
    names.push('py-3 px-4')
    if (white)
      names.push('bg-white text-black hover:bg-white hover:bg-opacity-[85%]')
    else
      names.push('bg-primary-base text-white hover:bg-primary-base hover:bg-opacity-[85%]')
  }
  else {
    names.push('py-[0.625rem] px-[0.875rem] border-2')
    if (white)
      names.push('border-white bg-transparent hover:bg-white/10 hover:text-black')
    else
      names.push('border-primary-base hover:border-primary-base text-primary-base hover:bg-primary-base/10')
  }

  if (disabled)
    names.push('')

  return names.join(' ')
}
</script>

<template>
  <NuxtLink
    class="flex flex-row items-center text-sm leading-4 tracking-wider font-semibold rounded-[0.875rem]  cursor-pointer disabled:cursor-not-allowed disabled:opacity-70
    motion-safe:transition-colors motion-safe:duration-300" :class="classNames()" :disabled="disabled"
  >
    <ContentSlot :use="$slots.default" unwrap="p" />
  </NuxtLink>
</template>
