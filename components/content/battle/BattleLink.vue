<script lang="ts" setup>
const battleLink = useAppConfig().classement.battle.registrationLink
</script>

<template>
  <ClassementLink part="classement" :button-link="battleLink" button-text="Recevoir la newsletter" target="_blank" />
</template>
