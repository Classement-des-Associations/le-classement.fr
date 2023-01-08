<script lang="ts" setup>
import { Part } from '~~/types/part.js';

const { toc, page } = useContent()
useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: new Date(page.value.datePublished || Date.now()).toISOString(),
      dateModified: new Date(page.value.dateModified || Date.now()).toISOString()
    }
  )
])

const datetime = ref(new Date(page.value.datePublished || Date.now()))
const colors = useColorsByPart(page.value.part)

const proseClass = function (part: Part = 'classement') {
  switch (part) {
    case 'tour-asso':
      return 'prose-a:prose-p:bg-association prose-a:prose-p:decoration-accent-purple/40  hover:prose-a:prose-p:decoration-accent-purple'
    case 'discovery':
      return 'prose-a:prose-p:bg-vote prose-a:prose-p:decoration-primary-base/40 hover:prose-a:prose-p:decoration-primary-base'
    case 'concours':
    case 'ceremonie-finale':
    case 'classement':
      return 'prose-blockquote:border-primary-base prose-li:marker:text-primary-base prose-a:prose-p:bg-classement prose-a:prose-p:decoration-primary-variation-1/40 hover:prose-a:prose-p:decoration-primary-variation-1'
    case 'partenaires':
      return 'prose-a:prose-p:bg-partenaire prose-a:prose-p:decoration-accent-blue/40 hover:prose-a:prose-p:decoration-accent-blue'
    default:
      return ''
  }
}

const visiblesAnchors = ref<string[]>([])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target as HTMLAnchorElement
      const href = target.getAttribute('href') ?? ''
      if (entry.isIntersecting && !visiblesAnchors.value.includes(href)) {
        visiblesAnchors.value.push(href)
      } else {
        visiblesAnchors.value = visiblesAnchors.value.filter((h) => h !== href)
      }
    })
  })

  const anchors = document.querySelectorAll('h2 a')

  anchors.forEach((a) => {
    observer.observe(a)
  })
})
</script>

<template>
  <div class="bg-primary-variation-2">
    <div v-if="toc && toc.links"
      class="group hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 max-w-xs p-4 shadow-lg border border-black/10 rounded-lg bg-inherit overflow-hidden">
      <div class="sr-only">
        Sommaire
      </div>
      <ul class="flex flex-col text-sm">
        <template v-for="link in toc.links" :key="link.text">
          <li
            :class="{ 'text-primary-base': visiblesAnchors.includes(`#${link.id}`), 'text-black/60 hover:text-black/90': !visiblesAnchors.includes(`#${link.id}`) }">
            <NuxtLink :to="`#${link.id}`"
              class="lg:hidden lg:group-hover:block overflow-hidden whitespace-nowrap text-ellipsis py-1">
              {{ link.text }}
            </NuxtLink>
            <span class="hidden lg:block lg:group-hover:hidden font-extrabold py-1">•</span>
          </li>
        </template>
      </ul>
    </div>
    <article class="max-w-2xl mx-auto pt-16 sm:pt-32 px-4 flex flex-col">
      <div class="flex flex-col gap-4 items-start" :class="{ 'mb-6': page.image }">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent"
          :class="colors.backgroundGradient">
          {{ page.title }}
        </h1>
        <time class="text-sm text-black font-light order-first" :datetime="datetime.toISOString()">
          {{ datetime.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </time>
      </div>
      <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="rounded-2xl" loading="lazy">
      <div class="w-full mx-auto prose max-w-2xl prose-zinc prose-img:rounded-lg
        prose-a:prose-headings:no-underline prose-a:prose-headings:font-semibold
        prose-a:transition-all prose-a:ease-in  prose-a:prose-p:font-semibold prose-a:prose-p:bg-clip-text prose-a:prose-p:text-transparent
        " :class="proseClass(page.type)">
        <slot />
      </div>
    </article>
  </div>
</template>
