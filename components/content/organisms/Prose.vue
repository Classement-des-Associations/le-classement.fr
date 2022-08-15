<template>
  <div class="px-4">
    <article class="prose prose-zinc md:prose-lg lg:prose-xl prose-headings:!no-underline mx-auto my-10 md:my-20">
      <Markdown :use="$slots.default" />
    </article>
  </div>
</template>