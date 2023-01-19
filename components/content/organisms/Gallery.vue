<script setup lang="ts">
defineProps<{
  hrefImages: string
  images: { src: string; alt: string }[]
}>()
</script>

<template>
  <section class="mt-14">
    <AtomsSectionTitle class="px-4 max-w-screen-xl mx-auto">
      Galerie Photos
    </AtomsSectionTitle>
    <ul class="mt-11 grid grid-cols-2 md:grid-cols-5">
      <li v-for="image in images" :key="image.src" class="relative group h-full w-full">
        <NuxtLink :to="hrefImages">
          <div class="aspect-square">
            <img loading="lazy" :src="image.src" :alt="image.alt" class="object-cover w-full h-full">
          </div>
          <div
            class="opacity-0 absolute inset-0 bg-black group-hover:opacity-50 motion-safe:transition-all motion-safe:duration-300"
          />
          <div
            class="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center motion-safe:transition-all motion-safe:duration-300"
          >
            <Icon name="instagram" class="w-10 h-10 text-white" />
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
