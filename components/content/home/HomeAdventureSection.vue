<script lang="ts" setup>
defineProps<{
  sectionClass?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}>()

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
  <BaseSection :class="[!slideIn ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0', sectionClass]" class="relative transition duration-700">
    <div
      class="absolute -z-10 -left-32 sm:-left-40 -top-52 sm:-top-80 w-[18rem] sm:w-[26rem] h-[18rem] sm:h-[26rem] rounded-full blur-[72px] bg-center-classement opacity-50"
    />

    <div ref="root" class="relative flex flex-col xl:flex-row xl:items-center">
      <div class="flex flex-col">
        <p class="text-xl font-medium">
          <ContentSlot :use="$slots.overTitle" unwrap="p" />
        </p>

        <h2 class="mt-2 text-3xl sm:text-5xl font-bold">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>

        <p class="mt-6 text-xl sm:text-2xl text-zinc-600 font-regular">
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </p>
      </div>

      <div class="flex-grow mt-6 xl:mt-0 xl:mb-4 relative flex flex-row items-center xl:justify-end gap-5">
        <ClassementLink v-if="primaryButtonLink && primaryButtonText" :button-link="primaryButtonLink" :button-text="primaryButtonText" part="classement" />
        <NuxtLink :to="secondaryButtonLink">
          {{ secondaryButtonText }}
        </NuxtLink>
      </div>
    </div>
  </BaseSection>
</template>
