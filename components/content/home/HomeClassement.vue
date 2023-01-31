<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-10">
    <ContentSlot :use="$slots.default" />
  </ul>
</template>
