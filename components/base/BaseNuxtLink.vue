<script setup lang="ts">
defineProps<{
  small?: boolean
}>()
</script>


<template>
  <NuxtLink
    class="inline-flex items-center text-black font-medium focus:outline-none focus:ring-offset-white focus-visible:ring-2 disabled:cursor-not-allowed transition duration-200"
    :class="{
  'rounded-lg px-4 py-2 text-base': !small,
  'rounded-[0.25rem] px-[0.375rem] py-1 text-xs': small,
}">
    <slot />
  </NuxtLink>
</template>
