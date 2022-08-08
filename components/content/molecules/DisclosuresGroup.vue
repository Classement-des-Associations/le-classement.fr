<template>
  <section class="mt-11 flex flex-col gap-6">
    <h3 class="text-xl md:text-2xl font-bold">
      <Markdown :use="$slots.title" unwrap="p" />
    </h3>
    <slot></slot>
  </section>
</template>