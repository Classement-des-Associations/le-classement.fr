<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function setIsOpen(value) {
  isOpen.value = value
}

function openModal() {
  setIsOpen(true)
}

function closeModal() {
  setIsOpen(false)
}
</script>

<template>
  <button @click="openModal">
    <AtomsIconsMenu class="w-8 h-8" />
  </button>
  <Dialog @close="setIsOpen" :open="isOpen">
    <DialogPanel class="absolute inset-0 bg-accent-purple text-white">
      <DialogTitle class="sr-only">Navigation mobile</DialogTitle>

      <div class="flex flex-row justify-between px-4 pt-4">
        <AtomsLogosClassementShort class="h-[40px] w-[40px]" />
        <button @click="closeModal">
          <AtomsIconsClose class="w-8 h-8" />
        </button>
      </div>

      <nav aria-labelledby="primary-nav-mobile" class="mt-14 ml-4">
        <span class="sr-only" id="primary-nav-mobile">Navigation primaire mobile</span>
        <ul class="space-y-10">
          <li>
            <NuxtLink @click="closeModal" class="text-lg font-semibold" to="/"
              active-class="underline underline-offset-4">Accueil
            </NuxtLink>
          </li>
          <li>
            <span class="text-lg font-semibold">Le Classement</span>
            <ul class="mt-6 space-y-6">
              <li>
                <NuxtLink @click="closeModal" class="text-lg" to="/le-classement/a-propos"
                  active-class="underline underline-offset-4">
                  À Propos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink @click="closeModal" class="text-lg" to="/le-classement/concours"
                  active-class="underline underline-offset-4">
                  Le Concours
                </NuxtLink>
              </li>
              <li>
                <NuxtLink @click="closeModal" class="text-lg" to="/le-classement/le-palmares"
                  active-class="underline underline-offset-4">
                  Le Palmarès
                </NuxtLink>
              </li>
            </ul>

          </li>
          <li>
            <NuxtLink @click="closeModal" class="text-lg font-semibold" to="/partenariats"
              active-class="underline underline-offset-4">
              Partenariats
            </NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeModal" class="text-lg font-semibold" to="/contact"
              active-class="underline underline-offset-4">Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </DialogPanel>
  </Dialog>
</template>

