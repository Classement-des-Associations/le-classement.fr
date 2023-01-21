<script setup lang="ts">
import { Part } from '~~/types/part'

const { part } = defineProps<{
  id: string
  sectionClass?: string
  part: Part
  icon: string
  maxTextWidth?: boolean
  topLineClass?: string
  bottomLineClass?: string
}>()

const colors = useColorsByPart(part)
</script>

<template>
  <BaseSection :id="id" :class="sectionClass">
    <div class="flex flex-col gap-4">
      <div class="w-7 flex flex-row justify-center">
        <div v-if="topLineClass" class="w-[3px] h-40 rounded-full bg-gradient-to-t" :class="topLineClass" />
      </div>

      <div class="flex flex-row gap-6">
        <Icon :name="icon" class="shrink-0 w-7 h-full" />

        <h2 class="text-2xl text-black font-medium">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
      </div>

      <div class="flex flex-row gap-6">
        <div class="shrink-0 w-7 flex flex-row justify-center">
          <div v-if="bottomLineClass" class="w-[3px] h-80 rounded-full bg-gradient-to-b" :class="bottomLineClass" />
        </div>

        <p class="text-5xl leading-tight font-semibold" :class="{ 'max-w-[60rem]': maxTextWidth }">
          <span
            v-if="$slots.textGradient"
            class="inline text-transparent bg-clip-text"
            :class="colors.backgroundGradient"
          >
            <ContentSlot :use="$slots.textGradient" unwrap="p" />
          </span>
          <span>&#8203;&#32;&#8203;</span>
          <span v-if="$slots.text" class="inline">
            <ContentSlot :use="$slots.text" unwrap="p" />
          </span>
        </p>
      </div>
    </div>

    <div
      v-if="$slots.extra"
      :class="{
        'mt-20': !bottomLineClass, 'mt-4': bottomLineClass
      }"
    >
      <ContentSlot :use="$slots.extra" />
    </div>
  </BaseSection>
</template>
