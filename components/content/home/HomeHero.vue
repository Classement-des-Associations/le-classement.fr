<script setup lang="ts">
defineProps<{
  sectionClass?: string
  topButtonText?: string
  topButtonLink?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <div class="flex flex-col items-start gap-6">
      <BaseNuxtLink v-if="topButtonLink" :to="topButtonLink" class="bg-zinc-100 hover:bg-zinc-200" small>
        {{ topButtonText }}
      </BaseNuxtLink>
      <h1 class="text-black text-7xl font-bold">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <p class="text-black text-2xl">
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </p>
      <div class="flex flex-row gap-6 items-center">
        <BaseNuxtLink v-if="primaryButtonLink" :to="primaryButtonLink"
          class="relative gradient-border-2 border-gradient-br-associations-white before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-primary-base before:to-primary-variation-1 before:blur-md before:z-[-1]">
          {{ primaryButtonText }}
        </BaseNuxtLink>
        <BaseNuxtLink v-if="secondaryButtonLink" :to="secondaryButtonLink">
          {{ secondaryButtonText }}
        </BaseNuxtLink>
      </div>
    </div>
  </BaseSection>
</template>
