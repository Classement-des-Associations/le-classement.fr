<script setup lang="ts">
defineProps<{
  partners: {
    src: string,
    alt: string,
    href: string
  }[]
}>()
</script>


<template>
  <section class="px-4 max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
    <AtomsSectionTitle>
      <Markdown :use="$slots.default" unwrap="p" />
    </AtomsSectionTitle>
    <ul class="mt-11 grid grid-cols-2 md:grid-cols-5">
      <li v-for="partner in partners" :ley="partner.src">
        <a :href="partner.href" target="_blank" rel="noopener">
          <img loading="lazy" :src="partner.src" :alt="partner.alt">
        </a>
      </li>
    </ul>
  </section>
</template>