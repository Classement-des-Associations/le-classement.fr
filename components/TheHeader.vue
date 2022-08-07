<script setup>
const config = useRuntimeConfig()
</script>

<template>
  <header class="bg-white p-4">
    <div class="max-w-screen-xl mx-auto flex flex-row justify-between">
      <div class="flex flex-row space-x-8 justify-center items-center">
        <NuxtLink to="/">
          <AtomsLogosClassementShort class="h-[40px] w-[40px] md:h-[50px] md:w-[50px] text-black hover:text-primary-variation-1 motion-safe:transition-all motion-safe:duration-300" />
        </NuxtLink>
        <nav aria-labelledby="primary-nav" class="hidden md:block text-sm leading-[1.125rem]">
          <span id="primary-nav" class="sr-only">Navigation primaire</span>
          <ul class="flex flex-row justify-center space-x-2">
            <li>
              <NuxtLink class="inline-block py-1 px-4 hover:text-primary-variation-1 transform hover:scale-105 transition ease-in" to="/">Le Classement</NuxtLink>
            </li>
              <li>
              <NuxtLink class="inline-block py-1 px-4 hover:text-primary-variation-1 transform hover:scale-105 transition ease-in" to="/contest">
                Le Concours</NuxtLink>
            </li>
            <li>
              <NuxtLink class="inline-block py-1 px-4 hover:text-primary-variation-1 transform hover:scale-105 transition ease-in" to="/winners">
                Le Palmarès</NuxtLink>
            </li>
            <li>
              <NuxtLink class="inline-block py-1 px-4 hover:text-primary-variation-1 transform hover:scale-105 transition ease-in" to="/become-partner">Devenir Partenaire
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="hidden md:flex md:flex-row md:justify-center md:items-center">
        <AtomsAppLink target="_blank" fill disabled title="Inscriptions terminées">S'inscrire</AtomsAppLink>
      </div>
      <div class="md:hidden flex flex-row items-center">
        <OrganismsMobileNav />
      </div>
    </div>
  </header>
</template>