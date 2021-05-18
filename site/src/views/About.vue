<template>
  <div class="w-full overflow-hidden min-h-screen">
    <section class="w-full lg:min-h-auto box-border flex flex-col xl:flex-row justify-center lg:justify-between items-end lg:items-center">
      <figure id="coverPicture" class="cover w-full lm:w-full xl:w-5/12 2xl:w-4/12 h-96 lm:h-screen self-center lg:self-auto mb-4 lg:mb-0 overflow-hidden">
        <img class="w-full h-full object-cover object-right lg:object-right" src="@/assets/images/pictures/me/will-leone.png" alt="Foto de Will Leone">
      </figure>
      <div class="content transform lg:rotate-0 w-full lm:w-5/12 xl:w-6/12 2xl:w-7/12 flex flex-col justify-start items-start px-4 lg:px-0 mt-8 lm:mt-0">
        <div class="w-full 2xl:w-10/12 border-l border-red px-4 lm:px-16">
          <h1 class="text-3xl lm:text-5xl xl:text-6xl 2xl:text-8xl font-regular text-white leading-tight">Atuo há 10 anos com design e tecnologia</h1>
          <p class="lm:text-md xl:text-lg text-white mt-4">
            Busco cada vez mais projetos interessantes e desafiadores, acabo sempre tentando tomar riscos para buscar resultados ainda maiores do que eu posso esperar. Acredito que por trás de projetos geniais existem pessoas extraordinárias que trabalham como um só time, com um único propósito comum e isso é o que mais me atrai!
            Conhecer profissionais extraordinários e me cercar de boas pessoas.
          </p>
        </div>
        <button class="w-12 h-12 hidden lm:flex rounded-full border border-heavy_grey p-3 mt-8 lm:ml-16 flex-col justify-center items-center duration-500 hover:border-red outline-none focus:outline-none">
          <img class="w-full h-full object-scale-down" src="@/assets/icons/white/icon-arrow-down.svg" alt="Ícone do botão para continuar descendo a página">
        </button>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-start box-border py-12 overflow-hidden">
      <h2 class="title text-white leading-tight ml-4 lm:ml-20 mb-8 lm:mb-20">User<br> <span id="textColorUX">Experience</span> &<br> User <span id="textColor">Interface</span><br> Design</h2>
      <div class="w-max overflow-x-hidden">
        <div id="firstRowUX" class="transform -translate-x-2/3 flex flex-row justify-center items-center flex-nowrap">
          <p
            v-for="(item, index) of firstRowUX"
            :key="index"
            class="flex ml-4 px-8 py-4 text-sm lm:text-3xl text-white bg-deep_grey"
          >
            {{ item }}
          </p>
        </div>
        <div id="secondRowUX" class="transform translate-x-2/3 mt-8 flex flex-row justify-center items-center flex-nowrap">
          <p
            v-for="(item, index) of secondRowUX"
            :key="index"
            class="flex ml-4 px-8 py-4 text-sm lm:text-3xl text-white bg-deep_grey"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div class="w-full box-border py-8 md:py-20 lm:py-40 px-4 lm:px-16 grid grid-cols-1 lm:grid-cols-2 gap-20">
        <blockquote id="designBlockquote" class="transform scale-50 opacity-0 text-5xl md:text-7xl lm:text-9xl text-white leading-tight">
          “Design is not just looks like and feels like. Design is how it works!”
          <span class="w-full block text-2xl lm:text-3xl text-white">- Steve Jobs</span>
        </blockquote>
        <p class="lm:mt-80 lm:pt-80 pl-20 text-xl text-white text-right">
          Pensar em cada detalhe de como construir um produto que agregara valor tanto para a empresa, quanto as pessoas que irão utilizar.<br><br>
          Penso como um designer porém tenho a alma de alguém de negócios, até por que no final do dia caso a interface seja apenas “bonita” e não trouxer resultados, meu trabalho não atingiu metas.<br><br>
          Procuro cada vez mais participar de ideias geniais e liderar pessoas a se tornarem melhor profissionais, acredito que cada vez mais me desenvolvo e me surpreendo com os novos talentos que vou encontrando durante minha jornada e isso me motiva a ir cada vez mais longe.
        </p>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-start box-border py-12 overflow-hidden">
      <h2 class="title text-white leading-tight ml-4 lm:ml-20 mb-8 lm:mb-20"><span id="textColorFront">Front-End</span><br> Engineering</h2>
      <div class="w-max overflow-x-hidden">
        <div id="firstRowFront" class="transform -translate-x-2/3 flex flex-row justify-center items-center flex-nowrap">
          <p
            v-for="(item, index) of firstRowFront"
            :key="index"
            class="flex ml-4 px-8 py-4 text-sm lm:text-3xl text-white bg-deep_grey"
          >
            {{ item }}
          </p>
        </div>
        <div id="secondRowFront" class="transform translate-x-2/3 mt-8 flex flex-row justify-center items-center flex-nowrap">
          <p
            v-for="(item, index) of secondRowFront"
            :key="index"
            class="flex ml-4 px-8 py-4 text-sm lm:text-3xl text-white bg-deep_grey"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div class="w-full box-border py-20 lm:py-40 px-4 lm:px-16 grid grid-cols-1 lm:grid-cols-2 gap-20">
        <blockquote id="frontBlockquote" class="transform scale-50 opacity-0 text-4xl md:text-5xl lm:text-7xl text-white leading-tight">
          “Try to think of new ways to solve the old problems. Very often we look at something we have and say, 'I could make it better.' That's innovation.”
          <span class="w-full block text-2xl lm:text-3xl text-white">- Steve Jobs</span>
        </blockquote>
        <p class="lm:mt-80 lm:pt-80 pl-20 text-xl text-white text-right">
          Conceber uma ideia que até antes estava no “papel”, dar vida a interações e conceber experiências que foram criadas em conjunto aos designers. Desenvolver softwares autênticos que colocaram “medo” na concorrência!<br><br>
          A tecnologia cada dia mais avança em velocidades gigantescas, acredito que ainda estamos vivenciando o começo de um futuro com possibilidades infinitas. Sempre mantenho períodos de estudos e prática para que possa agregar conhecimentos a colegas e equipes. 
        </p>
      </div>
    </section>
    <section class="w-full flex flex-col justify-start items-start box-border py-20 lm:py-40 overflow-hidden">
      <h3 class="title text-white leading-tight pl-4 lm:ml-20 mb-20">Um pouco<br> <span id="textColorAbout">sobre mim</span></h3>
      <div class="w-full md:pl-4 lm:pl-20 grid grid-cols-1 md:grid-cols-2">
        <div class="w-full flex flex-col justify-center items-center">
          <p class="w-full pl-4 md:pl-0 md:w-11/12 lm:w-8/12 text-2xl text-white">
            Trabalho para dar um bom futuro para os meus filhos!<br><br>
            Sou muito apegado a animais no geral, acabei caindo em TI por ter facilidade em relação as minhas habilidades, mas caso eu mudasse de área com certeza seria para veterinária.
          </p>
          <figure class="w-full md:w-11/12 lm:w-8/12 h-auto lm:h-7/10-screen mt-20 relative overflow-hidden">
            <img id="picMell" class="w-full h-full object-cover transform scale-150" src="@/assets/images/pictures/me/mell.png" alt="Foto da Mell, cachorra do Will">
            <p class="pet-names text-red absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 z-10">Mell</p>
          </figure>
        </div>
        <figure class="w-full md:w-11/12 lm:w-8/12 h-auto lm:h-7/10-screen relative overflow-hidden">
          <img id="picLuke" class="w-full h-full object-cover object-right transform scale-150" src="@/assets/images/pictures/me/luke.png" alt="Foto do Luke, cachorra do Will">
          <p class="pet-names text-red absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 z-10">Luke</p>
        </figure>
      </div>
    </section>
    <section id="rhcp" class="music bg-deep_grey relative overflow-hidden">
      <div class="music-wrap w-max flex flex-row justify-start items-start transform scale-125 -rotate-12 overflow-hidden opacity-50">
        <div id="rhcp1" class="rhcp-up transform mr-20 flex flex-col justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of rhcp.slice(0, 6)"
            :key="index"
            class="w-3/10-screen lm:w-5/10-screen lm:h-6/10-screen mb-12 bg-black">
            <img class="w-full h-full object-cover" :src="setRHCP(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
        <div id="rhcp2" class=" transform mr-20 flex flex-col justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of rhcp.slice(7, 12)"
            :key="index"
            class="w-3/10-screen lm:w-5/10-screen lm:h-6/10-screen mb-12 bg-black">
            <img class="w-full h-full object-cover" :src="setRHCP(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
        <div id="rhcp3" class="rhcp-up transform mr-20 flex flex-col justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of rhcp.slice(13, 18)"
            :key="index"
            class="w-3/10-screen lm:w-5/10-screen lm:h-6/10-screen mb-12 bg-black">
            <img class="w-full h-full object-cover" :src="setRHCP(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
        <div id="rhcp4" class=" transform mr-20 flex flex-col justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of rhcp.slice(19, 24)"
            :key="index"
            class="w-3/10-screen lm:w-5/10-screen lm:h-6/10-screen mb-12 bg-black">
            <img class="w-full h-full object-cover" :src="setRHCP(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
      </div>
      <h4 class="text-8xl lm:text-12xl text-white absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 z-50">Música</h4>
    </section>
    <section class="w-full py-8 lm:py-20 px-4 lm:px-12 flex flex-col lm:flex-row justify-center items-center">
      <p class="w-full lm:w-6/12 box-border pb-8 lm:pr-20 text-2xl text-white">
        Eu não me lembro de um momento em que eu não ouça música desde a minha infância e consequentemente nasci em uma família onde o que manda é o Rock. E desde pequeno minha paixão por Red Hot Chili Peppers começou quando eu assisti ao clipe de Otherside. Então nasci em uma época muito boa e consegui acompanhar o melhor do final dos 90’s e tudo dos 00’s!<br><br>
        Mas também costumo ouvir diversos estilos de rock, rap, hip-hop, blues e reggae.
      </p>
      <iframe src="https://open.spotify.com/embed/playlist/2B7Eac6JmvBhzMHrGC8TBZ" class="w-full lm:w-md" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </section>
    <section class="w-full py-8 lm:py-20 px-4 lm:px-20 flex flex-col justify-start items-start mb-60">
      <h3 class="title text-white leading-tight mb-8 lm:mb-20">Leitura</h3>
      <p class="w-full lm:w-6/12 box-border lm:pr-20 text-2xl text-white">
        Já li diversos livros sobre Design, Negócios, Tecnologia e Biografias que me ajudaram em diversos sentidos e que trouxeram inspiração ou até mesmo mudar minha forma de pensar sobre alguns assuntos.
        <br><br>
        Mas agora nada é melhor do que ler (ou assistir)...
      </p>
    </section>
    <section id="animes" class="animes relative">
      <div class="animes-wrap w-max flex flex-col justify-start items-start transform translate-x-60 rotate-6 opacity-50">
        <div id="animes1" class="animes-up transform mb-8 flex flex-row justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of animes.slice(0, 6)"
            :key="index"
            class="w-6/10-screen h-5/10-screen mr-8 bg-black">
            <img class="w-full h-full object-cover" :src="setAnimes(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
        <div id="animes2" class="animes-all-left transform mb-8 flex flex-row justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of animes.slice(7, 12)"
            :key="index"
            class="w-6/10-screen h-5/10-screen mr-8 bg-black">
            <img class="w-full h-full object-cover" :src="setAnimes(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
        <div id="animes3" class="animes-up transform mb-8 flex flex-row justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of animes.slice(13, 17)"
            :key="index"
            class="w-6/10-screen h-5/10-screen mr-8 bg-black">
            <img class="w-full h-full object-cover" :src="setAnimes(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
        <div id="animes4" class="animes-all-left transform mb-8 flex flex-row justify-center items-center flex-nowrap">
          <figure
            v-for="(item, index) of animes.slice(18, 24)"
            :key="index"
            class="w-6/10-screen h-5/10-screen mr-8 bg-black">
            <img class="w-full h-full object-cover" :src="setAnimes(item.id)" :alt="`Imagem Red Hot Chili Peppers ${index}`">
          </figure>
        </div>
      </div>
      <h4 class="w-full text-8xl lm:text-12xl text-center text-white leading-none absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 z-50">Mangas<br> & Animes</h4>
    </section>
    <Footer class="mt-8 lm:mt-20" />
    <Header :horizontal="true" :isMobile="isMobile" />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
