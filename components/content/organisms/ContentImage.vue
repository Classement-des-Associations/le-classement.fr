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
  <section class="flex flex-col-reverse lg:space-x-[6.25rem] pb-[4.5rem] lg:pb-0"
    :class="{ 'lg:flex-row': !left, 'lg:space-x-reverse lg:flex-row-reverse': props.left }">
    <div class="w-full flex-grow flex flex-col justify-center items-center lg:items-start px-4 lg:px-0"
      :class="{ 'lg:ml-[7.5rem]': !left, 'lg:mr-[7.5rem]': left }">
      <div class="w-full space-y-8 mt-10 mb-10 lg:mt-0 lg:mb-14">
        <AtomsAppSectionTitle>
          <Markdown :use="$slots.default" unwrap="p" />
        </AtomsAppSectionTitle>
        <div class="flex flex-col space-y-4 text-sm leading-[1.25rem]">
          <slot name="text"></slot>
        </div>
      </div>
      <Markdown :use="$slots.action" unwrap="p" />
    </div>
    <Markdown :use="$slots.image" unwrap="p" :class="imageClassNames()" />
  </section>
</template>