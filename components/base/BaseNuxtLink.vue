<script setup lang="ts">
const props = defineProps<{
  small?: boolean
  type?: 'primary'
}>()

const className = computed(() => {
  switch (props.type) {
    case 'primary':
      return 'px-4 py-2 rounded-md bg-primary-base hover:bg-primary-base/80 font-medium text-black focus-visible:ring-primary-base hover:focus-visible:ring-primary-base/80'
    default:
      return ''
  }
})
</script>


<template>
  <NuxtLink
    class="inline-flex items-center focus:outline-none focus-visible:outline-none focus-visible:ring-offset-2 focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed transition duration-200"
    :class="[{
      'rounded-lg px-4 py-2 text-base': !small,
      'rounded-[0.25rem] px-[0.375rem] py-1 text-xs': small,
    }, className]">
    <slot />
  </NuxtLink>
</template>
