<script lang="ts" setup>
const { data } = await usePressArticles();

const articles = data.value?.body.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
</script>

<template>
  <PressList v-if="articles" :articles="articles">
  </PressList>
</template>
