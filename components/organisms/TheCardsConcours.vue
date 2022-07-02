<script setup>
const props = defineProps({
  progress: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <section class="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scroll-p-4 scroll-m-4">
    <MoleculesCardConcours v-for="item in props.progress" :key="item.number" :content="item"
      class="snap-start shrink-0 xl:shrink" />
  </section>
</template>