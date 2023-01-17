<script lang="ts" setup>
import { Part } from '~~/types/part';

const { part } = defineProps<{
  sectionClass?: string;
  part: Part;
  actionText: string;
  actionHref: string;
}>();

const colors = useColorsByPart(part);

</script>

<template>
  <BaseSection :class="sectionClass">
    <div class="flex flex-row">
      <div class="shrink-0 w-7 flex flex-row justify-center">
        <div class="w-[3px] rounded-full" :class="colors.lineColor">
        </div>
      </div>

      <div class="mt-10">
        <div class="ml-14 flex flex-col gap-5 items-start">
          <p class="max-w-[40rem] text-2xl font-medium">
            <span :class="colors.textColor" class="font-semibold">
              <ContentSlot :use="$slots.textColor" unwrap="p" />
            </span>
            <span>&nbsp;</span>
            <span class="text-black">
              <ContentSlot :use="$slots.text" unwrap="p" />
            </span>
          </p>

          <NuxtLink
            class="flex flex-row items-center gap-2 text-2xl text-black font-medium hover:underline hover:underline-offset-4"
            :to="actionHref">
            {{ actionText }}
            <Icon name="heroicons:chevron-right" class="w-6 h-6" />
          </NuxtLink>
        </div>

        <div class="relative -left-4 mt-12 mb-32 flex flex-row gap-10 items-center">
          <img :src="`/assets/home/images/decorations/${part}.png`" alt="Décoration" class="h-80 w-auto" aria-hidden="true"
            width="171" height="1280">
          <div class="flex flex-col gap-4 items-start">
            <p class="border rounded-full px-2 py-0.5 text-sm font-normal"
              :class="[colors.textColor, colors.borderColor]">
              Le
              saviez-vous ?
            </p>

            <p class="max-w-lg flex flex-col gap-2">
              <span class="text-6xl font-medium" :class="colors.textColor">
                <ContentSlot :use="$slots.didYouKnowValue" unwrap="p" />
              </span>
              <span class="text-black text-xl font-medium">
                <ContentSlot :use="$slots.didYouKnowExplanation" unwrap="p" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <ContentSlot :use="$slots.extra" unwrap="p" />
      </div>

    </div>
  </BaseSection>
</template>
