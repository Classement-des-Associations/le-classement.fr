<template>
  <ul class="grid grid-cols-4 gap-6">
    <ContentSlot :use="$slots.default" />
  </ul>
</template>
