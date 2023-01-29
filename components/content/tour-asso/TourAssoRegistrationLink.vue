<script lang="ts" setup>
defineProps<{
  buttonText: string
}>()

const classement = useAppConfig().classement
</script>

<template>
  <div class="not-prose flex flex-row justify-center">
    <BaseNuxtLink type="primary" :to="classement.tourAsso.registrationLink" target="_blank">
      {{ buttonText }}
    </BaseNuxtLink>
  </div>
</template>
