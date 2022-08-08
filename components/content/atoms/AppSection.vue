<script setup>
defineProps(['id']);
</script>

<template>
  <section class="mb-[4.5rem] md:mb-32 mt-14 md:mt-[6.375rem] px-4" :id="id ?? ''">
    <div class="max-w-screen-xl mx-auto">
      <AtomsAppSectionTitle>
        <Markdown :use="$slots.title" unwrap="p" />
      </AtomsAppSectionTitle>
      <slot></slot>
    </div>
  </section>
</template>