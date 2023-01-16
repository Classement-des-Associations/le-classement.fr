<script lang="ts" setup>
const { page } = useContent()

useSchemaOrg([
  defineArticle({
    '@type': 'NewsArticle',
    'image': page.value.image ?? '',
    'datePublished': useDateToISOString(page.value.datePublished),
    'dateModified': useDateToISOString(page.value.dateModified),
  }),
])

const colors = useColorsByPart('classement')
</script>

<template>
  <LayoutSection>
    <article>
      <Prose class="text-justify mx-auto">
        <div class="flex flex-row justify-evenly items-center">
          <LogosAneoFull class="w-1/3 h-full" />
          <LogosClassementFull class="text-black w-1/3 h-full" />
        </div>
        <div class="mt-10 text-sm text-black font-bold" style="font-variant-caps: small-caps;">
          <p>
            Communiqué de presse
          </p>
        </div>
        <h1 class="mt-8 bg-clip-text text-center text-transparent" :class="colors.backgroundGradient">
          {{ page.title }}
        </h1>
        <slot />
        <div class="not-prose mt-12 flex justify-center">
          <BaseNuxtLink type="primary" :to="page.release.to" target="_blank" class="text-sm">
            Télécharger le communiqué en PDF
          </BaseNuxtLink>
        </div>
      </Prose>
    </article>
  </LayoutSection>
</template>
