<script lang="ts" setup>
const { isBlog, blogClass } = useBlog()
const htmlClass = computed(() => {
  if (isBlog.value) { return blogClass }

  return ''
})

const logo = {
  srTitle: 'Accueil',
  rightClickUrl: '/design-kit'
}

const sameAs = useSameAs()
</script>

<template>
  <Html dir="ltr" :class="htmlClass">
    <Head>
      <SeoKit />
      <SchemaOrgOrganization name="Le Classement des Associations" logo="/logo.png" :same-as="sameAs" />
    </Head>

    <Body class="bg-white blog:bg-primary-variation-2 transition-colors ease-in duration-300">
      <TheHeader
        sr-navigation-title="Navigation Primaire"
        :logo="logo"
        :dialog="{ srNavigationTitle: 'Navigation Primaire Mobile', srDialogButtonTitle: { open: 'Ouvrir le menu de navigation', close: 'Fermer le menu de navigation' } }"
      />
      <main>
        <NuxtPage />
      </main>
      <TheFooter :logo="logo" sr-navigation-title="Navigation Secondaire" />
    </Body>
  </Html>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.3rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(0.3rem);
}
</style>
