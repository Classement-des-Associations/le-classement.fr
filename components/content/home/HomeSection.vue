<script setup lang="ts">
import { Gradient } from '~~/types/gradient';

const { gradient } = defineProps<{
  id: string
  sectionClass?: string
  gradient?: Gradient
  icon: string
  maxTextWidth?: boolean
  bottomLine?: boolean
}>()

const gradientBg = useGradient(gradient);
</script>

<template>
  <BaseSection :class="sectionClass" :id="id">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-6">
        <Icon :name="icon" class="shrink-0 w-7 h-full" />
        <h2 class="text-2xl text-black font-medium">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
      </div>

      <div class="flex flex-row gap-6">
        <div class="w-7 flex flex-row justify-center">
          <div v-if="bottomLine"
            class="w-[3px] h-80 rounded-full bg-gradient-to-b from-primary-base via-accent-purple to-accent-purple/0">
          </div>
        </div>
        <p class="text-5xl leading-tight font-semibold" :class="{ 'max-w-[60rem]': maxTextWidth }">
          <span v-if="$slots.textGradient" class="inline text-transparent bg-clip-text" :class="gradientBg">
            <ContentSlot :use="$slots.textGradient" unwrap="p" />
            &nbsp;
          </span>
          <span v-if="$slots.text" class="inline">
            <ContentSlot :use="$slots.text" unwrap="p" />
          </span>
        </p>
      </div>
    </div>

    <div v-if="$slots.extra" class="mt-20">
      <ContentSlot :use="$slots.extra" />
    </div>
  </BaseSection>
</template>
