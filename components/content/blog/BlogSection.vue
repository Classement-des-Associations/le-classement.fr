<template>
  <div class="bg-primary-variation-2 py-20">
    <BaseSection>
      <h2 class="sr-only">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <ContentSlot :use="$slots.content" unwrap="p" />
    </BaseSection>
  </div>
</template>
