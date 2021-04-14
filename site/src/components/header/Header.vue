<template>
  <header
    v-if="isMobile == false"
    class="top-0 left-0"
    :class="[
      vertical == true ? 'w-full lg:w-14 h-14 lg:h-screen flex flex-row lg:flex-col justify-between items-center pb-4 box-border fixed bg-black' : '',
      horizontal == true ? 'w-full min-h-14 flex flex-row justify-between items-center pr-1 box-border fixed bg-gradient-to-t from-transparent to-black' : '',
    ]"
  >
    <router-link to="" class="w-14 h-14 p-2 bg-transparent duration-500 hover:bg-red">
      <img class="w-full h-full object-center object-scale-down" src="@/assets/images/logos/logo-will.svg" alt="Logo Will Leone">
    </router-link>
    <nav
      :class="[
        vertical == true ? 'transform -rotate-90 flex flex-row justify-center items-center' : '',
        horizontal == true ? 'flex flex-row justify-center items-centerd' : '',
      ]"
    >
      <router-link to="" data-text="Sobre" class="glitch-text text-md text-white mr-8 duration-500">Sobre</router-link>
      <router-link to="" data-text="Projetos" class="glitch-text text-md text-white mr-8 duration-500">Projetos</router-link>
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
        class="w-full h-screen p-4 flex flex-col justify-between items-start box-border overflow-hidden absolute bottom-0 left-0 z-90 duration-500"
        :class="hasHover == true ? 'bg-black' : 'bg-red'"
      >
        <div class="relative w-full flex flex-row justify-between items-center">
          <p class="text-2xl text-white">Menu</p>
          <button @click="close()"
            class="w-10 h-10 p-2 border rounded-full border-white_500 duration-500 hover:border-white"
          >
            <img class="w-full h-full object-center object-scale-down" src="@/assets/icons/white/icon-close.svg" alt="Ícone linkedin">
          </button>
        </div>
        <nav class="relative flex flex-col justify-start items-start">
          <router-link to="" data-text="Sobre" class="glitch-text text-5xl text-white duration-500">Sobre</router-link>
          <router-link to="" data-text="Projetos" class="glitch-text text-5xl text-white duration-500">Projetos</router-link>
          <router-link to="" data-text="Contato" class="glitch-text text-5xl text-white duration-500">Contato</router-link>
        </nav>
        <div
          class="h-12 flex flex-row justify-center items-center"
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
:root{
  --color-text: #fff;
  --color-bg: #000;
  --color-link: #f9d77e;
  --color-link-hover: #fff;
  --color-info: #efc453;
  --glitch-width: 100vw;
  --glitch-height: 100vh;
  --gap-horizontal: 10px;
  --gap-vertical: 5px;
  --time-anim: 4s;
  --delay-anim: 2s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: none;
  --blend-mode-4: none;
  --blend-mode-5: overlay;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: transparent;
  --blend-color-4: transparent;
  --blend-color-5: #af4949;
}

.glitch{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  .glitch__item{
    background: url('../../assets/images/logos/logo-will.svg') no-repeat 50% 50% / cover;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  
  .glitch__item:nth-child(n+2) {
    opacity: 0;
    animation-duration: var(--time-anim);
    animation-delay: var(--delay-anim);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  .glitch__item:nth-child(2){
    background-color: var(--blend-color-2);
    background-blend-mode: var(--blend-mode-2);
    animation-name: glitch-anim-2;
  }
  
  .glitch__item:nth-child(2){
    background-color: var(--blend-color-3);
    background-blend-mode: var(--blend-mode-3);
    animation-name: glitch-anim-3;
  }
  
  .glitch__item:nth-child(4){
    background-color: var(--blend-color-4);
    background-blend-mode: var(--blend-mode-4);
    animation-name: glitch-anim-4;
  }
  
  .glitch__item:nth-child(5){
    background-color: var(--blend-color-5);
    background-blend-mode: var(--blend-mode-5);
    animation-name: glitch-anim-flash;
    
    @keyframes glitch-anim-flash{
      0%,5%{
        opacity: 0.2;
        transform: translate3d(var(--glitch-horizontal),var(--glitch-height),0)
      }
      5.5%,100%{
        opacity: 0;
        transform: translate3d(0, 0, 0);
      }
    }  
  }
}

@mixin glitchCopy { 
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
}

.glitch-text{
  &:hover {
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

@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
			transform: skew((random(100) / 100) + deg);
    }
  }
}

@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
			transform: skew((random(100) / 100) + deg);
    }
  }
}

@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}
</style>