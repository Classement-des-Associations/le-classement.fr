<script setup>
const { showActionButton, actionButton } = useAppConfig()
const { navigation } = useContent()
</script>

<template>
  <BaseSection is="header" class="py-4 flex flex-row justify-between transition-colors ease-in">
    <div class="flex flex-row space-x-8 justify-center items-center">
      <NuxtLink to="/" @click.right.prevent="navigateTo('design-kit')">
        <AtomsLogosClassementShort
          class="h-[40px] w-[40px] md:h-[50px] md:w-[50px] text-black hover:text-primary-base motion-safe:transition-all motion-safe:duration-300" />
      </NuxtLink>
      <nav aria-labelledby="primary-nav" class="hidden md:block text-sm leading-[1.125rem]">
        <span id="primary-nav" class="sr-only">Navigation primaire</span>
        <ul class="flex flex-row justify-center space-x-2">
          <template v-for="item in navigation" :key="item._path">
            <li v-if="item.for === 'header'">
              <NuxtLink class="inline-block font-medium py-1 px-4 hover:text-primary-base transform transition ease-in"
                active-class="active-header" :to="item._path">{{ item.title }}</NuxtLink>
            </li>
          </template>
        </ul>
      </nav>
    </div>
    <div class="hidden md:flex md:flex-row md:justify-center md:items-center">
      <ActionButton v-if="showActionButton" :to="actionButton.to" :text="actionButton.text"></ActionButton>
    </div>
    <div class="md:hidden flex flex-row items-center">
      <OrganismsTheMobileNavigation />
    </div>
  </BaseSection>
</template>
