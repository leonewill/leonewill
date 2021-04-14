<template>
  <div class="w-full min-h-screen">
    <Header :vertical="true" :isMobile="isMobile" />
    <section class="w-full box-border lg:pl-20 flex flex-col-reverse lg:flex-row justify-between items-center">
      <div class="w-full xl:w-7/12 2xl:w-8/12 flex flex-col justify-center items-end">
        <div class="w-full xl:w-10/12 flex flex-col justify-center items-start">
          <h1 class="2xl:w-8/12 text-4xl xl:text-5xl 2xl:text-6xl text-white">UX/UI Designer & Front-End Developer</h1>
          <button class="w-20 h-20">
            <img src="@/assets/icons/red/icon-arrow-down.svg" alt="Ícone do botão para continuar descendo a página">
          </button>
        </div>
      </div>
      <figure class="w-full xl:w-5/12 2xl:w-4/12 h-3/10-screen lg:h-screen overflow-hidden">
        <img class="w-full h-full object-cover object-center lg:object-right lg:w-screen" src="@/assets/images/pictures/me/will-leone.png" alt="Foto de Will Leone">
      </figure>
    </section>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";

export default {
  name: 'Home',
  components: {
    Header
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
  }
}
</script>
