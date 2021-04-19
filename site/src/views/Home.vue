<template>
  <div class="w-full min-h-screen">
    <section class="w-full lg:min-h-auto box-border lg:pl-20 flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-end lg:items-center">
      <button v-if="isMobile == true" class="w-12 h-12 rounded-full border border-heavy_grey p-3 mt-8 self-center flex flex-col justify-center items-center outline-none focus:outline-none">
        <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-arrow-down.svg" alt="Ícone do botão para continuar descendo a página">
      </button>
      <div class="content transform lg:rotate-0 w-full xl:w-7/12 2xl:w-8/12 flex flex-col justify-center items-end px-4 lg:px-0">
        <div class="w-full xl:w-10/12 flex flex-col justify-center items-center lg:items-start">
          <h1 class="2xl:w-8/12 text-xl xsm:text-3xl xl:text-5xl 2xl:text-6xl text-center lg:text-left text-white">UX/UI Designer &<br> Front-End Developer</h1>
          <button class="w-12 h-12 rounded-full border border-heavy_grey p-3 flex flex-col justify-center items-center hover:border-red duration-500 outline-none focus:outline-none">
            <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-arrow-down.svg" alt="Ícone do botão para continuar descendo a página">
          </button>
        </div>
      </div>
      <figure id="trigger3" class="cover w-full xl:w-5/12 2xl:w-4/12 h-36 lg:h-screen self-center lg:self-auto mb-4 lg:mb-0 overflow-hidden">
        <img class="w-full h-full object-cover object-right lg:object-right lg:w-screen" src="@/assets/images/pictures/me/will-leone.png" alt="Foto de Will Leone">
      </figure>
    </section>

    <section class="w-full min-h-screen lg:pl-20 lg:pr-20 pt-10 pb-20 lg:pt-20 lg:pb-40 flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <div id="trigger" class="w-10/12 lg:w-5/12 p-6 lg:p-12 relative bg-deep_grey transform scale-50 lg:scale-100">       
        <div class="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white leading-tight">
          <p>“When you do something beautiful and nobody noticed, do not be sad. For the sun, every morning is a beautiful spectacle and yet most of the audience still sleeps.”</p>
          <div class="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 lg:mt-8">
            <small class="text-md xl:text-xl 2xl:text-2xl text-white block">John Lennon</small>
            <router-link to="/sobre" class="text-md xl:text-lg 2xl:text-xl text-white flex flex-row justify-center items-center mt-4 lg:mt-0">
              <span class="w-8 h-0.5 bg-red mr-2 block"></span>
              <span data-text="Saiba mais sobre mim" class="glitch-text text-sm lg:text-lg">Saiba mais sobre mim</span>
            </router-link>
          </div>
        </div>
      </div>
      <div id="trigger2" class="w-10/12 lg:w-5/12 p-6 lg:p-12 mt-8 lg:mt-40 relative bg-red transform scale-50 lg:scale-100">       
        <div class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-white leading-none">
          <p>“The art challenges the technology, and the technology inspires the art.”</p>
          <div class="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 lg:mt-8">
            <small class="text-md xl:text-xl 2xl:text-2xl text-white block">John Lasseter</small>
            <router-link to="" class="text-md xl:text-lg 2xl:text-xl text-white flex flex-row justify-center items-center mt-4 lg:mt-0">
              <span class="w-8 h-0.5 bg-black mr-2 block"></span>
              <span data-text="Veja alguns projetos" class="glitch-text text-sm lg:text-lg">Veja alguns projetos</span>
            </router-link>
          </div>
        </div>
      </div>
      
    </section>
    <Header :vertical="true" :isMobile="isMobile" />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import { TweenMax } from 'gsap';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      getWindowWidth: window.innerWidth,
      isMobile: false,
    }
  },
  watch: {
    watchWindowWidth() {
      if( this.getWindowWidth >= 1024 ) {
        this.isMobile = false;
      }
      else {
        this.isMobile = true;
      }
    }
  },
  created(){
    window.addEventListener('mousemove', this.drag);
  },
  mounted() {
    if( this.getWindowWidth >= 1024 ) {
      this.isMobile = false;
    }
    else {
      this.isMobile = true;
    }
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });

    if( this.getWindowWidth >= 1024 ) {
      const tween = TweenMax.to("#trigger", 0.25, {css: {x: window.innerWidth / 2 }, ease: 'ease-in-out'});
      const scene2 = this.$scrollmagic.scene({
        triggerElement: '#trigger',
        triggerHook: 1,
        duration: "100%"
      }).setTween(tween);

      const tween2 = TweenMax.to("#trigger2", 0.25, {css: {x: -(window.innerWidth / 2)}, ease: 'ease-in-out'});
      const scene3 = this.$scrollmagic.scene({
        triggerElement: '#trigger2',
        triggerHook: 1,
        duration: "100%"
      }).setTween(tween2);

      const tween3 = TweenMax.to("#trigger3", 0.5, {css: {width: 0}, ease: 'ease-in-out'});
      const scene4 = this.$scrollmagic.scene({
        triggerElement: '#trigger2',
        triggerHook: 0,
        duration: "100%"
      }).setTween(tween3);

      this.$scrollmagic.addScene(scene2);
      this.$scrollmagic.addScene(scene3);
      this.$scrollmagic.addScene(scene4);
    } else {
      const tween = TweenMax.to("#trigger", 0.25, {css: {scale: 1}, ease: 'ease-in-out'});
      const scene2 = this.$scrollmagic.scene({
        triggerElement: '#trigger',
        triggerHook: 0.75,
        duration: "100%"
      }).setTween(tween);

      const tween2 = TweenMax.to("#trigger2", 0.25, {css: {scale: 1}, ease: 'ease-in-out'});
      const scene3 = this.$scrollmagic.scene({
        triggerElement: '#trigger2',
        triggerHook: 1,
        duration: 400
      }).setTween(tween2);

      this.$scrollmagic.addScene(scene2);
      this.$scrollmagic.addScene(scene3);
    }
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {  
    onResize() {
      this.getWindowWidth = window.innerWidth
      
      if( this.getWindowWidth >= 1024 ) {
        this.isMobile = false;
      }
      else {
        this.isMobile = true;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes showContent {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }	
}

.content {
  opacity: 0;
  animation-name: showContent;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

.cover {
  position: relative;

  img {
    opacity: 0;
    animation-name: showContent;
    animation-duration: 0.5s;
    animation-delay: 1.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  &:after {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
    background: rgb(208, 20, 20);
    animation-name: showCover;
    animation-duration: 1.15s;
    animation-delay: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;

    @keyframes showCover {
      0% {
        width: 0;
        right: 0;
        left: auto;
      }
      35% {
        width: 100%;
        right: 0;
        left: auto;
      }
      75% {
        width: 100%;
        right: auto;
        left: 0;
      }
      100% {
        width: 0;
        right: auto;
        left: 0;
      }	
    }
  }
}
</style>