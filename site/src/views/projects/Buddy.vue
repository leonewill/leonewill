<template>
  <div class="w-full overflow-hidden">
    <main class="w-full flex flex-col justify-start items-center">
      <div class="max-w-sm pl-8 absolute top-8 lg:top-20 left-0 border-b border-red">
        <p class="text-4xl text-white">Buddy</p>
        <a class="text-xl text-white" href="http://www.appbuddy.pet" target="_blank">appbuddy.pet</a>
      </div>
      <div class="w-full 2xl:w-11/12 pt-40 lg:pt-80 px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 2xl:gap-40">
        <div class="w-full px-4 lg:px-0 flex flex-col justify-start items-center lg:items-start">
          <img class="w-8/12" src="@/assets/images/logos/logo-buddy.svg" alt="Logo aplicativo Buddy">
          <p class="text-md text-white mt-8">{{ $t('projects.buddy.wip') }}</p>
        </div>
        <div id="redContainer" class="w-full p-10 lg:p-12 bg-red transform scale-50 lg:scale-100">
          <p class="text-3xl md:text-5xl 2xl:text-6xl text-white leading-tight">{{ $t('projects.buddy.welcome') }}</p>
        </div>
      </div>
      <div class="w-12/12 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40">
        <div class="w-full relative flex flex-col justify-start items-start">
          <div class="w-full h-screen relative">
            <img
              class="buddy-cover w-full h-full object-cover"
              alt="Imagem de capa da Buddy"
              src="@/assets/images/pictures/buddy/cover-buddy.png"
            />
            <p class="buddy-slogan text-white w-full text-center top-2/4 left-2/4 absolute transform -translate-y-2/4 -translate-x-2/4">{{ $t('projects.buddy.cover') }}</p>
          </div>
          <div class="w-full flex flex-col justify-start items-start">
            <p class="w-full lg:w-8/12 text-xl text-white my-8 px-10 lg:pl-10 lg:pr-0">
              {{ $t('projects.buddy.description.10') }}
            </p>
            <div class="w-full lg:w-8/12 flex flex-row justify-start items-center px-10 lg:pl-10 lg:pr-0">
              <a class="w-12 h-12 p-3 rounded-full border border-white_500 duration-500 hover:border-red" href="https://www.instagram.com/buddy.adote/" title="Acompanhe a Buddy no Instagram">
                <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-instagram.svg" alt="Ícone Instagram">
              </a>
              <a class="w-12 h-12 p-3 mx-4 rounded-full border border-white_500 duration-500 hover:border-red" href="https://www.facebook.com/buddy.adote" title="Acompanhe a Buddy no Facebook">
                <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-facebook.svg" alt="Ícone Facebook">
              </a>
              <a class="w-12 h-12 p-3 rounded-full border border-white_500 duration-500 hover:border-red" href="https://www.linkedin.com/company/buddy-adote" title="Acompanhe a Buddy no Linkedin">
                <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-linkedin.svg" alt="Ícone Linkedin">
              </a>
            </div>
          </div>
        </div>
        <div class="w-full px-10 lg:pl-0 lg:pr-20 mt-0 lg:mt-40 flex flex-col justify-center">
          <p class="text-4xl lg:text-6xl text-white">{{ $t('projects.buddy.title') }}</p>
          <p class="text-xl text-white">
            {{ $t('projects.buddy.description.1') }}
            <br><br>
            {{ $t('projects.buddy.description.2') }}
            <br><br>
            {{ $t('projects.buddy.description.3') }}
            <br><br>
            {{ $t('projects.buddy.description.4') }}
            <br><br>
            {{ $t('projects.buddy.description.5') }}
            <br><br>
            {{ $t('projects.buddy.description.6') }}
            <br><br>
            {{ $t('projects.buddy.description.7') }}
            <br><br>
            {{ $t('projects.buddy.description.8') }}
            <br><br>
            {{ $t('projects.buddy.description.9') }}
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-20">
        <p class="w-full lg:w-6/12 text-4xl lg:text-6xl px-4 lg:px-0 text-white text-center">{{ $t('projects.buddy.subtitle') }} 👀</p>
        <div class="w-11/12 grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense lg:grid-cols-4 gap-10 mt-20">
          <div class="w-full flex flex-col md:flex-row lg:flex-col">
            <img class="w-full h-auto block object-cover md:-mt-40 md:mb-40 lg:mt-0 lg:mb-0 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-home.png" alt="">
            <img class="w-full h-auto block object-cover ml-0 md:ml-10 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-signin.png" alt="">
          </div>
          <div class="w-full flex flex-col md:flex-row lg:flex-col mt-10 lg:mt-40">
            <img class="w-full h-auto block object-cover mt-10 md:-mt-40 md:mb-40 lg:mt-0 lg:mb-0 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-pet.png" alt="">
            <img class="w-full h-auto block object-cover ml-0 md:ml-10 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-signup.png" alt="">
          </div>
          <div class="w-full flex flex-col md:flex-row lg:flex-col -mt-20 lg:mt-0">
            <img class="w-full h-auto block object-cover md:-mt-40 md:mb-40 lg:mt-0 lg:mb-0 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-adoption-flow.png" alt="">
            <img class="w-full h-auto block object-cover ml-0 md:ml-10 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-ong.png" alt="">
          </div>
          <div class="w-full flex flex-col md:flex-row lg:flex-col -mt-10 lg:mt-40">
            <img class="w-full h-auto block object-cover mt-10 md:-mt-40 md:mb-40 lg:mt-0 lg:mb-0 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-search.png" alt="">
            <img class="w-full h-auto block object-cover ml-0 md:ml-10 lg:ml-0 mt-10 md:mt-0 lg:mt-10 border border-heavy_grey" src="@/assets/images/pictures/buddy/buddy-search-result.png" alt="">
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
  name: "Buddy",
  components: {
    Header,
    Footer
  },
  title: 'Will Leone | Projeto - Buddy',
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
      const tween2 = TweenMax.to(".buddy-slogan", 0.25, {css: {color: "#D01414"}, ease: 'ease-in-out'});
      const scene2 = this.$scrollmagic.scene({
        triggerElement: '.buddy-slogan',
        triggerHook: 1,
        duration: "100%"
      }).setTween(tween2);
      const tween3 = TweenMax.to({}, 2, {
        onUpdateParams:["{self}"],
        onUpdate:function(tl){
          var tlp = (tl.progress()*100)>>0;
          TweenMax.set('.buddy-cover',{
            '-webkit-filter':'grayscale(' + tlp + '%' + ')',
            'filter':'grayscale(' + tlp + '%' + ')'
          });
        }
      });
      const scene3 = this.$scrollmagic.scene({
        triggerElement: '.buddy-cover',
        triggerHook: 0.75,
        duration: "100%"
      }).setTween(tween3);

      this.$scrollmagic.addScene(scene1);
      this.$scrollmagic.addScene(scene2);
      this.$scrollmagic.addScene(scene3);
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

<style lang="scss" scoped>
.buddy-slogan {
  font-size: 7vw;

  @media screen and (max-width: 1024px) {
    font-size: 15vw;
  }
}
</style>