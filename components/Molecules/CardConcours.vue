<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <article class="w-[14rem] px-6 pt-10 pb-12 bg-white rounded-[1.25rem] shadow-default">
    <span class="text-primary-variation-1 text-[1.75rem] font-bold">{{ props.content.number }}</span>
    <h3 class="mt-4 text-lg font-semibold">{{ props.content.title }}</h3>
    <p class="mt-2 text-xs leading-5">
      {{ props.content.text }}
    </p>
    <p class="mt-6 text-primary-variation-1 text-sm font-bold">{{ props.content.date }}</p>
  </article>
</template>