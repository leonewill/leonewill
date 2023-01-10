<template>
  <div class="w-full overflow-hidden">
    <main class="w-full flex flex-col justify-start items-center">
      <div class="max-w-sm pl-8 absolute top-8 lg:top-20 left-0 border-b border-red">
        <p class="text-4xl text-white">Charlie</p>
        <a class="text-xl text-white" href="https://www.staycharlie.com.br" target="_blank">staycharlie.com.br</a>
      </div>
      <div class="w-full 2xl:w-11/12 pt-40 lg:pt-80 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:gap-40">
        <div class="w-full px-4 lg:px-0 flex flex-col justify-start items-center lg:items-start">
          <img class="w-6/12 lg:w-8/12" src="@/assets/images/logos/logo-charlie.svg" alt="Logo Charlie">
        </div>
        <div id="redContainer" class="w-full p-10 lg:p-12 bg-red transform scale-50 lg:scale-100">
          <p class="text-3xl md:text-5xl 2xl:text-6xl text-white leading-tight">
            {{ $t('projects.charlie.welcome') }}
          </p>
        </div>
      </div>
      <div class="w-12/12 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">
        <div class="w-full relative flex flex-col justify-start items-start">
          <div class="w-full h-screen relative">
            <img
              class="w-full h-full object-contain lg:object-cover object-center lg:object-top"
              alt="Imagem do site do Charlie"
              src="@/assets/images/pictures/charlie/charlie-one-page.png"
            />
          </div>
        </div>
        <div class="w-full px-10 lg:pl-0 lg:pr-20 mt-0 lg:mt-40 flex flex-col justify-center">
          <p class="text-4xl lg:text-6xl text-white">{{ $t('projects.charlie.title') }}</p>
          <p class="text-xl text-white">
            {{ $t('projects.charlie.description.1') }}
            <br><br>
            {{ $t('projects.charlie.description.2') }}
            <br><br>
            {{ $t('projects.charlie.description.3') }}
            <br><br>
            {{ $t('projects.charlie.description.4') }}
            <br><br>
            {{ $t('projects.charlie.description.5') }}
          </p>
        </div>
      </div>
      <div class="w-12/12 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">
        <div class="w-full px-0 lg:px-10 lg:pl-10 lg:pr-20 mt-0 lg:mt-40 flex flex-col justify-start">
          <p class="text-xl text-white px-10 lg:px-0">
            {{ $t('projects.charlie.description.6') }}
            <br><br>
            {{ $t('projects.charlie.description.7') }}
          </p>
          <div class="w-11/12 grid grid-cols-2 pl-10 lg:pl-0 gap-4 lg:gap-10 mt-20">
            <div class="w-full flex flex-col">
              <img class="w-full h-auto block object-cover md:mb-10 lg:mt-0 lg:mb-0 border border-heavy_grey" src="@/assets/images/pictures/charlie/charlie-app-home.png" alt="">
              <img class="w-full h-auto block object-cover ml-0 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/charlie/charlie-app-reservation.png" alt="">
              <img class="w-full h-auto block object-cover ml-0 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/charlie/charlie-app-unit.png" alt="">
            </div>
            <div class="w-full flex flex-col mt-10 lg:mt-40">
              <img class="w-full h-auto block object-cover mt-10 md:mb-10 lg:mt-0 lg:mb-0 border border-heavy_grey" src="@/assets/images/pictures/charlie/charlie-app-orders.png" alt="">
              <img class="w-full h-auto block object-cover ml-0 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/charlie/charlie-app-services.png" alt="">
            </div>
          </div>
        </div>
        <div class="w-full relative flex flex-col justify-start items-start">
          <div class="w-full h-screen relative">
            <img
              class="w-full h-full object-contain lg:object-cover object-center lg:object-top"
              alt="Imagem do site do Charlie"
              src="@/assets/images/pictures/charlie/charlie-one-page-investors.png"
            />
          </div>
          <div class="w-full relative">
            <div class="w-11/12 grid grid-cols-2 pl-10 lg:pl-0 gap-4 lg:gap-10 mt-0 lg:mt-20">
              <div class="w-full flex flex-col">
                <img class="w-full h-auto block object-cover mb-5 lg:mt-0 lg:mb-0" src="@/assets/images/pictures/charlie/charlie-concierge-login.png" alt="">
                <img class="w-full h-auto block object-cover ml-0 lg:ml-0 mt-0 lg:mt-10" src="@/assets/images/pictures/charlie/charlie-concierge-panel.png" alt="">
              </div>
              <div class="w-full flex flex-col md:flex-row lg:flex-col mt-10 lg:mt-40">
                <img class="w-full h-auto block object-contain object-top lg:object-center lg:object-cover mt-10 md:mb-40 lg:mt-0 lg:mb-0" src="@/assets/images/pictures/charlie/charlie-concierge-messages.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pt-20 px-10 relative">
        <img class="investors-panel w-full lg:w-7/12 transform object-cover" src="@/assets/images/pictures/charlie/charlie-investors-panel.png" alt="">
        <img class="investors-finances w-full lg:w-7/12 transform object-cover float-right mt-10" src="@/assets/images/pictures/charlie/charlie-investors-finances.png" alt="">
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-20">
        <p class="w-full lg:w-6/12 text-4xl lg:text-6xl px-4 lg:px-0 text-white text-center">{{ $t('projects.charlie.subtitle') }} 👀</p>
        <div class="w-full pt-20 px-10 relative">
          <img class="platform-home w-full lg:w-7/12 transform object-cover border-2 border-heavy_grey" src="@/assets/images/pictures/charlie/charlie-platform-home.png" alt="">
          <img class="platform-search w-full lg:w-7/12 transform object-cover border-2 border-heavy_grey float-right mt-10" src="@/assets/images/pictures/charlie/charlie-platform-search.png" alt="">
        </div>
      </div>
    </main>
    <Footer class="mt-8 lm:mt-20" :isProjectPage="true" />
    <Header :horizontal="true" :isMobile="isMobile" />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import { TweenMax } from 'gsap';

