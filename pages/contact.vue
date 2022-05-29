<script setup>
const config = useRuntimeConfig()

const { data } = await useAsyncData('contact', () => queryContent('contact').findOne())

useHead({
  title: data.value.title,
  description: data.value.subtitle,

})

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
              <NuxtLink target="_blank" to="https://www.linkedin.com/company/le-classement/" class="w-8 h-8">
                <AtomsIconsLinkedIn />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" to="https://www.facebook.com/le.classement" class="w-8 h-8">
                <AtomsIconsFacebook />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" to="https://www.instagram.com/leclassement/" class="w-8 h-8">
                <AtomsIconsInstagram />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink target="_blank" to="https://twitter.com/Leclassement" class="w-8 h-8">
                <AtomsIconsTwitter />
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
    <section class="mb-[4.5rem] md:mb-32 mt-14 md:mt-[6.375rem] px-4 max-w-screen-xl mx-auto">
      <AtomsAppSectionTitle> {{ data.questions.title }} </AtomsAppSectionTitle>
      <div class="mt-11 flex flex-col space-y-6">
        <MoleculesQuestionDisclosure v-for="question in data.questions.data" :key="question.title" :question="question">
        </MoleculesQuestionDisclosure>
      </div>
    </section>
  </div>
</template>