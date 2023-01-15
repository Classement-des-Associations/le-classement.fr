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
      return 'prose-blockquote:border-primary-base prose-li:marker:text-primary-base prose-a:prose-p:bg-classement prose-a:prose-p:decoration-primary-variation-1/40 hover:prose-a:prose-p:decoration-primary-variation-1'
    case 'partenaires':
      return 'prose-a:prose-p:bg-partenaire prose-a:prose-p:decoration-accent-blue/40 hover:prose-a:prose-p:decoration-accent-blue'
    default:
      return ''
  }
}
</script>

<template>
  <div class="bg-primary-variation-2 py-16 sm:py-32 ">
    <BlogToc class="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-20"></BlogToc>

    <article class="max-w-4xl mx-auto px-4 flex flex-col">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent"
        :class="colors.backgroundGradient">
        {{ page.title }}
      </h1>
      <figure class="mt-8">
        <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="rounded-2xl" loading="lazy">
        <figcaption class="mt-2 flex flex-row text-black font-light">
          <p>
            {{ page.image.alt }}
          </p>
          &nbsp;
          <time :datetime="datetime">
            Publié le {{ formattedDate }}.
          </time>
        </figcaption>
      </figure>
      <div class="mt-6 w-full mx-auto prose max-w-2xl prose-zinc prose-img:rounded-lg
        prose-a:prose-headings:no-underline prose-a:prose-headings:font-semibold
        prose-a:transition-all prose-a:ease-in  prose-a:prose-p:font-semibold prose-a:prose-p:bg-clip-text prose-a:prose-p:text-transparent
        " :class="proseClass(page.type)">
        <slot />
      </div>
    </article>

    <BlogRelatedArticlesSection class="mt-8 md:mt-16 lg:mt-32" />
  </div>
</template>
