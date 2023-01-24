<script setup lang="ts">
defineProps<{
  partners: {
    src: string
    alt: string
  }[]
}>()
</script>

<template>
  <section class="px-4 max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
    <AtomsSectionTitle>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </AtomsSectionTitle>
    <OrganismsTheCarouselPartners class="mt-11 px-4" :partners="partners" />
  </section>
</template>
