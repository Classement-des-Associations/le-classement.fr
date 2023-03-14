<script lang="ts" setup>
const { data: releases } = useDumpThinkerReleases()
</script>

<template>
  <template v-for="article in releases" :key="article._path">
    <DumpThinkerListItem :button-text="article.title!" :button-link="article._path!" icon="carbon:view-mode-1" />
  </template>
</template>
