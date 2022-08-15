<script setup>
const config = useRuntimeConfig()

defineProps(['twitter', 'instagram', 'facebook', 'linkedin', 'phone', 'email']);


const isFormSubmitted = ref(false)
const formSubmissionText = ref('')

function handleForm(message) {
  isFormSubmitted.value = true
  formSubmissionText.value = message
}
</script>

<template>
  <section class="px-4 py-14 md:pb-[5.5rem] bg-ultra-light-grey">
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2">
      <div class="w-full">
        <AtomsSectionTitle>
          <Markdown :use="$slots.title" unwrap="p" />
        </AtomsSectionTitle>
        <transition name="fade" mode="out-in">
          <OrganismsTheContactForm class="mt-8" @success="handleForm" v-if="!isFormSubmitted" />
          <p v-else class="mt-8"> {{ formSubmissionText }}</p>
        </transition>
      </div>
      <div class="hidden md:block max-w-md w-full justify-self-end">
        <AtomsSectionTitle>
          <Markdown :use="$slots.contact" unwrap="p" />
        </AtomsSectionTitle>
        <div class="mt-8 px-4 py-6 flex flex-col bg-white text-sm">
          <NuxtLink :to="'tel:' + phone" class="py-3 flex flex-row space-x-4 items-center">
            <AtomsIconsSmartphone />
            <span>
              {{ phone }}
            </span>
          </NuxtLink>
          <NuxtLink :to="'mailto:' + email" class="py-3 flex flex-row space-x-4 items-center">
            <AtomsIconsMail />
            <span>
              {{ email }}
            </span>
          </NuxtLink>
        </div>
        <ul class="mt-8 px-4 text-black flex flex-row space-x-12">
          <li>
            <NuxtLink v-if="linkedin" target="_blank" :to="linkedin"
              class="flex flex-row justify-center items-center w-14 h-14 rounded-full hover:bg-black hover:text-white transition ease-in">
              <AtomsIconsLinkedIn class="w-8 h-8" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink v-if="facebook" target="_blank" :to="facebook"
              class="flex flex-row justify-center items-center w-14 h-14 rounded-full hover:bg-black hover:text-white transition ease-in">
              <AtomsIconsFacebook class="w-8 h-8" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink v-if="instagram" target="_blank" :to="instagram"
              class="flex flex-row justify-center items-center w-14 h-14 rounded-full hover:bg-black hover:text-white transition ease-in">
              <AtomsIconsInstagram class="w-8 h-8" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink v-if="twitter" target="_blank" :to="twitter"
              class="flex flex-row justify-center items-center w-14 h-14 rounded-full hover:bg-black hover:text-white transition ease-in">
              <AtomsIconsTwitter class="w-8 h-8" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>