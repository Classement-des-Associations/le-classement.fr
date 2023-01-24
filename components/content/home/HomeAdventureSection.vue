<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}>()
</script>

<template>
  <BaseSection :class="sectionClass" class="relative">
    <div
      class="absolute -z-10 -left-32 sm:-left-40 -top-52 sm:-top-80 w-[18rem] sm:w-[26rem] h-[18rem] sm:h-[26rem] rounded-full blur-[72px] bg-center-classement opacity-50"
    />

    <div class="relative">
      <div class="flex flex-col">
        <p class="text-xl font-medium">
          <ContentSlot :use="$slots.overTitle" unwrap="p" />
        </p>

        <h2 class="mt-2 text-3xl sm:text-5xl font-bold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>

        <p class="mt-6 text-lg sm:text-2xl text-zinc-600 font-regular">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </p>
      </div>

      <div class="mt-6 relative flex flex-row items-center gap-5">
        <ClassementLink v-if="primaryButtonHref" :to="primaryButtonHref">
          {{ primaryButtonText }}
        </ClassementLink>
        <NuxtLink :to="secondaryButtonHref">
          {{ secondaryButtonText }}
        </NuxtLink>
      </div>
    </div>
  </BaseSection>
</template>
