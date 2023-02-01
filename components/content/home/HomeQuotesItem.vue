<script lang="ts" setup>
</script>

<template>
  <li>
    <blockquote class="relative h-full pt-16 flex flex-col">
      <div aria-hidden="true" class="absolute top-0 left-0 text-[6rem] leading-[6rem] text-primary-variation-1">
        &rdquo;
      </div>
      <p class="text-lg grow">
        <ContentSlot :use="$slots.quote" unwrap="p" />
      </p>
      <figcaption class="mt-4 flex flex-col text-sm italic">
        <span>
          <ContentSlot :use="$slots.author" unwrap="p" />
        </span>
        <span>
          <ContentSlot :use="$slots.company" unwrap="p" />
        </span>
      </figcaption>
    </blockquote>
  </li>
</template>

<style scoped>
figcaption span:first-child {
  font-weight: theme('fontWeight.semibold');
}
</style>
