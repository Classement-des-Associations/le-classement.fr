<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <section class="px-4 mt-12 mb-20 md:my-44 flex flex-col justify-center items-center space-y-14">
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
  </section>
  <section class="bg-primary-base text-white py-[7.5rem]">
    <ul
      class="max-w-[1120px] mx-auto flex flex-col items-center space-y-[3.75rem] md:space-y-0 md:flex-row md:justify-between">
      <li class="p-4 w-72 md:w-64 space-y-9 md:space-y-12 text-center" v-for="kpi in data.kpi">
        <span class="text-[4rem] font-extrabold whitespace-nowrap">{{ kpi.value }}</span>
        <div class="space-y-3 md:space-y-2">
          <h3 class="text-lg font-semibold">{{ kpi.title }}</h3>
          <p class="text-sm leading-[1.125rem]">{{ kpi.text }}</p>
        </div>
      </li>
    </ul>
  </section>
  <section
    class="flex flex-col-reverse space-y-reverse space-y-10 md:flex-row md:justify-end md:items-center md:space-x-[6.25rem]">
    <div class="px-4 flex flex-col items-center md:items-start space-y-14 md:space-y-10 max-w-3xl">
      <div class="space-y-8">
        <h2 class="text-[1.75rem] font-bold">{{ data.classement.title }}</h2>
        <p>{{ data.classement.text }}</p>
      </div>
      <AtomsAppLink>En savoir plus</AtomsAppLink>
    </div>
    <img class="w-[32rem]" src="/image 2.png" alt="Image d'illustration du texte">
  </section>
  <section class="py-[4.375rem] mt-14 md:mt-0 bg-ultra-light-grey">
    <div
      class="px-4 max-w-screen-lg mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-[4.5rem] text-center md:text-left">
      <img class="rounded-full w-36 h-36" src="/image 2.png" alt="Photo de profil">
      <figure class="flex flex-col space-y-4">
        <p class="text-lg">{{ data.quote.text }}
        </p>
        <blockquote>
          <figcaption class="text-lg font-semibold">{{ data.quote.author }}</figcaption>
        </blockquote>
      </figure>
    </div>
  </section>
  <section>
    <h2 class="text-[1.75rem] font-bold">Nos partenaires</h2>
    <OrganismsPartners />
  </section>
</template>