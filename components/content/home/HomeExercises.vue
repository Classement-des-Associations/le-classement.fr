<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <ContentSlot :use="$slots.default" />
  </ul>
</template>
