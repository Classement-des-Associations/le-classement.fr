<script setup>
const props = defineProps({
  left: {
    type: Boolean,
    default: false
  },
})

const imageClassNames = function () {
  const classNames = ["row-start-1 lg:row-auto w-full max-h-96 lg:max-h-max lg:w-[38rem] xl:w-[46rem] 2xl:w-[50rem] 4xl:w-[56rem] h-[38rem] object-cover"]

  if (props.left) {
    classNames.push("lg:col-start-1 lg:row-start-1")
  }

  return classNames.join(" ")
}
</script>

<template>
  <section class="pb-[4.5rem] lg:pb-0 grid lg:grid-cols-2 lg:items-center" :class="{ 'lg:justify-items-end': !left }">
    <div class="px-4 mt-10 lg:mt-0 lg:max-w-[38rem] flex flex-col space-y-10 lg:space-y-14 items-center lg:items-start"
      :class="{ 'lg:col-start-2': left }">
      <div class="space-y-8">
        <AtomsAppSectionTitle>
          <slot />
        </AtomsAppSectionTitle>
        <div class="flex flex-col space-y-4 text-sm leading-[1.25rem]">
          <slot name="texts" />
        </div>
      </div>
      <slot name="more" />
    </div>
    <slot name="image" :data="{
      'class': imageClassNames(),
    }" />
  </section>
</template>