<script lang="ts" setup>
const props = defineProps<{
  sectionClass?: string
  visible?: boolean
}>()

const observer = ref<IntersectionObserver>()
const root = ref<Element | null>(null)
const slideIn = ref(props.visible || false)

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
  <BaseSection :class="[!slideIn ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0', sectionClass]">
    <div ref="root">
      <Newsletter />
    </div>
  </BaseSection>
</template>
