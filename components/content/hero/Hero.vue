<script setup lang="ts">
import { Part } from "~~/types/part.js";

const { part } = defineProps<
  { part: Part }
>()

const colors = useColorsByPart(part)
</script>

<template>
  <section class="py-20 md:py-44 relative overflow-hidden blog:bg-primary-lighter">
    <GraphicsTriangles class="hidden blog:md:block blog:absolute blog:-left-32 blog:bottom-20"></GraphicsTriangles>
    <GraphicsRoundDots class="hidden blog:md:block blog:absolute blog:top-4 blog:-right-4"></GraphicsRoundDots>

    <div class="flex flex-col justify-center items-center gap-8 text-center">
      <h1 class="text-3xl md:text-5xl font-bold text-transparent bg-clip-text blog:text-black"
        :class="colors.backgroundGradient">
        <ContentSlot :use="$slots.title" unwrap="p"></ContentSlot>
      </h1>
      <p v-if="$slots.subtitle" class="max-w-3xl text-lg font-medium">
        <ContentSlot :use="$slots.subtitle" unwrap="p"></ContentSlot>
      </p>
    </div>

    <template v-if="$slots.actions">
      <ContentSlot :use="$slots.actions" unwrap="p"></ContentSlot>
    </template>
  </section>
</template>
