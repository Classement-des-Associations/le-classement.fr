<script setup>
const props = defineProps({
  progress: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <section class="flex w-full overflow-x-scroll snap-x snap-mandatory">
    <MoleculesCardConcours v-for="item in props.progress" :key="item.number" :content="item"
      class="m-6 snap-start shrink-0 xl:shrink" />
  </section>
</template>