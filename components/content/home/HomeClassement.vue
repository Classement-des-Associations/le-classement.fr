<template>
  <ul class="grid grid-cols-2 gap-10">
    <ContentSlot :use="$slots.default" />
  </ul>
</template>
