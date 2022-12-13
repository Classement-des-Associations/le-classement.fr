<script setup lang="ts">
import { Gradient } from "~~/types/gradient";

const { type } = defineProps<
  { type: Gradient }
>()

const router = useRouter()
const gradient = useGradient(type)

const isBlog = computed(() => router.currentRoute.value.path.includes('blog'))
</script>

<template>
  <section class="py-20 md:py-44">
    <template v-if="isBlog">
      <GraphicsTriangles></GraphicsTriangles>
      <GraphicsRoundDots></GraphicsRoundDots>
    </template>

    <div class="flex flex-col justify-center items-center gap-8 text-center">
      <h1 class="text-3xl md:text-5xl font-bold"
        :class="[!isBlog && gradient, { 'text-transparent bg-clip-text': !isBlog, 'text-black': isBlog }]">
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
