<script lang="ts" setup>
const { page } = useContent()

useSchemaOrg([
  defineArticle({
    '@type': 'NewsArticle',
    image: page.value.image ?? '',
    datePublished: useDateToISOString(page.value.datePublished),
    dateModified: useDateToISOString(page.value.dateModified),
  }),
])

const colors = useColorsByPart('classement')
</script>

<template>
  <div class="py-16 sm:py-32">
    <article class="max-w-2xl mx-auto px-4 text-justify prose prose-zinc prose-img:rounded-lg">
      <div class="flex flex-row justify-evenly items-center">
        <LogosAneoFull class="w-1/3 h-full" />
        <LogosClassementFull class="text-black w-1/3 h-full" />
      </div>
      <div class="mt-10 text-sm text-black font-bold" style="font-variant-caps: small-caps;">
        <p>
          Communiqué de presse
        </p>
      </div>
      <h1 class="mt-8 bg-clip-text text-center text-transparent" :class="colors.backgroundGradient">{{ page.title }}
      </h1>
      <slot />
      <div class="not-prose mt-12 flex justify-center">
        <BaseNuxtLink :to="page.release.to"
          class="bg-primary-base hover:bg-primary-base/80 text-black focus-visible:ring-primary-base hover:focus-visible:ring-primary-base/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-variation-2 focus-visible:outline-none px-4 py-2 rounded-md text-sm font-medium  "
          target="_blank">
          Télécharger le communiqué en PDF
        </BaseNuxtLink>
      </div>
    </article>
  </div>
</template>
