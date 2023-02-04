<script lang="ts" setup>
const { socials } = useAppConfig()
const { navigation } = useContent()
</script>

<template>
  <BaseSection>
    <div class="gradient-border-2 border-gradient-br-associations-light-white rounded-lg flex flex-row gap-20 items-center px-10 py-14">
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl font-bold">
          S'abonner au Classement
        </h2>
        <p class="text-xl text-zinc-600">
          Une newsletter pour tous ceux qui veulent prolonger l'aventure du Classement avec des exclusivités et des actualités sur la vie associative étudiante.
        </p>
      </div>

      <ClassementNewsletterLink />
    </div>
  </BaseSection>
  <div class="mt-20 bg-black">
    <BaseSection is="footer" class="py-11 flex flex-col gap-14">
      <div class="flex flex-col gap-11 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
        <div class="contents lg:flex lg:flex-row lg:items-center">
          <NuxtLink to="/">
            <span class="sr-only">Accueil</span>
            <LogosClassementFull aria-hidden="true" class="mx-auto text-white" @click.right.prevent="navigateTo('/design-kit')" />
          </NuxtLink>
          <ul class="lg:ml-16 flex flex-row justify-center space-x-[1.375rem] lg:space-x-12">
            <template v-for="social in socials" :key="social.to">
              <li>
                <NuxtLink
                  target="_blank"
                  :to="social.to"
                  class="w-12 h-12 text-white flex justify-center items-center rounded-full hover:bg-white hover:text-black motion-safe:transition-all duration-300"
                >
                  <span class="sr-only">{{ social.name }}</span>
                  <Icon :name="social.icon" size="28" />
                </NuxtLink>
              </li>
            </template>
          </ul>
        </div>

        <nav aria-labelledby="secondary-nav">
          <span id="secondary-nav" class="sr-only">Navigation secondaire</span>
          <ul
            class="grid grid-cols-3 lg:flex gap-4 justify-items-center text-white text-sm leading-4 tracking-wider font-semibold"
          >
            <template v-for="item in navigation" :key="item._path">
              <li v-if="item.for === 'footer'">
                <NuxtLink
                  class="hover:underline hover:underline-offset-4"
                  active-class="active-footer"
                  :to="item._path"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </nav>
      </div>

      <div class="flex flex-col items-center gap-4">
        <div class="h-[1px] w-full max-w-[256px] rounded-full bg-white" />
        <p class="flex flex-col md:flex-row items-center gap-2 md:gap-0 text-white text-sm font-light">
          <span>Le
            Classement des Associations - 2023</span><span class="hidden md:inline">&nbsp;-&nbsp;</span><span>
            <NuxtLink to="https://aneo.eu" rel="noopener" target="_blank">Une Création Aneo</NuxtLink>
          </span>
        </p>
      </div>
    </BaseSection>
  </div>
</template>
