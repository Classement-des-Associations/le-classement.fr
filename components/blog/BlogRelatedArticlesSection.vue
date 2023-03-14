<script lang="ts" setup>
const { data: articles } = await useRelatedArticles()
</script>

<template>
  <section v-if="articles?.length">
    <h2 id="article-en-lien" class="text-2xl font-semibold">
      <NuxtLink to="#article-en-lien">
        Articles en lien
      </NuxtLink>
    </h2>
    <BlogList class="mt-6" :articles="articles" />
  </section>
</template>
