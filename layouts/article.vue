<script lang="ts" setup>
import { Gradient } from '~~/types/gradient';

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
const gradient = useGradient(page.value.type)

const proseClass = function (type: Gradient = 'classement') {
  switch (type) {
    case 'classement':
      return 'prose-blockquote:border-primary-base prose-li:marker:text-primary-base prose-a:prose-p:bg-classement prose-a:prose-p:decoration-primary-variation-1/40 hover:prose-a:prose-p:decoration-primary-variation-1'
    default:
      return ''
  }
}
</script>

<template>
  <div class="bg-primary-variation-2">
    <div v-if="toc && toc.links"
      class="group hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 max-w-xs p-4 shadow-lg border border-primary-base/60 rounded-lg bg-inherit overflow-hidden">
      <div class="sr-only">
        Sommaire
      </div>
      <ul class="flex flex-col gap-2 text-sm">
        <template v-for="link in toc.links" :key="link.text">
          <li>
            <NuxtLink :to="`#${link.id}`"
              class="lg:hidden lg:group-hover:block text-zinc-500 hover:text-zinc-800 overflow-hidden whitespace-nowrap text-ellipsis">
              {{ link.text }}
            </NuxtLink>
            <span class="hidden lg:block lg:group-hover:hidden">•</span>
          </li>
        </template>
      </ul>
    </div>
    <article class="max-w-2xl mx-auto pt-16 sm:pt-32 px-4 flex flex-col">
      <div class="flex flex-col gap-4 items-start" :class="{ 'mb-6': page.image }">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent" :class="gradient">
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
