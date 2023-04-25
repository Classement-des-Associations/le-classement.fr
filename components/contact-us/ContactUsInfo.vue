<script lang="ts" setup>
const classement = useClassement()

const appointment = useClassementLink(classement.contact.appointment)
const email = classement.contact.email
const phone = classement.contact.phone
</script>

<template>
  <div class="mt-8 px-4 py-6 flex flex-col bg-white text-sm">
    <NuxtLink :to="appointment" class="py-3 flex flex-row space-x-4 items-center">
      <Icon name="heroicons:bell-alert" class="w-6 h-6" />
      <span>
        Prendre rendez-vous
      </span>
    </NuxtLink>
    <NuxtLink :to="`mailto:${email}`" class="py-3 flex flex-row space-x-4 items-center">
      <Icon name="heroicons:envelope" class="w-6 h-6" />
      <span>
        {{ email }}
      </span>
    </NuxtLink>
    <NuxtLink :to="`tel:${phone}`" class="py-3 flex flex-row space-x-4 items-center">
      <Icon name="heroicons:device-phone-mobile" class="w-6 h-6" />
      <span>
        {{ phone }}
      </span>
    </NuxtLink>
  </div>
</template>
