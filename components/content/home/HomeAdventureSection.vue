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
      class="absolute -z-10 -left-40 -top-80 w-[26rem] h-[26rem] rounded-full blur-[72px] bg-center-classement opacity-50"
    />

    <div class="relative">
      <p class="text-xl font-medium">
        <ContentSlot :use="$slots.overTitle" unwrap="p" />
      </p>

      <div class="mt-2 flex flex-row justify-between items-center">
        <h2 class="text-5xl font-bold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>

        <div class="relative flex flex-row items-center gap-5">
          <ClassementLink v-if="primaryButtonHref" :to="primaryButtonHref">
            {{ primaryButtonText }}
          </ClassementLink>
          <NuxtLink :to="secondaryButtonHref">
            {{ secondaryButtonText }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <p class="mt-5 text-2xl text-zinc-600 font-regular">
      <ContentSlot :use="$slots.subtitle" unwrap="p" />
    </p>
  </BaseSection>
</template>
