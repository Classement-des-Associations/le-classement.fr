<script lang="ts" setup>
const { data } = await usePressExternalArticles()

const articles = data.value?.body.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
})
</script>

<template>
  <PressArticlesList v-if="articles">
    <template v-for="article in articles" :key="article.title">
      <li>
        <PressArticlesItem :article="article" target="_blank" />
      </li>
    </template>
  </PressArticlesList>
</template>
