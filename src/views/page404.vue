<template>
  <div class="flex h-screen w-screen items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-blue-400">
    <div class="rounded-md bg-white px-40 py-20 shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="text-9xl font-bold text-blue-600">404</h1>

        <h6 class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
          <span class="text-red-500">Oups !</span> La page n'a pas été trouvé
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

        <RouterLink to="/" class="bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800"> Retour a la page d'accueil </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page404",
};
</script>