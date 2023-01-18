<template>
  <!-- TODO: Update color depending -->
  <blockquote class="border-primary-base">
    <p class="before:content-[open-quote] after:content-[close-quote]">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </p>
  </blockquote>
</template>
