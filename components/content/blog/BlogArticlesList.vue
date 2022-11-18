<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
]);

const { data: articles } = await useAsyncData('articles', () => queryContent('/articles/').find())
</script>

<template>
  <section>
    <h2 class="sr-only">
      <ContentSlot :use="$slots.default" unwrap="p"></ContentSlot>
    </h2>
    <pre>{{
    articles
    }}</pre>
  </section>
</template>
