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
      <div class="my-8 w-full flex flex-col items-center sm:items-start gap-y-8">
        <BaseNuxtLink v-if="topButtonHref" :to="topButtonHref" class="bg-zinc-100 hover:bg-zinc-200" small>
          {{ topButtonText }}
        </BaseNuxtLink>
        <h1 class="text-black text-center sm:text-start text-5xl md:text-7xl font-bold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <p class="text-black text-center sm:text-start text-2xl">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ClassementLink v-if="primaryButtonHref" :to="primaryButtonHref" part="classement">
            {{ primaryButtonText }}
          </ClassementLink>
          <BaseNuxtLink v-if="secondaryButtonHref" :to="secondaryButtonHref">
            {{ secondaryButtonText }}
            <Icon name="heroicons:chevron-right" class="w-4 h-4 ml-2" />
          </BaseNuxtLink>
        </div>
      </div>
      <HomeTrophy v-if="false" />
    </div>
  </BaseSection>
</template>
