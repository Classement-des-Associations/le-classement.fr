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
      <div class="mt-2 md:mt-6 w-full mx-auto max-w-2xl prose prose-black">
        <slot />
      </div>
    </article>

    <BlogRelatedArticlesSection class="mt-8 md:mt-16 lg:mt-32" />
  </LayoutSection>
</template>
