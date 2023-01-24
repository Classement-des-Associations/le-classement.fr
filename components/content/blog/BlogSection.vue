<template>
  <BaseSection class="py-20">
    <h2 class="sr-only">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <ContentSlot :use="$slots.content" unwrap="p" />
  </BaseSection>
</template>
