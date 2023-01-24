<script lang="ts" setup>
useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage'
  })
])

const { data: articles } = await useAsyncData('blog', () => queryContent('/blog/').sort({ datePublished: -1 }).find())
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <BlogCard v-for="article in articles" :key="article._path" :article="article" />
  </div>
</template>
