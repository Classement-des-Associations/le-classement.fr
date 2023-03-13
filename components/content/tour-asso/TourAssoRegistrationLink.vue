<script lang="ts" setup>
defineProps<{
  buttonText: string
}>()
</script>

<template>
  <ClassementLink button-link="tourAssoRegistrationLink" :button-text="buttonText" part="tour-asso" />
</template>
