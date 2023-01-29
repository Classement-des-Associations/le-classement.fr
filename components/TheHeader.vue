<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { showActionButton, actionButton } = useAppConfig()
const { navigation } = useContent()
</script>

<template>
  <BaseSection is="header" class="py-4 flex flex-row justify-between">
    <div class="flex flex-row space-x-8 justify-center items-center">
      <NuxtLink to="/" @click.right.prevent="navigateTo('/design-kit')">
        <LogosClassementShort
          class="h-[40px] w-[40px] md:h-[50px] md:w-[50px] text-black hover:text-primary-base motion-safe:transition-all motion-safe:duration-300"
        />
      </NuxtLink>
      <nav aria-labelledby="primary-nav" class="hidden md:block text-sm leading-[1.125rem]">
        <span id="primary-nav" class="sr-only">Navigation primaire</span>
        <ul class="flex flex-row justify-center space-x-2 font-medium ">
          <template v-for="item in navigation" :key="item._path">
            <li>
              <template v-if="item.dropdown">
                <ClientOnly>
                  <Menu v-slot="{ close }" as="div" class="relative">
                    <MenuButton class="py-1 px-4 flex flex-row gap-2 items-center hover:text-primary-base transition ease-in">
                      <span>
                        {{ item.title }}
                      </span>
                      <Icon name="heroicons:chevron-down" class="inline-block w-4 h-4" />
                    </MenuButton>

                    <transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-in"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <MenuItems
                        as="ul"
                        class="absolute left-4 mt-2 p-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <template v-for="child in item.children" :key="child._path">
                          <MenuItem as="li">
                            <NuxtLink
                              class="inline-block py-1 px-4 whitespace-nowrap hover:text-primary-base transition ease-in"
                              active-class="active-header"
                              :to="child._path"
                              @click="close()"
                            >
                              {{ child.title }}
                            </NuxtLink>
                          </MenuItem>
                        </template>
                      </MenuItems>
                    </transition>
                  </Menu>
                </ClientOnly>
              </template>
              <template v-else-if="item.for === 'header'">
                <NuxtLink
                  class="inline-block py-1 px-4 hover:text-primary-base transition ease-in"
                  active-class="active-header"
                  :to="item._path"
                >
                  {{ item.title }}
                </NuxtLink>
              </template>
            </li>
          </template>
        </ul>
      </nav>
    </div>
    <div class="hidden md:flex md:flex-row md:justify-center md:items-center">
      <ActionButton v-if="showActionButton" :to="actionButton.to" :text="actionButton.text" />
    </div>
    <div class="md:hidden flex flex-row items-center">
      <TheMobileNavigation />
    </div>
  </BaseSection>
</template>
