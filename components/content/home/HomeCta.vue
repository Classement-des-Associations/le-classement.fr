<script lang="ts" script>
import { Part } from '~~/types/part';

const { part } = defineProps<{
  sectionClass?: string;
  part: Part;
  actionText: string;
  actionHref: string;
}>();

const colors = useColorsByPart(part);

</script>

<template>
  <BaseSection :class="sectionClass">
    <div>
      <p class="text-2xl font-medium">
        <span :class="colors.textColor">
          <ContentSlot :use="$slots.textColor" unwrap="p" />
        </span>
        <span class="text-black">
          <ContentSlot :use="$slots.text" unwrap="p" />
        </span>
      </p>

      <NuxtLink class="text-2xl text-black font-medium" :to="actionHref">
        {{ actionText }}
      </NuxtLink>
    </div>

    <div>
      <p>Le saviez-vous ?</p>
    </div>

    <div>
      <ContentSlot :use="$slots.extra" unwrap="p" />
    </div>

  </BaseSection>
</template>
