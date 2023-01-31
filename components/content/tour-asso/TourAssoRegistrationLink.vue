<script lang="ts" setup>
defineProps<{
  buttonText: string
}>()

const classement = useAppConfig().classement
</script>

<template>
  <CenteredLink :button-link="classement.tourAsso.registrationLink" :button-text="buttonText" part="tour-asso" />
</template>
