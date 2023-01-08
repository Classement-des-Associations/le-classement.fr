<script lang="ts" setup>
const { data: articles } = useDumpThinkerArticles()

console.log(articles)
</script>

<template>
  <template v-for="article in articles" :key="article._path">
    <DumpThinkerListItem :text="article.title!" :to="article._path!" icon="carbon:book">
    </DumpThinkerListItem>
  </template>
</template>
