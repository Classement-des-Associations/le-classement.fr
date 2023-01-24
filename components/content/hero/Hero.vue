<script setup lang="ts">
import type { Part } from '~~/types/part.js'

const props = defineProps<{
  part: Part,
  withGraphics?: boolean
}>()

const colors = useColorsByPart(props.part)
</script>

<template>
  <section class="py-20 md:py-44 relative overflow-hidden">
    <template v-if="withGraphics">
      <GraphicsTriangles class="hidden blog:md:block blog:absolute blog:-left-32 blog:bottom-20" />
      <GraphicsRoundDots class="hidden blog:md:block blog:absolute blog:top-4 blog:-right-4" />
    </template>

    <div class="flex flex-col justify-center items-center gap-8 text-center">
      <h1
        class="text-3xl md:text-5xl font-bold text-transparent bg-clip-text blog:text-black  transition ease-in"
        :class="colors.backgroundGradient"
      >
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <p v-if="$slots.subtitle" class="max-w-3xl text-lg font-medium">
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </p>
    </div>

    <template v-if="$slots.actions">
      <ContentSlot :use="$slots.actions" unwrap="p" />
    </template>
  </section>
</template>
