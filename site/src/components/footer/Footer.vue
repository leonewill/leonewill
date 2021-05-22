<template>
  <footer class="w-full min-h-3/10-screen flex flex-col lm:flex-row justify-start lm:justify-center items-center px-4 lm:px-10 mb-16 lg:mb-0 border-b-2 border-red">
    <p class="text-7xl lm:text-11xl text-white lm:mr-40">Curtiu?</p>
    <router-link to="/projects" class="flex flex-row justify-start items-center text-2xl text-white">
      {{ isProjectPage && isProjectPage == true ? 'Confira outros projetos' : 'Confira meus projetos' }}
      <img class="w-8 ml-4" src="@/assets/icons/red/icon-arrow-right.svg" alt="Ícone de seta para a direita">
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    isProjectPage: Boolean
  }
};
</script>