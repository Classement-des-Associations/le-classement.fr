<template>
  <section class="mt-11 flex flex-col gap-6">
    <h3 class="text-xl md:text-2xl font-bold">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h3>
    <slot name="disclosures"></slot>
  </section>
</template>