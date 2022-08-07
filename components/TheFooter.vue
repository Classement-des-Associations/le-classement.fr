<template>
  <footer class="bg-black px-4 py-11">
    <div class="max-w-screen-xl mx-auto flex flex-col gap-14">
      <div class="flex flex-col gap-11 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
      <div class="contents lg:flex lg:flex-row lg:items-center">
        <AtomsLogosClassementFull class="mx-auto" />
        <ul class="lg:ml-16 flex flex-row justify-center space-x-[1.375rem] lg:space-x-12">
          <li>
            <NuxtLink target="_blank" to="https://www.linkedin.com/company/le-classement/"
              class="w-12 h-12 text-white flex justify-center items-center rounded-full hover:bg-white hover:text-black motion-safe:transition-all duration-300">
              <AtomsIconsLinkedIn />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank" to="https://www.facebook.com/le.classement"
              class="w-12 h-12 text-white flex justify-center items-center rounded-full hover:bg-white hover:text-black motion-safe:transition-all duration-300">
              <AtomsIconsFacebook />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank" to="https://www.instagram.com/leclassement/"
              class="w-12 h-12 text-white flex justify-center items-center rounded-full hover:bg-white hover:text-black motion-safe:transition-all duration-300">
              <AtomsIconsInstagram />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink target="_blank" to="https://twitter.com/Leclassement"
              class="w-12 h-12 text-white flex justify-center items-center rounded-full hover:bg-white hover:text-black motion-safe:transition-all duration-300">
              <AtomsIconsTwitter />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <nav aria-labelledby="secondary-nav">
        <span id="secondary-nav" class="sr-only">Navigation secondaire</span>
        <ul class="flex flex-row justify-center space-x-10 text-white text-sm leading-4 tracking-wider font-semibold">
          <li>
            <NuxtLink class="hover:underline hover:underline-offset-4" to="/contact">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline hover:underline-offset-4" to="/contact#faq">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline hover:underline-offset-4" to="/rules">Règlement</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline hover:underline-offset-4" to="/terms">CGU</NuxtLink>
          </li>
        </ul>
      </nav>
      </div>
      <div class="flex flex-col items-center gap-4">
        <div class="h-[1px] w-full max-w-[256px] rounded-full bg-white"></div>
        <p class="flex flex-col md:flex-row items-center gap-2 md:gap-0 text-white text-sm font-light"><span>Le Classement des Associations - 2022</span><span class="hidden md:inline">&nbsp;-&nbsp;</span><span>Par <NuxtLink to="https://aneo.eu" rel="noopener" target="_blank">Aneo</NuxtLink>, le <NuxtLink to="https://bnei.fr" rel="noopener" target="_blank">BNEI</NuxtLink> et le <NuxtLink to="https://bnem.fr" rel="noopener" target="_blank">BNEM</NuxtLink></span></p>
      </div>
    </div>
  </footer>
</template>