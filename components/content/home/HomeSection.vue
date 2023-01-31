<script setup lang="ts">
import { Part } from '~~/types/part'

const props = defineProps<{
  id: string
  sectionClass?: string
  part: Part
  icon: string
  maxTextWidth?: boolean
  topLineClass?: string
  bottomLineClass?: string
  visible?: boolean
}>()

const colors = useColorsByPart(props.part)

const observer = ref<IntersectionObserver>()
const root = ref<Element | null>(null)
const slideIn = ref(props.visible)

const observerCallback = (entries: IntersectionObserverEntry[]) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      slideIn.value = true
    }
  })

onBeforeMount(() => {
  if (props.visible) { return }
  observer.value = new IntersectionObserver(observerCallback)
})

onMounted(() => root.value && observer.value?.observe(root.value))

onBeforeUnmount(() => observer.value?.disconnect())
</script>

<template>
  <BaseSection :id="id" class="relative transition duration-700" :class="[!slideIn ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0', sectionClass]">
    <div ref="root" class="flex flex-col gap-4">
      <div class="w-5 sm:w-7 flex flex-row justify-center">
        <div v-if="topLineClass" class="w-[3px] h-40 rounded-full bg-gradient-to-t" :class="topLineClass" />
      </div>

      <div class="flex flex-row gap-6">
        <Icon :name="icon" class="shrink-0 w-5 sm:w-7 h-full" />

        <h2 class="text-lg sm:text-2xl text-black font-medium">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
      </div>

      <div class="flex flex-row gap-6 ">
        <div class="shrink-0 w-5 sm:w-7 flex flex-row justify-center">
          <div v-if="bottomLineClass" class="w-[3px] rounded-full bg-gradient-to-b" :class="bottomLineClass" />
        </div>

        <p class="text-2xl sm:text-3xl md:text-5xl leading-tight font-semibold" :class="{ 'max-w-[60rem]': maxTextWidth, 'mb-12 md:mb-28': bottomLineClass }">
          <span
            v-if="$slots.textGradient"
            class="inline text-transparent bg-clip-text"
            :class="colors.backgroundGradient"
          >
            <ContentSlot :use="$slots.textGradient" unwrap="p" />
          </span>
          <span>&#8203;&#32;&#8203;</span>
          <span v-if="$slots.text" class="inline">
            <ContentSlot :use="$slots.text" unwrap="p" />
          </span>
        </p>
      </div>
    </div>

    <div
      v-if="$slots.extra"
      :class="{
        'mt-10 sm:mt-20': !bottomLineClass, 'mt-4': bottomLineClass
      }"
    >
      <ContentSlot :use="$slots.extra" />
    </div>
  </BaseSection>
</template>