export default {
  name: "Charlie",
  components: {
    Header,
    Footer
  },
  title: 'Will Leone | Projeto - Charlie',
  data() {
    return {
      getWindowWidth: window.innerWidth,
      isMobile: false,
    }
  },
  mounted() {
    if( this.getWindowWidth >= 1024 ) {
      this.isMobile = false;
      
      const tween2 = TweenMax.to(".investors-panel", 0.25, {css: {x: '50%'}, ease: 'ease-in-out'});
      const scene2 = this.$scrollmagic.scene({
        triggerElement: '.investors-panel',
        triggerHook: 1,
        duration: "100%"
      }).setTween(tween2);
      
      const tween3 = TweenMax.to(".investors-finances", 0.25, {css: {x: '-50%'}, ease: 'ease-in-out'});
      const scene3 = this.$scrollmagic.scene({
        triggerElement: '.investors-finances',
        triggerHook: 1,
        duration: "100%"
      }).setTween(tween3);
      
      const tween4 = TweenMax.to(".platform-home", 0.25, {css: {x: '50%'}, ease: 'ease-in-out'});
      const scene4 = this.$scrollmagic.scene({
        triggerElement: '.platform-home',
        triggerHook: 1,
        duration: "100%"
      }).setTween(tween4);
      
      const tween5 = TweenMax.to(".platform-search", 0.25, {css: {x: '-50%'}, ease: 'ease-in-out'});
      const scene5 = this.$scrollmagic.scene({
        triggerElement: '.platform-search',
        triggerHook: 1,
        duration: "100%"
      }).setTween(tween5);

      this.$scrollmagic.addScene(scene2);
      this.$scrollmagic.addScene(scene3);
      this.$scrollmagic.addScene(scene4);
      this.$scrollmagic.addScene(scene5);
    }
    else {
      this.isMobile = true;

      const tween1 = TweenMax.to("#redContainer", 0.25, {css: {scale: 1}, ease: 'ease-in-out'});
      const scene1 = this.$scrollmagic.scene({
        triggerElement: '#redContainer',
        triggerHook: 0.75,
        duration: "100%"
      }).setTween(tween1);

      this.$scrollmagic.addScene(scene1);
    }
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
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
};
</script>