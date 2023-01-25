<script lang="ts" setup>
import type { Part } from '~~/types/part.js'

const { page } = useContent()

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: useDateToISOString(page.value.datePublished),
      dateModified: useDateToISOString(page.value.dateModified)
    }
  )
])

const datetime = useDateToISOString(page.value.datePublished)
const formattedDate = useDateToLocaleDateString(page.value.datePublished)

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

const anchors = ref<HTMLAnchorElement[]>([])

onMounted(() => {
  // Because of this page transition, we need to wait for the DOM to be updated
  setTimeout(() => {
    anchors.value = Array.from(document.querySelectorAll('.prose a'))
  }, 300)
})
</script>

<template>
  <LayoutSection>
    <BlogToc class="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-20" :anchors="anchors" />

    <article class="max-w-4xl mx-auto flex flex-col">
      <LayoutTitle class="bg-clip-text text-transparent" :class="colors.backgroundGradient">
        {{ page.title }}
      </LayoutTitle>
      <figure class="mt-4 md:mt-8">
        <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="rounded-2xl" loading="lazy">
        <figcaption class="mt-1 md:mt-2 text-sm md:text-base flex flex-row text-black font-light">
          <p>
            {{ page.image.alt }}
            <span />
            <time :datetime="datetime">
              Publié le {{ formattedDate }}.
            </time>
          </p>
        </figcaption>
      </figure>
      <div
        class="mt-2 md:mt-6 w-full mx-auto prose max-w-2xl prose-zinc prose-img:rounded-lg
        prose-a:prose-headings:no-underline prose-a:prose-headings:font-semibold
        prose-a:transition-all prose-a:ease-in  prose-a:prose-p:font-semibold prose-a:prose-p:bg-clip-text prose-a:prose-p:text-transparent
        "
        :class="proseClass(page.type)"
      >
        <slot />
      </div>
    </article>

    <BlogRelatedArticlesSection class="mt-8 md:mt-16 lg:mt-32" />
  </LayoutSection>
</template>
