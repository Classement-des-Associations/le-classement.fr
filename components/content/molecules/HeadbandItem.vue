<template>
  <li class="p-4 w-72 lg:w-64 space-y-9 md:space-y-12 text-center">
    <span class="text-[4rem] font-extrabold whitespace-nowrap">
      <ContentSlot :use="$slots.value" unwrap="p" />
    </span>
    <div class="space-y-3 md:space-y-2">
      <h3 class="text-lg font-semibold">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h3>
      <p class="text-sm leading-[1.125rem]">
        <ContentSlot :use="$slots.text" unwrap="p" />
      </p>
    </div>
  </li>
</template>