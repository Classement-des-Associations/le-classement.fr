<script lang="ts" setup>
const { isBlog, blogClass } = useBlog()
const htmlClass = computed(() => {
  if (isBlog.value) { return blogClass }

  return ''
})
</script>

<template>
  <Html dir="ltr" :class="htmlClass">
    <Head>
      <SeoKit />
      <SchemaOrgOrganization
        name="Le Classement des Associations"
        logo="/logo.png"
        :same-as="['https://www.linkedin.com/company/classement-des-associations/', 'https://www.instagram.com/classementdesassociations/', 'https://twitter.com/Leclassement']"
      />
    </Head>

    <Body class="bg-white blog:bg-primary-variation-2 transition-colors ease-in duration-300">
      <TheHeader />
      <main>
        <NuxtPage />
      </main>
      <TheFooter />
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
