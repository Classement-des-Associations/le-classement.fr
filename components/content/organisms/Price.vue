<script setup lang="ts">
defineProps<{
  src: string,
  alt: string
}>()
</script>

<template>
  <section class="py-14 md:py-[6.25rem] px-4 bg-ultra-light-grey md:bg-white">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center">
      <img loading="lazy" :src="src" :alt="alt" class="w-32 mx-auto md:w-auto" />
      <div class="mt-10 md:mt-0 md:ml-[6.25rem]">
        <AtomsSectionTitle>
          <ContentSlot :use="$slots.default" unwrap="p" />
        </AtomsSectionTitle>
        <p class="mt-8 text-sm">
          <ContentSlot :use="$slots.text" unwrap="p" />
        </p>
      </div>
    </div>
  </section>
</template>