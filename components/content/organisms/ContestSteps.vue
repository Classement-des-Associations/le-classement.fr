<template>
  <section class="pt-14 pb-8 md:pt-[6.5rem] md:pb-20 bg-ultra-light-grey">
    <div class="max-w-screen-xl mx-auto">
      <AtomsSectionTitle class="px-4 xl:p-0">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </AtomsSectionTitle>
      <section
        class="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory scroll-p-4 scroll-m-4 px-4 xl:px-0 mt-5 md:mt-[2.875rem]">
        <slot name="cards"></slot>
      </section>
    </div>
  </section>
</template>