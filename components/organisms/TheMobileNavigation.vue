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
  <ClientOnly>
    <Dialog @close="setIsOpen" :open="isOpen">
      <DialogPanel class="absolute z-20 inset-0 bg-accent-purple text-white">
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
                active-class="underline underline-offset-4">Le Classement
              </NuxtLink>
            </li>
             <li>
              <NuxtLink @click="closeModal" class="text-lg font-semibold" to="/contest"
                active-class="underline underline-offset-4">Le Concours
              </NuxtLink>
            </li>
            <li>
              <NuxtLink @click="closeModal" class="text-lg font-semibold" to="/winners"
                active-class="underline underline-offset-4">
                Le Palmarès
              </NuxtLink>
            </li>
            <li>
              <NuxtLink @click="closeModal" class="text-lg font-semibold" to="/become-partner"
                active-class="underline underline-offset-4">Devenir Partenaire
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </DialogPanel>
    </Dialog>
  </ClientOnly>
</template>

