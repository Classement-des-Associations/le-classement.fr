<script lang="ts" setup>
const { page } = useContent()
useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: new Date(page.value.datePublished || Date.now()).toISOString(),
      dateModified: new Date(page.value.dateModified || Date.now()).toISOString()
    }
  )
])
</script>

<template>
  <div class="bg-primary-variation-2">
    <article class="max-w-2xl mx-auto pt-16 sm:pt-32 flex flex-col">
      <div class="flex flex-col gap-4" :class="{ 'mb-6': page.image }">
        <h1 class="dark:text-zinc-100 text-5xl font-bold tracking-tight">
          {{ page.title }}
        </h1>
        <!-- <AtomsAppDate with-border :datetime="page.datePublished" class="order-first" /> -->
      </div>
      <img v-if="page.image" :src="page.image.src" :alt="page.image.alt" class="rounded-2xl">
      <div
        class="w-full mx-auto prose max-w-2xl prose-zinc prose-img:rounded-lg
        prose-a:prose-headings:no-underline
        prose-a:transition-all prose-a:ease-in  prose-a:prose-p:font-semibold   prose-a:prose-p:decoration-primary-base/40 prose-a:prose-p:text-primary-base hover:prose-a:prose-p:decoration-primary-base">
        <slot />
      </div>
    </article>
  </div>
</template>
