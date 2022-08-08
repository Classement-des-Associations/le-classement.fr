<template>
  <section class="px-4 pt-12 pb-20 md:py-44 relative">
    <AtomsGraphicsTrianglesMobile class="absolute -left-2 -bottom-11 md:hidden" />
    <AtomsGraphicsTriangles class="hidden md:block absolute -left-12 bottom-[-2.875rem]" />
    <AtomsGraphicsRound class="hidden md:block absolute top-6 right-10" />

    <div class="flex flex-col justify-center items-center space-y-14">
      <div class="flex flex-col items-center space-y-8 text-center">
        <AtomsAppHeroTitle>
          <Markdown :use="$slots.default" unwrap="p" />
        </AtomsAppHeroTitle>
        <AtomsAppHeroSubtitle class="max-w-3xl">
          <Markdown :use="$slots.subtitle" unwrap="p" />
        </AtomsAppHeroSubtitle>
      </div>
      <div class="flex flex-row justify-center items-center space-x-4 md:space-x-6">
        <Markdown :use="$slots.actions" unwrap="p" />
      </div>
    </div>
  </section>
</template>