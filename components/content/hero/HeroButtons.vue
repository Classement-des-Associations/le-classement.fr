<template>
  <div class="mt-16 flex flex-row justify-center items-center space-x-4 md:space-x-6">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
