<template>
  <form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST" action="/?success">
    <p class="hidden">
      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
    </p>
    <input type="hidden" name="form-name" value="contact" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <label for="first_name" class="sr-only">Prénom</label>
      <input type="text" name="first_name" id="first_name" required
        class="py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm" placeholder="Prénom">
      <label for="last_name" class="sr-only">Nom</label>
      <input type="text" name="last_name" id="last_name" required
        class="py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm" placeholder="Nom">
      <label for="email" class="sr-only">Adresse mail</label>
      <input type="email" name="email" id="email" required
        class="py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm md:col-span-2" placeholder="Adresse mail">
      <label for="message" class="sr-only">Votre message</label>
      <textarea name="message" id="message" cols="30" rows="5" required
        class="py-4 pl-4 placeholder:text-[#808080] placeholder:text-sm md:col-span-2"
        placeholder="Votre message"></textarea>
    </div>
    <div class="mt-8 flex flex-row justify-center">
      <button type="submit"
        class="py-3 px-4 bg-accent-purple text-white text-sm font-semibold rounded-[0.625rem]">Envoyer</button>
    </div>
  </form>
</template>