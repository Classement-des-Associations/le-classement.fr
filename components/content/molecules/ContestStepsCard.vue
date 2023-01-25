<template>
  <article
    class="snap-start shrink-0 xl:shrink w-[14rem] px-6 pt-10 pb-12 bg-white rounded-[1.25rem]
    shadow-default flex flex-col justify-end"
  >
    <span class="text-primary-variation-1 text-[1.75rem] font-bold">
      <ContentSlot :use="$slots.number" unwrap="p" />
    </span>
    <h3 class="mt-4 text-lg font-semibold">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h3>
    <p class="mt-2 text-xs leading-5 grow">
      <ContentSlot :use="$slots.text" unwrap="p" />
    </p>
    <p class="mt-6 text-primary-variation-1 text-sm font-bold">
      <ContentSlot :use="$slots.date" unwrap="p" />
    </p>
  </article>
</template>
