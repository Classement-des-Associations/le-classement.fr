<script lang="ts" setup>
import { Part } from '~~/types/part'

const props = defineProps<{
  sectionClass?: string;
  part: Part;
  actionText?: string;
  actionHref?: string;
}>()

const colors = useColorsByPart(props.part)

const observer = ref<IntersectionObserver>()
const root = ref<Element | null>(null)
const slideIn = ref(false)

const observerCallback = (entries: IntersectionObserverEntry[]) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      slideIn.value = true
    }
  })

onBeforeMount(() => {
  observer.value = new IntersectionObserver(observerCallback)
})

onMounted(() => root.value && observer.value?.observe(root.value))

onBeforeUnmount(() => observer.value?.disconnect())
</script>

<template>
  <BaseSection :class="[!slideIn ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0', sectionClass]" class="relative transition duration-700 flex flex-col md:flex-row">
    <div ref="root" class="flex flex-row">
      <div class="shrink-0 w-5 sm:w-7 flex flex-row justify-center">
        <div class="w-[3px] rounded-full" :class="colors.lineColor" />
      </div>

      <div class="mt-10">
        <div class="ml-6 sm:ml-14 flex flex-col gap-3 md:gap-5 items-start">
          <p class="max-w-[40rem] text-lg sm:text-2xl font-medium">
            <span :class="colors.textColor" class="font-semibold">
              <ContentSlot :use="$slots.textColor" unwrap="p" />
            </span>
            <span>&nbsp;</span>
            <span class="text-black">
              <ContentSlot :use="$slots.text" unwrap="p" />
            </span>
          </p>

          <NuxtLink
            v-if="actionHref"
            class="flex flex-row items-center gap-2 text-lg sm:text-2xl text-black font-medium hover:underline hover:underline-offset-4"
            :to="actionHref"
          >
            {{ actionText }}
            <Icon name="heroicons:chevron-right" class="w-4 sm:w-6 h-4 sm:h-6" />
          </NuxtLink>
        </div>

        <div v-if="$slots.didYouKnowValue" class="relative -left-3  sm:-left-4 mt-12 mb-24 sm:mb-32 flex flex-row gap-10 items-center">
          <img
            :src="`/assets/home/images/decorations/${part}.png`"
            alt="Décoration"
            class="h-80 w-auto"
            aria-hidden="true"
            width="171"
            height="1280"
          >
          <div class="flex flex-col gap-4 items-start">
            <p
              class="border rounded-full px-2 py-0.5 text-sm font-normal"
              :class="[colors.textColor, colors.borderColor]"
            >
              Le
              saviez-vous ?
            </p>

            <p class="max-w-lg flex flex-col gap-2">
              <span class="text-4xl sm:text-6xl font-medium" :class="colors.textColor">
                <ContentSlot :use="$slots.didYouKnowValue" unwrap="p" />
              </span>
              <span class="text-black text-base sm:text-xl font-medium">
                <ContentSlot :use="$slots.didYouKnowExplanation" unwrap="p" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="$slots.extra">
      <ContentSlot :use="$slots.extra" unwrap="p" />
    </div>
  </BaseSection>
</template>
