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
    <div class="flex flex-row items-center gap-12">
      <div class="my-8 w-full flex flex-col items-center sm:items-start gap-y-8">
        <BaseNuxtLink v-if="topButtonLink && topButtonText" :button-link="topButtonLink" :button-text="topButtonText" class="bg-zinc-100 hover:bg-zinc-200" small />
        <h1 class="text-black text-center sm:text-start text-5xl md:text-7xl font-bold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p class="text-black text-center sm:text-start text-2xl">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ClassementLink v-if="primaryButtonLink && primaryButtonText" :button-link="primaryButtonLink" :button-text="primaryButtonText" part="classement" />
          <BaseNuxtLink v-if="secondaryButtonLink && secondaryButtonText" :button-link="secondaryButtonLink" :button-text="secondaryButtonText" right-icon="heroicons:chevron-right" />
        </div>
      </div>
      <HomeTrophy v-if="false" />
    </div>
  </BaseSection>
</template>
