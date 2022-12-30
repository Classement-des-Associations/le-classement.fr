<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
]);

const { data: articles } = await useAsyncData('blog', () => queryContent('/blog/').find())
</script>

<template>
  <section class="py-20 px-4 bg-primary-variation-2">
    <div class="max-w-screen-lg mx-auto">
      <h2 class="sr-only">
        <ContentSlot :use="$slots.default" unwrap="p"></ContentSlot>
      </h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="article in articles" :key="article._path" :article="article" />
      </div>
    </div>
  </section>
</template>
