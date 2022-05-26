<script setup>
const props = defineProps({
  fill: {
    type: Boolean,
    default: false
  },
})

const getClassName = function () {
  if (props.fill) {
    return 'bg-primary-base text-white'
  }

  return 'bg-white text-primary-base outline outline-2 outline-primary-base outline-offset-[-2px]'
}
</script>

<template>
  <NuxtLink class="text-sm leading-4 tracking-wider font-semibold px-4 py-3 rounded-[0.875rem]" :class="getClassName()">
    <slot />
  </NuxtLink>
</template>