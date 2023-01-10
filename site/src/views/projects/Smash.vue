<template>
  <div class="w-full overflow-hidden">
    <main class="w-full flex flex-col justify-start items-center">
      <div class="max-w-sm pl-8 absolute top-8 lg:top-20 left-0 border-b border-red">
        <p class="text-4xl text-white">Smash</p>
      </div>
      <div class="w-full 2xl:w-11/12 pt-40 lg:pt-80 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:gap-40">
        <div class="w-full px-4 lg:px-0 flex flex-col justify-start items-center lg:items-start">
          <img class="w-full" src="@/assets/images/logos/logo-smash.svg" alt="Logo aplicativo Smash">
          <p class="text-md text-white mt-8">{{ $t('projects.smash.wip') }}</p>
        </div>
        <div id="redContainer" class="w-full p-10 lg:p-12 bg-red transform scale-50 lg:scale-100">
          <p class="text-3xl md:text-5xl 2xl:text-6xl text-white leading-tight">{{ $t('projects.smash.welcome') }}</p>
        </div>
      </div>
      <div class="w-12/12 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">
        <div class="w-full h-screen relative">
          <video
            autoplay
            muted
            loop
            webkit-playsinline
            playsinline
            class="w-full h-full object-cover"
            src="http://www.leonewill.com/videos/video-smash.mp4"
          >
          </video>
          <img class="w-10/12 top-2/4 left-2/4 absolute transform -translate-y-2/4 -translate-x-2/4" src="@/assets/images/logos/logo-smash.svg" alt="Logo aplicativo Smash">
        </div>
        <div class="w-full px-10 lg:pl-0 lg:pr-20 flex flex-col justify-center">
          <p class="text-4xl lg:text-6xl text-white">{{ $t('projects.smash.title1') }}</p>
          <p class="text-xl text-white">
            {{ $t('projects.smash.description.1') }}
            <br><br>
            {{ $t('projects.smash.description.2') }}
          </p>
          <p class="text-4xl lg:text-6xl text-white mt-20">{{ $t('projects.smash.title2') }}</p>
          <p class="text-xl text-white">
            {{ $t('projects.smash.description.3') }}
            <br><br>
            {{ $t('projects.smash.description.4') }}
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-20">
        <p class="w-full lg:w-6/12 text-4xl lg:text-6xl px-4 lg:px-0 text-white text-center">{{ $t('projects.smash.subtitle') }} 👀</p>
        <div class="w-11/12 grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense lg:grid-cols-4 gap-10 mt-20">
          <div class="w-full flex flex-col">
            <img class=" border border-heavy_grey" src="@/assets/images/pictures/smash/smash-splash.png" alt="">
            <video
              autoplay
              muted
              loop
              webkit-playsinline
              playsinline
              class="w-full object-cover mt-10 border border-heavy_grey"
              src="http://www.leonewill.com/videos/smash-list.mp4"
            >
            </video>
          </div>
          <div class="w-full flex flex-col mt-10 md:mt-40">
            <video
              autoplay
              muted
              loop
              webkit-playsinline
              playsinline
              class="w-full object-cover border border-heavy_grey"
              src="http://www.leonewill.com/videos/smash-feed.mp4"
            >
            </video>
            <video
              autoplay
              muted
              loop
              webkit-playsinline
              playsinline
              class="w-full object-cover mt-10 border border-heavy_grey"
              src="http://www.leonewill.com/videos/smash-video-portrait.mp4"
            >
            </video>
          </div>
          <div class="w-full flex flex-col">
            <video
              autoplay
              muted
              loop
              webkit-playsinline
              playsinline
              class="w-full object-cover border border-heavy_grey"
              src="http://www.leonewill.com/videos/smash-profile.mp4"
            >
            </video>
            <video
              autoplay
              muted
              loop
              webkit-playsinline
              playsinline
              class="w-full object-cover mt-10 border border-heavy_grey"
              src="http://www.leonewill.com/videos/smash-video-landscape.mp4"
            >
            </video>
          </div>
          <div class="w-full flex flex-col md:flex-row lg:flex-col lg:mt-40">
            <img class="w-full h-auto block object-cover mt-10 md:-mt-40 md:mb-40 lg:mt-0 lg:mb-0 border border-heavy_grey" src="@/assets/images/pictures/smash/smash-login.png" alt="">
            <img class="w-full h-auto block object-cover ml-0 md:ml-10 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/smash/smash-register.png" alt="">
          </div>
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
  name: "Smash",
  components: {
    Header,
    Footer
  },
  title: 'Will Leone | Projeto - Smash',
  data() {
    return {
      getWindowWidth: window.innerWidth,
      isMobile: false,
    }
  },
  mounted() {
    if( this.getWindowWidth >= 1024 ) {
      this.isMobile = false;
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