<template>
  <div class="w-full h-screen overflow-hidden">
    <main class="w-full h-full flex flex-row justify-between items-center">
      <h1 class="w-full lg:w-auto text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl text-white text-center lg:text-left leading-none absolute left-0 lg:left-10 2xl:left-40 top-24 md:top-8 lg:top-2/4 transform lg:-translate-y-2/4 z-20">
        {{ $t('wip.title.first') }}
      </h1>

      <!-- Carrossel de projetos

        <h1 class="w-full lg:w-auto text-3xl md:text-5xl lg:text-7xl 2xl:text-8xl text-white text-center lg:text-left leading-none absolute left-0 lg:left-10 2xl:left-40 top-24 md:top-8 lg:top-2/4 transform lg:-translate-y-2/4 z-20">
          {{ $t('projects.title.first') }}<br> {{ $t('projects.title.second') }}
        </h1>
        <div class="w-full h-full flex flex-col justify-between items-center relative">
          <hooper
            ref="hooper"
            class="hooper"
            style="width: 100vw; height: 100vh"
            :vertical="true"
            :itemsToShow="1"
            :centerMode="true"
            @slide="getCurrentSlide"
          >
            <slide
              v-for="(item, index) of projects"
              :key="index"
            >
              <div class="w-full h-full flex flex-col justify-center items-center relative">
                <img class="w-full h-full object-cover absolute top-0 left-0 opacity-10 filter-blur" :src="setCoverImages(item.cover)" :alt="item.alt">
                <div class="matrix-card block w-5/10-screen lg:w-screen-md h-3/10-screen md:h-5/10-screen rounded-3xl relative overflow-hidden">
                  <div class="w-full h-full mask-image">
                    <img class="w-full h-full object-cover" :src="setCoverImages(item.cover)" :alt="item.alt">
                  </div>
                  <img class="matrix logo max-h-10 md:max-h-20 absolute top-2/4 left-2/4 transform z-10" :src="setLogos(item.logo)" :alt="item.alt">
                  <router-link :to="'/projetos/' + item.name" class="text-md xl:text-lg 2xl:text-xl text-white flex flex-row justify-center items-center absolute top-3/4 left-2/4 transform -translate-x-2/4 z-10">
                    <span class="w-8 h-0.5 bg-red mr-2 block"></span>
                    <span :data-text="$t('projects.title.cta')" class="glitch-text text-sm lg:text-lg">{{ $t('projects.cta') }}</span>
                  </router-link>
                </div>
              </div>
            </slide>
          </hooper>
          <div class="w-28 lg:w-12 h-12 lg:h-28 absolute bottom-20 lg:top-2/4 left-2/4 lg:left-auto lg:right-10 2xl:right-40 transform -translate-x-2/4 lg:-translate-x-0 lg:-translate-y-2/4 flex flex-row lg:flex-col justify-between z-20">
            <button
              @click="$refs.hooper.slidePrev()"
              :disabled="currentSlide == 0"
              :class="currentSlide == 0 ? 'opacity-20' : ''"
              class="w-12 h-12 p-3 rounded-full border transform rotate-180 border-white_500 duration-500 outline-none focus:outline-none hover:border-white"
            >
              <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-arrow-down.svg" alt="">
            </button>
            <button
              @click="$refs.hooper.slideNext()"
              :disabled="currentSlide == (slidesLength - 1)"
              :class="currentSlide == (slidesLength - 1) ? 'opacity-20' : ''"
              class="w-12 h-12 p-3 rounded-full border border-white_500 duration-500 outline-none focus:outline-none hover:border-white"
            >
              <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-arrow-down.svg" alt="">
            </button>
          </div>
        </div>

      -->
    </main>
    <Header :horizontal="true" :isMobile="isMobile" />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import { Hooper, Slide } from 'hooper';

export default {
  name: "Projects",
  components: {
    Header,
    Hooper,
    Slide
  },
  title: 'Will Leone | Projetos',
  data() {
    return {
      getWindowWidth: window.innerWidth,
      isMobile: false,
      currentSlide: 0,
      slidesLength: 0,
      projects: [
        {
          name: 'charlie',
          logo: 'logo-charlie',
          cover: 'charlie/cover-charlie',
          alt: 'Imagem do projeto charlie',
        },
        {
          name: 'buddy',
          logo: 'logo-buddy',
          cover: 'buddy/cover-buddy',
          alt: 'Imagem do projeto buddy',
        },
        {
          name: 'smash',
          logo: 'logo-smash',
          cover: 'smash/cover-smash',
          alt: 'Imagem do projeto smash',
        },
      ]
    }
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
    setCoverImages(value) {
      return require('@/assets/images/pictures/'+value+'.png');
    },
    setLogos(value) {
      return require('@/assets/images/logos/'+value+'.svg');
    },
    getCurrentSlide(value) {
      if( value ) {
        this.currentSlide = value.currentSlide;
        this.slidesLength = this.$refs.hooper.slidesCount;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.matrix {
  transform: matrix(1, -0.01, -0.1, 1, 0, 0);

  &.logo {
    transform: matrix(1, -0.01, -0.1, 1, 0, 0) translate(-50%, -50%);
  }
}

.mask-image {
  -webkit-mask-image: -webkit-gradient(linear, left 0%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  -moz-mask-image: -moz-gradient(linear, left 0%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: gradient(linear, left 0%, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}

.matrix-card {
  opacity: 0;
  transition-duration: 1s;
  transition-delay: 0.25s;
  transform: translateY(20px);
}

.is-current {
  .matrix-card {
    opacity: 1;
    @extend .matrix;
  }
}

.hooper .hooper-slide {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;

  &:focus, &:active {
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
  }
}
</style>