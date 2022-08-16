<script setup>
defineProps(['id']);
</script>

<template>
  <section class="mb-[4.5rem] md:mb-32 mt-14 md:mt-[6.375rem] px-4" :id="id ?? ''">
    <div class="max-w-screen-xl mx-auto">
      <AtomsSectionTitle>
        <ContentSlot :use="$slots.default" unwrap="p" />
      </AtomsSectionTitle>
      <slot name="groups"></slot>
    </div>
  </section>
</template>