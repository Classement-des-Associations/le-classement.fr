<template>
  <footer class="bg-black px-4 py-11">
    <div class="max-w-screen-xl mx-auto flex flex-col gap-11 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
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
            <NuxtLink class="hover:underline hover:underline-offset-4" to="/cgu">CGU</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline hover:underline-offset-4" to="/reglement">Règlement</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:underline hover:underline-offset-4" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>