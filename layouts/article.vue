<script lang="ts" setup>
import { Part } from '~~/types/part.js';

const { page } = useContent()

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: useDateToISOString(page.value.datePublished),
      dateModified: useDateToISOString(page.value.dateModified),
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
      return 'prose-blockquote:border-primary-base prose-li:marker:text-primary-base prose-a:prose-p:bg-classemen prose-a:prose-p:decoration-primary-light/40 hover:prose-a:prose-p:decoration-primary-light'
    case 'partenaires':
      return 'prose-a:prose-p:bg-partenaire prose-a:prose-p:decoration-accent-blue/40 hover:prose-a:prose-p:decoration-accent-blue'
    default:
      return ''
  }
}
</script>

<template>
  <LayoutSection>
    <BlogToc class="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-20"></BlogToc>

    <article class="max-w-4xl mx-auto px-4 flex flex-col">
      <LayoutTitle class="bg-clip-text text-transparent" :class="colors.backgroundGradient">
        {{ page.title }}
      </LayoutTitle>
      <figure class="mt-4 md:mt-8">
        <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="rounded-2xl" loading="lazy">
        <figcaption class="mt-1 md:mt-2 text-sm md:text-base flex flex-row text-black font-light">
          <p>
            {{ page.image.alt }}
            <span> </span>
            <time :datetime="datetime">
              Publié le {{ formattedDate }}.
            </time>
          </p>
        </figcaption>
      </figure>
      <div class="mt-2 md:mt-6 w-full mx-auto max-w-2xl prose prose-black
        " :class="proseClass(page.type)">
        <slot />
      </div>
    </article>

    <BlogRelatedArticlesSection class="mt-8 md:mt-16 lg:mt-32" />
  </LayoutSection>
</template>
