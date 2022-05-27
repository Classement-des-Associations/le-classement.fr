<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('contact', () => queryContent('contact').findOne())
</script>

<template>
  <div>
    <section class="px-4 py-14 bg-ultra-light-grey">
      <AtomsAppSectionTitle> {{ data.title }} </AtomsAppSectionTitle>
      <OrganismsTheContactForm class="mt-8" />
    </section>
    <section class="md:hidden py-14 px-4 bg-accent-purple text-white">
      <AtomsAppSectionTitle> {{ data.contact.title }} </AtomsAppSectionTitle>
      <div class="mt-6 flex flex-col text-sm ">
        <NuxtLink :to="'tel:' + config.public.phoneTo" class="py-3 flex flex-row space-x-2 items-center">
          <AtomsIconsSmartphone />
          <span>
            {{ config.public.phoneTo }}
          </span>
        </NuxtLink>
        <NuxtLink :to="'mailto:' + config.public.emailTo" class="py-3 flex flex-row space-x-2 items-center">
          <AtomsIconsMail />
          <span>
            {{ config.public.emailTo }}
          </span>
        </NuxtLink>
      </div>
    </section>
    <section class="mb-[4.5rem] md:mb-32 mt-14 md:mt-[6.375rem] px-4 max-w-screen-xl mx-auto">
      <AtomsAppSectionTitle> {{ data.questions.title }} </AtomsAppSectionTitle>
      <div class="mt-11 flex flex-col space-y-6">
        <MoleculesQuestionDisclosure v-for="question in data.questions.data" :key="question.title" :question="question">
        </MoleculesQuestionDisclosure>
      </div>
    </section>
  </div>
</template>