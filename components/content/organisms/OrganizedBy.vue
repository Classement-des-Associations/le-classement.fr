<script setup lang="ts">
defineProps<{
  organizers: {
    src: string,
    alt: string,
    href: string
  }[],
}>()
</script>

<template>
  <section class="px-4 max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
    <AtomsSectionTitle>
      <Markdown :use="$slots.default" unwrap="p" />
    </AtomsSectionTitle>
    <div
      class="mt-11 px-4 md:py-6 grid grid-cols-1 gap-20 md:gap-2 md:grid-cols-3 justify-items-center place-items-center">
      <NuxtLink v-for="organizer in organizers" :key="organizer.href" :to="organizer.href" rel="noopener"
        target="_blank">
        <img loading="lazy" :src="organizer.src" :alt="organizer.alt" />
      </NuxtLink>
    </div>
  </section>
</template>