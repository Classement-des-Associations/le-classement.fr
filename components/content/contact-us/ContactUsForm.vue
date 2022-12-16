<script lang="ts" setup>
const message = ref<string | null>(null)

const handleSubmit = (e: Event) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  // Unhandle route from SSR (because of Nuxt3 and it's serverless mode)
  fetch("/contactform", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData as any).toString(),
  })
    .then((res) =>
      message.value = res.ok ? "Merci pour votre message !" : "Une erreur est survenue !"
    )
    .catch(() => message.value = "Une erreur est survenue !")
};
</script>


<template>
  <div>
    <h2 class="mb-8 text-2xl md:text-3xl font-bold">
      <ContentSlot :use="$slots.title" unwrap="p"></ContentSlot>
    </h2>
    <p v-if="message">
      {{ message }}
    </p>
    <form v-else name="contact" data-netlify="true" netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
      <p class="hidden">
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <label for="first_name" class="sr-only">Prénom</label>
        <input type="text" name="first_name" id="first_name" required
          class="md:mr-2 py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm" placeholder="Prénom">
        <label for="last_name" class="sr-only">Nom</label>
        <input type="text" name="last_name" id="last_name" required
          class="md:ml-2 py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm" placeholder="Nom">
        <label for="email" class="sr-only">Adresse mail</label>
        <input type="email" name="email" id="email" required
          class="py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm md:col-span-2" placeholder="Adresse mail">
        <label for="message" class="sr-only">Votre message</label>
        <textarea name="message" id="message" cols="30" rows="5" required
          class="py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm md:col-span-2"
          placeholder="Ton message"></textarea>
      </div>
      <div class="mt-8 md:mt-8 flex flex-row justify-center md:justify-start">
        <button type="submit"
          class="py-3 px-4 bg-accent-purple md:bg-primary-base text-white text-sm font-semibold rounded-[0.625rem]">Envoyer</button>
      </div>
    </form>
  </div>
</template>
