<script setup lang="ts">
defineProps<{
  partners: {
    name: string;
    src: string,
    alt: string,
    href: string
  }[]
}>()
</script>


<template>
  <section class="px-4 max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
    <AtomsSectionTitle>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </AtomsSectionTitle>
    <ul class="mt-11 grid grid-cols-2 md:grid-cols-5 items-center justify-center">
      <li v-for="partner in partners" :ley="partner.src">
        <NuxtLink :to="partner.href">
          <div class="aspect-w-square aspect-h-square">
            <img loading="lazy" :src="partner.src" :alt="partner.alt" class=" object-contain">
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
