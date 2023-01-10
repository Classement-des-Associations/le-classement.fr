<script lang="ts" setup>
const { data: articles } = await useRelatedArticles()
</script>

<template>
  <BaseSection v-if="articles?.length">
    <h2 id="article-en-lien" class="text-2xl font-semibold">
      <a href="#article-en-lien">
        Articles en lien
      </a>
    </h2>
    <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="article in articles" :key="article._id">
        <BlogCard :article="article" />
      </template>
    </div>
  </BaseSection>
</template>
