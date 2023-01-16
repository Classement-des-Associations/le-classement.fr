<script setup lang="ts">
defineProps<{
  sectionClass?: string
  topButtonText?: string
  topButtonHref?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <div class="flex flex-row items-center gap-12">
      <div class="flex flex-col items-start gap-6">
        <BaseNuxtLink v-if="topButtonHref" :to="topButtonHref" class="bg-zinc-100 hover:bg-zinc-200" small>
          {{ topButtonText }}
        </BaseNuxtLink>
        <h1 class="text-black text-7xl font-bold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p class="text-black text-2xl">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </p>
        <div class="flex flex-row gap-6 items-center">
          <ClassementLink v-if="primaryButtonHref" :to="primaryButtonHref">
            {{ primaryButtonText }}
          </ClassementLink>
          <BaseNuxtLink v-if="secondaryButtonHref" :to="secondaryButtonHref">
            {{ secondaryButtonText }}
          </BaseNuxtLink>
        </div>
      </div>
      <HomeTrophy />
    </div>
  </BaseSection>
</template>
