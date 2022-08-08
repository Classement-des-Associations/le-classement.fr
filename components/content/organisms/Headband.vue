<template>
  <section class="bg-primary-base text-white py-14 md:py-[7.5rem]">
    <ul
      class="max-w-[1120px] mx-auto flex flex-col items-center space-y-[2.5rem] md:space-y-0 md:flex-row md:justify-between">
      <Markdown :use="$slots.default" unwrap="p" />
    </ul>
  </section>
</template>