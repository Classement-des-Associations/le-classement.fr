<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('contact', () => queryContent('contact').findOne())

const isFormSubmitted = ref(false)
const formSubmissionText = ref('')

function handleForm(message) {
  console.log(message)
  isFormSubmitted.value = true
  formSubmissionText.value = message
}
</script>

<template>
  <div>
    <Head>
      <Title> Nous contacter - Le Classement des Associations </Title>
      <Meta name="description" content="Toutes nos coordonnées et une foire aux questions !" />
    </Head>
    <section class="px-4 py-14 md:pb-[5.5rem] bg-ultra-light-grey">
      <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 md:justify-items-center">
        <div class="w-full md:px-12">
          <AtomsAppSectionTitle> {{ data.title }} </AtomsAppSectionTitle>
          <transition name="fade" mode="out-in">
            <OrganismsTheContactForm class="mt-8" @success="handleForm" v-if="!isFormSubmitted" />
            <p v-else class="mt-8"> {{ formSubmissionText }}</p>
          </transition>
        </div>
        <div class="hidden md:block max-w-md w-full">
          <AtomsAppSectionTitle> {{ data.contact.title }} </AtomsAppSectionTitle>
          <div class="mt-8 px-4 py-6 flex flex-col bg-white text-sm">
            <NuxtLink :to="'tel:' + config.public.phoneTo" class="py-3 flex flex-row space-x-4 items-center">
              <AtomsIconsSmartphone />
              <span>
                {{ config.public.phoneTo }}
              </span>
            </NuxtLink>
            <NuxtLink :to="'mailto:' + config.public.emailTo" class="py-3 flex flex-row space-x-4 items-center">
              <AtomsIconsMail />
              <span>
                {{ config.public.emailTo }}
              </span>
            </NuxtLink>
          </div>
          <ul class="mt-8 px-4 text-black flex flex-row space-x-12">
            <li>
              <NuxtLink target="_blank" to="https://www.linkedin.com/company/le-classement/" class="flex flex-row justify-center items-center w-12 h-12 rounded-full hover:bg-black hover:text-white motion-safe:transition-all duration-300">
                <AtomsIconsLinkedIn class="w-8 h-8"/>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" to="https://www.facebook.com/le.classement" class="flex flex-row justify-center items-center w-12 h-12 rounded-full hover:bg-black hover:text-white motion-safe:transition-all duration-300">
                <AtomsIconsFacebook class="w-8 h-8"/>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" to="https://www.instagram.com/leclassement/" class="flex flex-row justify-center items-center w-12 h-12 rounded-full hover:bg-black hover:text-white motion-safe:transition-all duration-300">
                <AtomsIconsInstagram class="w-8 h-8"/>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" to="https://twitter.com/Leclassement" class="flex flex-row justify-center items-center w-12 h-12 rounded-full hover:bg-black hover:text-white motion-safe:transition-all duration-300">
                <AtomsIconsTwitter class="w-8 h-8"/>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
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
    <section class="mb-[4.5rem] md:mb-32 mt-14 md:mt-[6.375rem] px-4 max-w-screen-xl mx-auto" id="#faq">
      <AtomsAppSectionTitle> {{ data.questions.title }} </AtomsAppSectionTitle>
      <div class="mt-11 flex flex-col space-y-6">
        <MoleculesQuestionDisclosure v-for="question in data.questions.data" :key="question.title" :question="question">
        </MoleculesQuestionDisclosure>
      </div>
    </section>
  </div>
</template>