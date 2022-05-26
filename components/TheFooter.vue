<template>
  <footer class="bg-black px-4 py-11">
    <div class="max-w-screen-xl mx-auto flex flex-col gap-11 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
      <div class="contents lg:flex lg:flex-row lg:items-center">
        <AtomsIconsClassementFull class="mx-auto" />
        <div class="lg:ml-16 flex flex-row justify-center space-x-[1.375rem] lg:space-x-12">
          <NuxtLink target="_blank" to="https://www.linkedin.com/company/le-classement/"
            class="w-12 h-12 flex justify-center items-center">
            <AtomsIconsLinkedIn class="text-white" />
          </NuxtLink>
          <NuxtLink target="_blank" to="https://www.facebook.com/le.classement"
            class="w-12 h-12 flex justify-center items-center">
            <AtomsIconsFacebook class="text-white" />
          </NuxtLink>
          <NuxtLink target="_blank" to="https://www.instagram.com/leclassement/"
            class="w-12 h-12 flex justify-center items-center">
            <AtomsIconsInstagram class="text-white" />
          </NuxtLink>
          <NuxtLink target="_blank" to="https://twitter.com/Leclassement"
            class="w-12 h-12 flex justify-center items-center">
            <AtomsIconsTwitter class="text-white" />
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-row justify-center space-x-10 text-white text-sm leading-4 font-semibold">
        <NuxtLink to="confidentialite">Confidentialité</NuxtLink>
        <NuxtLink to="reglement">Règlement</NuxtLink>
        <NuxtLink to="contact">Contact</NuxtLink>
      </div>
    </div>
  </footer>
</template>