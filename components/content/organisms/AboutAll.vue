<script setup lang="ts">
defineProps<{
  organizers: {
    src: string
    alt: string
    href: string
  }[]
}>()
</script>

<template>
  <section class="bg-ultra-light-grey py-14 md:py-24">
    <div class="px-4 max-w-screen-xl mx-auto space-y-14 md:space-y-24">
      <p class="text-base md:text-lg md:leading-[1.125rem]">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 justify-items-center">
        <NuxtLink
          v-for="organizer in organizers" :key="organizer.href" :to="organizer.href" rel="noopener"
          target="_blank"
        >
          <img loading="lazy" :src="organizer.src" :alt="organizer.alt">
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
