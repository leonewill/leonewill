<template>
  <header
    v-if="isMobile == false"
    class="top-0 left-0"
    :class="[
      vertical == true ? 'vertical w-full lg:w-12 h-12 lg:h-screen flex flex-row lg:flex-col justify-between items-center pb-4 box-border fixed bg-black' : '',
      horizontal == true ? 'horizontal w-full min-h-12 flex flex-row justify-between items-center pr-1 box-border fixed bg-gradient-to-t from-transparent to-black' : '',
    ]"
  >
    <router-link to="/" class="w-14 h-14 p-2 bg-transparent duration-500 hover:bg-red">
      <img class="w-full h-full object-center object-scale-down" src="@/assets/images/logos/logo-will.svg" alt="Logo Will Leone">
    </router-link>
    <nav
      :class="[
        vertical == true ? 'transform -rotate-90 flex flex-row justify-center items-center' : '',
        horizontal == true ? 'flex flex-row justify-center items-centerd' : '',
      ]"
    >
      <router-link to="/sobre" data-text="Sobre" class="glitch-text text-md text-white mr-8 duration-500">Sobre</router-link>
      <router-link to="/projetos" data-text="Projetos" class="glitch-text text-md text-white mr-8 duration-500">Projetos</router-link>
      <router-link to="" data-text="Contato" class="glitch-text text-md text-white duration-500">Contato</router-link>
    </nav>
    <div
      :class="[
        vertical == true ? 'w-12 flex flex-col justify-center items-center' : '',
        horizontal == true ? 'h-12 flex flex-row justify-center items-center' : '',
      ]"
    >
      <a
        class="w-10 h-10 py-3 px-2 border rounded-full border-black duration-500 hover:border-red" href="" title=""
        :class="[
          vertical == true ? 'mb-4' : '',
          horizontal == true ? 'mr-4' : '',
        ]"
      >
        <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-instagram.svg" alt="Ícone instagram">
      </a>
      <a
        class="w-10 h-10 py-3 px-2 border rounded-full border-black duration-500 hover:border-red" href="" title=""
        :class="[
          vertical == true ? 'mb-4' : '',
          horizontal == true ? 'mr-4' : '',
        ]"
      >
        <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-facebook.svg" alt="Ícone facebook">
      </a>
      <a
        class="w-10 h-10 py-3 px-2 border rounded-full border-black duration-500 hover:border-red" href="" title=""
      >
        <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-linkedin.svg" alt="Ícone linkedin">
      </a>
    </div>
  </header>
  <header
    v-else
    class="w-full min-h-14 flex flex-row justify-between items-center pr-1 box-border fixed bg-gradient-to-b from-transparent to-black bottom-0 left-0"
  >
    <button @click="open()" class="h-14 text-md text-white flex flex-row justify-center items-center outline-none focus:outline-none">
      <img class="w-4 h-4 mx-1" src="@/assets/icons/red/icon-menu-mobile.svg" alt="">
      Menu
    </button>
    <router-link to="" class="w-14 h-14 p-2 bg-transparent duration-500 hover:bg-red">
      <img class="w-full h-full object-center object-scale-down" src="@/assets/images/logos/logo-will.svg" alt="Logo Will Leone">
    </router-link>
    <transition name="fade">
      <div
        v-if="showMenu == true"
        class="menu w-full h-screen flex flex-col justify-end items-start box-border overflow-hidden absolute bottom-0 left-0 z-100 duration-500"
      >
        <div class="w-full h-screen absolute top-0 left-0 bg-black_750"></div>
        <div class="w-full h-9/10-screen p-4 rounded-t-2xl flex flex-col justify-center items-start relative bg-red">
          <div class="w-full flex flex-row justify-between items-center absolute top-4 pr-6">
            <p class="text-2xl text-white">Menu</p>
            <button @click="close()"
              class="w-10 h-10 p-2 border rounded-full border-white_500 duration-500 hover:border-white"
            >
              <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-close.svg" alt="Ícone linkedin">
            </button>
          </div>
          <nav class="relative flex flex-col justify-start items-start">
            <router-link to="/sobre" data-text="Sobre" class="glitch-text text-5xl text-white duration-500">Sobre</router-link>
            <router-link to="/projetos" data-text="Projetos" class="glitch-text text-5xl text-white duration-500">Projetos</router-link>
            <router-link to="" data-text="Contato" class="glitch-text text-5xl text-white duration-500">Contato</router-link>
          </nav>
          <div
            class="h-12 flex flex-row justify-center items-center absolute bottom-4 left-4"
          >
            <a class="w-10 h-10 py-3 px-2 mr-2 border rounded-full border-white_500 duration-500 hover:border-red" href="" title="">
              <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-instagram.svg" alt="Ícone instagram">
            </a>
            <a class="w-10 h-10 py-3 px-2 mr-2 border rounded-full border-white_500 duration-500 hover:border-red" href="" title="">
              <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-facebook.svg" alt="Ícone facebook">
            </a>
            <a class="w-10 h-10 py-3 px-2 border rounded-full border-white_500 duration-500 hover:border-red" href="" title="">
              <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-linkedin.svg" alt="Ícone linkedin">
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    vertical: Boolean,
    horizontal: Boolean,
    isMobile: Boolean
  },
  data() {
    return{
      showMenu: false,
      hasHover: false,
      imageCover: '',
    }
  },
  methods: {
    open() {
      this.showMenu = true;
    },
    close() {
      this.showMenu = false;
    },
    showCover(img) {
      this.imageCover = img;
      this.hasHover = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin glitchCopy { 
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
}
.glitch-text{
  @media screen and (max-width: 1024px) {
    position: relative;
    animation: glitch-skew 1s infinite linear alternate-reverse;
    
    &::before{
      @include glitchCopy;
      left: 2px;
      text-shadow: -2px 0 #ff00c1;
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    
    &::after {
      @include glitchCopy;
      left: -2px;
      text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
      animation: glitch-anim2 1s infinite linear alternate-reverse;
    }
  }
}
</style>