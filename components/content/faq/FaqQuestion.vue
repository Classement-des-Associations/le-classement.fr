<script lang="ts" setup>
const open = ref(false)
const icon = computed(() => open.value ? 'heroicons:chevron-up-solid' : 'heroicons:chevron-down-solid')
</script>

<template>
  <li class="pb-4 border-b border-zinc-200">
    <h3 class="text-lg font-medium text-black">
      <button @click="open = !open" class="w-full flex flex-row justify-between items-center">
        <ContentSlot :use="$slots.question" unwrap="p" />
        <Icon :name="icon" class="w-4 h-4" />
      </button>
    </h3>
    <Prose v-show="open" class="mt-2 max-w-none">
      <ContentSlot :use="$slots.answer" />
    </Prose>
  </li>
</template>


<style scoped>
button {
  font-family: Montserrat;
}
</style>
