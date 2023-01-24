<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue'

const isOpen = ref(false)

function setIsOpen (value) {
  isOpen.value = value
}

function openModal () {
  setIsOpen(true)
}

function closeModal () {
  setIsOpen(false)
}

const { navigation } = useContent()
</script>

<template>
  <button @click="openModal">
    <Icon name="heroicons:bars-3-20-solid" class="w-8 h-8" />
  </button>
  <ClientOnly>
    <Dialog :open="isOpen" @close="setIsOpen">
      <DialogPanel class="absolute z-20 inset-0 bg-accent-purple text-white">
        <DialogTitle class="sr-only">
          Navigation mobile
        </DialogTitle>
        <div class="flex flex-row justify-between px-4 pt-4">
          <LogosClassementShort class="h-[40px] w-[40px]" />
          <button @click="closeModal">
            <Icon name="heroicons:x-mark-20-solid" class="w-8 h-8" />
          </button>
        </div>
        <nav aria-labelledby="primary-nav-mobile" class="mt-14 ml-4">
          <span id="primary-nav-mobile" class="sr-only">Navigation primaire mobile</span>
          <ul class="space-y-10">
            <template v-for="item in navigation" :key="item._path">
              <li v-if="item.for === 'header'">
                <NuxtLink
                  class="text-lg font-semibold"
                  :to="item._path"
                  active-class="underline underline-offset-4"
                  @click="closeModal"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </nav>
      </DialogPanel>
    </Dialog>
  </ClientOnly>
</template>
