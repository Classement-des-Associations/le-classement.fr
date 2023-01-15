<script lang="ts" setup>
</script>

<template>
  <BaseSection class="py-32 flex flex-col items-center">
    <h1 class="text-center text-transparent bg-clip-text bg-classement font-bold text-5xl">Vous cherchez votre chemin ?
    </h1>
    <p class="mt-16 text-center text-xl text-black">
      Nous n'avons pas trouvé cette page. <br />
      Heureusement le Classement se trouve sur la page d'accueil.
    </p>
    <div class="mt-8 flex flex-row justify-center">
      <ClassementLink to="/">
        Accueil du Classement
      </ClassementLink>
    </div>
  </BaseSection>
</template>
