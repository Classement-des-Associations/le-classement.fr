<script lang="ts" setup>
const { toc } = useContent()

const props = defineProps<{
  anchors: HTMLAnchorElement[]
}>()

const visiblesAnchors = ref<string[]>([])

watch(() => props.anchors, (anchors) => {
  console.log(anchors.length)
  if (anchors.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLAnchorElement
        const href = target.getAttribute('href') ?? ''
        if (entry.isIntersecting && !visiblesAnchors.value.includes(href)) { visiblesAnchors.value.push(href) } else { visiblesAnchors.value = visiblesAnchors.value.filter(h => h !== href) }
      })
    })

    anchors.forEach((a) => {
      console.log(a)
      observer.observe(a)
    })
  }
})

</script>

<template>
  <div
    v-if="toc && toc.links"
    class="group max-w-xs p-4 shadow-lg border border-black/10 rounded-lg bg-primary-variation-2 overflow-hidden"
  >
    <div class="sr-only">
      Sommaire
    </div>
    <ul class="flex flex-col text-sm">
      <template v-for="link in toc.links" :key="link.text">
        <li
          :class="{ 'text-primary-base': visiblesAnchors.includes(`#${link.id}`), 'text-black/60 hover:text-black/90': !visiblesAnchors.includes(`#${link.id}`) }"
        >
          <NuxtLink
            :to="`#${link.id}`"
            class="lg:hidden lg:group-hover:block overflow-hidden whitespace-nowrap text-ellipsis py-1"
          >
            {{ link.text }}
          </NuxtLink>
          <span class="hidden lg:block lg:group-hover:hidden font-extrabold py-1">•</span>
        </li>
      </template>
    </ul>
  </div>
</template>
