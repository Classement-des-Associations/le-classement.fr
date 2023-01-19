<script setup>
defineProps(['alt', 'src'])
</script>

<template>
  <section class="lg:px-[7.5rem] py-14 lg:py-[4.375rem] bg-ultra-light-grey">
    <div
      class="px-4 lg:px-0 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-[4.5rem] text-center md:text-left"
    >
      <img loading="lazy" class="rounded-full w-36 h-36 object-cover object-right" :src="src" :alt="alt">
      <figure class="flex flex-col space-y-4">
        <p class="text-lg">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </p>
        <blockquote>
          <figcaption class="text-lg font-semibold">
            <ContentSlot :use="$slots.author" unwrap="p" />
          </figcaption>
        </blockquote>
      </figure>
    </div>
  </section>
</template>
