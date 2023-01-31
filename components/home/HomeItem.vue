<script lang="ts" setup>
defineProps<{
  tag?: string
  icon?: string
}>()
</script>

<template>
  <div class="relative rounded-2xl p-7 md:p-9 gradient-border gradient-border-classement">
    <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-7">
      <Icon v-if="icon" :name="icon" class="w-8 sm:w-10 h-auto" />
      <component :is="tag ? tag : 'h2'" class="text-black text-xl sm:text-2xl font-semibold">
        <slot name="title" />
      </component>
    </div>

    <p class="mt-4 text-black text-base">
      <slot name="description" />
    </p>
  </div>
</template>

<style scoped>
.gradient-border-classement::before {
  background-image: theme('backgroundImage.classement');
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  padding: 2px;
  width: 100%;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  border-radius: theme("borderRadius.2xl");
}

.gradient-border:hover::before {
  opacity: 1;
}
</style>