import { TweenMax } from 'gsap';

export default {
  name: 'About',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      getWindowWidth: window.innerWidth,
      isMobile: false,
      rhcp: [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
        {id: '6'},
        {id: '7'},
        {id: '8'},
        {id: '10'},
        {id: '11'},
        {id: '12'},
        {id: '13'},
        {id: '14'},
        {id: '15'},
        {id: '16'},
        {id: '17'},
        {id: '18'},
        {id: '19'},
        {id: '20'},
        {id: '21'},
        {id: '21'},
        {id: '22'},
        {id: '23'},
        {id: '24'},
      ],
      animes: [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
        {id: '6'},
        {id: '7'},
        {id: '8'},
        {id: '10'},
        {id: '11'},
        {id: '12'},
        {id: '13'},
        {id: '14'},
        {id: '15'},
        {id: '16'},
        {id: '17'},
        {id: '18'},
        {id: '19'},
        {id: '20'},
        {id: '21'},
        {id: '22'},
        {id: '23'},
        {id: '24'},
      ],
      firstRowUX: [
        'Journey Map',
        'Emotional Journey',
        'Card Sorting',
        'User Interview',
        'Empathy Map',
        'Research',
        'Business Model Canvas',
        'Service Blueprint',
        'Value Proposition Canvas',
        'Design Thinking',
        'Lean UX',
      ],
      secondRowUX: [
        'Atomic Design',
        'Design System',
        'Prototyping',
        'Microinteractions',
        'Figma',
        'Sketch',
        'Adobe XD',
        'Principle',
        'ProtoPie',
        'Photoshop',
        'Illustrator',
        'Interaction Design',
        'Service Design',
      ],
      firstRowFront: [
        'HTML',
        'CSS',
        'SASS',
        'Less',
        'TailwindCSS',
        'Flexbox',
        'Grid',
        'Animations',
        'Interactions',
        'Responsive',
      ],
      secondRowFront: [
        'Javascript',
        'Vue.js',
        'Angular',
        'Flutter',
        'React Native',
        'Ionic',
        'Rest API',
        'Data Structure',
        'Design Patterns',
      ],
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

    const tween2 = TweenMax.to("#textColorUX", 0.25, {css: {color: '#D01414'}, ease: 'ease-in-out'});
    const scene2 = this.$scrollmagic.scene({
      triggerElement: '#textColorUX',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween2);
    
    const tween4 = TweenMax.to("#firstRowUX", 2, {css: {x: '0%'}, ease: 'ease-in-out'});
    const scene4 = this.$scrollmagic.scene({
      triggerElement: '#firstRowUX',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween4);

    const tween5 = TweenMax.to("#secondRowUX", 2, {css: {x: '-25%'}, ease: 'ease-in-out'});
    const scene5 = this.$scrollmagic.scene({
      triggerElement: '#secondRowUX',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween5);
    
    const tween6 = TweenMax.to("#designBlockquote", 2, {css: {opacity: 1, scale: 1}, ease: 'ease-in-out'});
    const scene6 = this.$scrollmagic.scene({
      triggerElement: '#designBlockquote',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween6);
    
    const tween7 = TweenMax.to("#textColorFront", 0.25, {css: {color: '#D01414'}, ease: 'ease-in-out'});
    const scene7 = this.$scrollmagic.scene({
      triggerElement: '#textColorFront',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween7);

    const tween8 = TweenMax.to("#firstRowFront", 2, {css: {x: '10%'}, ease: 'ease-in-out'});
    const scene8 = this.$scrollmagic.scene({
      triggerElement: '#firstRowFront',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween8);

    const tween9 = TweenMax.to("#secondRowFront", 2, {css: {x: '-10%'}, ease: 'ease-in-out'});
    const scene9 = this.$scrollmagic.scene({
      triggerElement: '#secondRowFront',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween9);

    const tween10 = TweenMax.to("#frontBlockquote", 2, {css: {opacity: 1, scale: 1}, ease: 'ease-in-out'});
    const scene10 = this.$scrollmagic.scene({
      triggerElement: '#designBlockquote',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween10);
    
    const tween11 = TweenMax.to("#textColorAbout", 0.25, {css: {color: '#D01414'}, ease: 'ease-in-out'});
    const scene11 = this.$scrollmagic.scene({
      triggerElement: '#textColorAbout',
      triggerHook: 1,
      duration: "100%"
    }).setTween(tween11);

    const tween12 = TweenMax.to("#picMell", 1, {css: {scale: 1}, ease: 'ease-in-out'});
    const scene12 = this.$scrollmagic.scene({
      triggerElement: '#picMell',
      triggerHook: 0.75,
      duration: "100%"
    }).setTween(tween12);
    
    const tween13 = TweenMax.to("#picLuke", 1, {css: {scale: 1}, ease: 'ease-in-out'});
    const scene13 = this.$scrollmagic.scene({
      triggerElement: '#picLuke',
      triggerHook: 0.75,
      duration: "100%"
    }).setTween(tween13);

    const tween14 = TweenMax.to("#rhcp1", 0.3, {css: {y: '10%'}, ease: 'ease-in-out'});
    const scene14 = this.$scrollmagic.scene({
      triggerElement: '#rhcp',
      triggerHook: 0,
      duration: "100%"
    }).setTween(tween14);

    const tween15 = TweenMax.to("#rhcp2", 0.3, {css: {y: '-25%'}, ease: 'ease-in-out'});
    const scene15 = this.$scrollmagic.scene({
      triggerElement: '#rhcp',
      triggerHook: 0,
      duration: "100%"
    }).setTween(tween15);

    const tween16 = TweenMax.to("#rhcp3", 0.3, {css: {y: '15%'}, ease: 'ease-in-out'});
    const scene16 = this.$scrollmagic.scene({
      triggerElement: '#rhcp',
      triggerHook: 0,
      duration: "100%"
    }).setTween(tween16);

    const tween17 = TweenMax.to("#rhcp4", 0.3, {css: {y: '-15%'}, ease: 'ease-in-out'});
    const scene17 = this.$scrollmagic.scene({
      triggerElement: '#rhcp',
      triggerHook: 0,
      duration: "100%"
    }).setTween(tween17);
    
    const tween18 = TweenMax.to("#animes1", 0.3, {css: {x: '-50%'}, ease: 'ease-in-out'});
    const scene18 = this.$scrollmagic.scene({
      triggerElement: '#animes',
      triggerHook: 0.25,
      duration: "100%"
    }).setTween(tween18);

    const tween19 = TweenMax.to("#animes2", 0.3, {css: {x: '-10%'}, ease: 'ease-in-out'});
    const scene19 = this.$scrollmagic.scene({
      triggerElement: '#animes',
      triggerHook: 0.25,
      duration: "100%"
    }).setTween(tween19);

    const tween20 = TweenMax.to("#animes3", 0.3, {css: {x: '-30%'}, ease: 'ease-in-out'});
    const scene20 = this.$scrollmagic.scene({
      triggerElement: '#animes',
      triggerHook: 0.25,
      duration: "100%"
    }).setTween(tween20);

    const tween21 = TweenMax.to("#animes4", 0.3, {css: {x: '-10%'}, ease: 'ease-in-out'});
    const scene21 = this.$scrollmagic.scene({
      triggerElement: '#animes',
      triggerHook: 0.25,
      duration: "100%"
    }).setTween(tween21);

    this.$scrollmagic.addScene(scene2);
    this.$scrollmagic.addScene(scene4);
    this.$scrollmagic.addScene(scene5);
    this.$scrollmagic.addScene(scene6);
    this.$scrollmagic.addScene(scene7);
    this.$scrollmagic.addScene(scene8);
    this.$scrollmagic.addScene(scene9);
    this.$scrollmagic.addScene(scene10);
    this.$scrollmagic.addScene(scene11);
    this.$scrollmagic.addScene(scene12);
    this.$scrollmagic.addScene(scene13);
    this.$scrollmagic.addScene(scene14);
    this.$scrollmagic.addScene(scene15);
    this.$scrollmagic.addScene(scene16);
    this.$scrollmagic.addScene(scene17);
    this.$scrollmagic.addScene(scene18);
    this.$scrollmagic.addScene(scene19);
    this.$scrollmagic.addScene(scene20);
    this.$scrollmagic.addScene(scene21);
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
    setRHCP(value) {
      return require('@/assets/images/pictures/me/rhcp/'+value+'.png');
    },
    setAnimes(value) {
      return require('@/assets/images/pictures/me/animes/'+value+'.png');
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes showContent {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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
        right: auto;
        left: 0;
      }
      35% {
        width: 100%;
        right: auto;
        left: 0;
      }
      75% {
        width: 100%;
        right: 0;
        left: auto;
      }
      100% {
        width: 0;
        right: 0;
        left: auto;
      }	
    }
  }
}

.title {
  font-size: 9.5vw;

  @media screen and (max-width: 414px) {
    font-size: 13.5vw;
  }
}

.pet-names {
  font-size: 13vw;

  @media screen and (max-width: 414px) {
    font-size: 30.5vw;
  }
}

.music, .animes {
  height: 225vh;
}

.animes {
  height: 200vh;
}

.music-wrap {
  height: 300vh;

  @media screen and (max-width: 414px) {
    height: 200vh;
  }
}

.rhcp-up {
  transform: translateY(-10%);
}

.animes-left {
  transform: translateX(0%);
}

.animes-all-left {
  transform: translateX(-75%);
}
</style>