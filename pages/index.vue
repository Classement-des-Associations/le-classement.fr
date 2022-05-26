<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <section class="px-4 pt-12 pb-20 md:py-44 relative">
    <AtomsGraphicsTrianglesMobile class="absolute -left-2 -bottom-11 md:hidden" />
    <AtomsGraphicsTriangles class="hidden md:block absolute -left-12 bottom-[-2.875rem]" />
    <AtomsGraphicsRound class="hidden md:block absolute top-6 right-10" />
    <div class="flex flex-col justify-center items-center space-y-14">
      <div class="flex flex-col items-center space-y-8 text-center">
        <h1 class="text-5xl font-bold">
          {{ data.title }}
        </h1>
        <p class="max-w-[700px]">
          {{ data.subtitle }}
        </p>
      </div>
      <div class="flex flex-row justify-center space-x-6">
        <AtomsAppLink taget="_blank" fill :to="config.public.formUrl">S'inscrire</AtomsAppLink>
        <AtomsAppLink to="contact">Nous contacter</AtomsAppLink>
      </div>
    </div>
  </section>
  <section class="bg-primary-base text-white py-14 md:py-[7.5rem]">
    <ul
      class="max-w-[1120px] mx-auto flex flex-col items-center space-y-[3.75rem] md:space-y-0 md:flex-row md:justify-between">
      <li class="p-4 w-72 lg:w-64 space-y-9 md:space-y-12 text-center" v-for="kpi in data.kpi">
        <span class="text-[4rem] font-extrabold whitespace-nowrap">{{ kpi.value }}</span>
        <div class="space-y-3 md:space-y-2">
          <h3 class="text-lg font-semibold">{{ kpi.title }}</h3>
          <p class="text-sm leading-[1.125rem]">{{ kpi.text }}</p>
        </div>
      </li>
    </ul>
  </section>
  <section
    class="flex flex-col-reverse space-y-reverse space-y-10 lg:space-y-0 lg:flex-row lg:justify-end lg:items-center lg:space-x-[6.25rem]">
    <div class="px-4 flex flex-col items-center lg:items-start space-y-14 lg:space-y-10 max-w-3xl">
      <div class="space-y-8">
        <h2 class="text-[1.75rem] font-bold">{{ data.classement.title }}</h2>
        <p>{{ data.classement.text }}</p>
      </div>
      <AtomsAppLink>En savoir plus</AtomsAppLink>
    </div>
    <img class="w-full mx-auto" src="/image.png" alt="Image d'illustration du texte">
  </section>
  <section class="py-[4.375rem] mt-14 lg:mt-0 bg-ultra-light-grey">
    <div
      class="px-4 max-w-screen-lg mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-[4.5rem] text-center md:text-left">
      <img class="rounded-full w-36 h-36" src="/image.png" alt="Photo de profil">
      <figure class="flex flex-col space-y-4">
        <p class="text-lg">{{ data.quote.text }}
        </p>
        <blockquote>
          <figcaption class="text-lg font-semibold">{{ data.quote.author }}</figcaption>
        </blockquote>
      </figure>
    </div>
  </section>
  <section class="max-w-screen-xl mx-auto py-14 md:py-[6.125rem]">
    <h2 class="px-4 text-[1.75rem] font-bold">Nos partenaires</h2>
    <OrganismsTheCarouselPartners class="mt-11 px-4" />
  </section>
  <section
    class="pb-[4.375rem] lg:pb-0 bg-accent-purple text-white flex flex-col-reverse space-y-reverse space-y-10 lg:space-y-0 lg:flex-row lg:justify-end lg:items-center lg:space-x-[6.25rem]">
    <div class="px-4 flex flex-col items-center lg:items-start space-y-14 lg:space-y-10 max-w-3xl">
      <div class="space-y-8">
        <h2 class="text-[1.75rem] font-bold">{{ data['lights-on'].title }}</h2>
        <p>{{ data['lights-on'].text }}</p>
      </div>
      <AtomsAppLink white>Découvrir le palmarès</AtomsAppLink>
    </div>
    <img class="w-full" src="/image.png" alt="Image d'illustration du texte">
  </section>
  <section class="mt-14">
    <h2 class="px-4 max-w-screen-xl mx-auto text-[1.75rem] font-bold">Galerie Photos</h2>
    <ul class="mt-11 grid grid-cols-2 md:grid-cols-5">
      <li v-for="num in 10" :key="num" class="relative group">
        <img src="/image.png" alt="">
        <div
          class="opacity-0 absolute inset-0 bg-black group-hover:opacity-50 motion-safe:transition-all motion-safe:duration-300">
        </div>
        <div
          class="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center motion-safe:transition-all motion-safe:duration-300">
          <AtomsIconsInstagram class="text-white" />
        </div>
      </li>
    </ul>
  </section>
</template>