<script lang="ts" setup>
const { data: articles } = await useRelatedArticles()
</script>

<template>
  <section v-if="articles?.length">
    <h2>
      Articles en lien
    </h2>
    <template v-for="article in articles" :key="article._id">
      <ul>
        <BlogRelatedArticlesItem :article="article" />
      </ul>
    </template>
  </section>
</template>
