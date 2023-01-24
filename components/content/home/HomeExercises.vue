<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
    <ContentSlot :use="$slots.default" />
  </ul>
</template>
