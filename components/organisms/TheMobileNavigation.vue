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

const { navigation } = useContent()
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
            <template v-for="item in navigation" :key="item._path">
              <li v-if="item.for === 'header'">
                <NuxtLink @click="closeModal" class="text-lg font-semibold" :to="item._path"
                  active-class="underline underline-offset-4">{{ item.title }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </nav>
      </DialogPanel>
    </Dialog>
  </ClientOnly>
</template>

