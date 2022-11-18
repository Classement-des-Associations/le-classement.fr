<template>
  <section>
    <h2 class="text-2xl text-black font-bold">
      <ContentSlot :use="$slots.default"></ContentSlot>
    </h2>
    <ul class="mt-4 flex flex-col gap-3">
      <ContentSlot :use="$slots.items"></ContentSlot>
    </ul>
  </section>
</template>
