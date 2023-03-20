<script setup lang="ts">
defineProps<{
  sectionClass?: string
}>()
</script>

<template>
  <BaseSection :class="sectionClass">
    <BecomePartnerOffers />
  </BaseSection>
</template>
