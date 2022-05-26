<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const config = useRuntimeConfig()
</script>

<template>
  <header class="bg-white p-4">
    <div class="max-w-screen-xl mx-auto flex flex-row justify-between">
      <div class="flex flex-row space-x-8 justify-center items-center">
        <AtomsIconsClassementShort />
        <nav aria-labelledby="primary-nav" class="text-sm leading-[1.125rem]">
          <span id="primary-nav" class="sr-only">Navigation primaire</span>
          <ul class="flex flex-row justify-center space-x-2">
            <li>
              <NuxtLink class="py-1 px-4 hover:text-primary-variation-1 hover:font-semibold" to="/">Accueil</NuxtLink>
            </li>
            <Menu class="relative" as="li">
              <MenuButton class="flex flex-row space-x-2 items-center">
                <span>
                  Le Classement
                </span>
                <AtomsIconsArrowBottom class="h-3 w-3 text-black" />
              </MenuButton>
              <MenuItems class="w-52 absolute top-14 z-10 flex flex-col">
                <MenuItem v-slot="{ active }">
                <NuxtLink class="pl-4 py-2 hover:text-primary-variation-1 hover:font-semibold" :class='{ "": active }'
                  to="le-classement/a-propos">
                  À Propos
                </NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <NuxtLink class="pl-4 py-2 hover:text-primary-variation-1 hover:font-semibold" :class='{ "": active }'
                  to="le-classement/concours">
                  Le Concours
                </NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <NuxtLink class="pl-4 py-2 hover:text-primary-variation-1 hover:font-semibold" :class='{ "": active }'
                  to="le-classement/palmares">
                  Le Palmarès
                </NuxtLink>
                </MenuItem>
              </MenuItems>
            </Menu>
            <li>
              <NuxtLink class="py-1 px-4 hover:text-primary-variation-1 hover:font-semibold" to="partenariats">
                Partenariats</NuxtLink>
            </li>
            <li>
              <NuxtLink class="py-1 px-4 hover:text-primary-variation-1 hover:font-semibold" to="contact">Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-row justify-center items-center">
        <AtomsAppLink target="_blank" :to="config.public.formUrl">S'inscrire</AtomsAppLink>
      </div>
    </div>
  </header>
</template>