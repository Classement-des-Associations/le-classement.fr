<script lang="ts" setup>
const router = useRouter()

const isBlog = computed(() => router.currentRoute.value.path.includes('blog'))
const htmlClass = computed(() => {
  if (isBlog.value)
    return 'blog'

  return ''
})
</script>

<template>
  <Html dir="ltr" :class="htmlClass">
    <Head>
      <SeoKit />
      <SchemaOrgOrganization
        name="Le Classement des Associations" logo="/logo.png"
        :same-as="['https://www.linkedin.com/company/classement-des-associations/', 'https://www.instagram.com/classementdesassociations/', 'https://twitter.com/Leclassement']"
      />
    </Head>

    <Body class="bg-white blog:bg-primary-variation-2">
      <TheHeader />
      <main>
        <NuxtPage />
      </main>
      <TheFooter />
    </Body>
  </Html>
</template>
