<script setup lang="ts">
</script>

<template>
  <section class="pt-12 pb-20">
    <GraphicsTriangles></GraphicsTriangles>
    <GraphicsRoundDots></GraphicsRoundDots>

    <div class="flex flex-col justify-center items-center gap-8 text-center">
      <h1 class="text-2xl md:text-5xl font-bold">
        <ContentSlot :use="$slots.title" unwrap="p"></ContentSlot>
      </h1>
      <p v-if="$slots.subtitle" class="max-w-3xl text-lg">
        <ContentSlot :use="$slots.subtitle" unwrap="p"></ContentSlot>
      </p>
    </div>

    <template v-if="$slots.actions">
      <ContentSlot :use="$slots.actions" unwrap="p"></ContentSlot>
    </template>
  </section>
</template>
