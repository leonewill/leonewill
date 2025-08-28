import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Smash from '../views/projects/Smash.vue'
import Buddy from '../views/projects/Buddy.vue'
import Charlie from '../views/projects/Charlie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      metaTags: [
        { name: 'keywords', content: 'UX/UI Designer, UX Designer, UI Designer, Product Designer, Front-end Developer, Desenvolvedor Front-end, Designer de experiência do usuário, Designer de interfaces, Designer de produtos.' },
        { name: 'description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Will Leone | UX/UI Desginer, Product Designer, Front-end Developer' },
        { name: 'og:description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'og:image', content: 'http://leonewill.com/img/will-leone.e0380284.png' },
        { name: 'og:url', content: 'http://leonewill.com/' },
      ],
    }
  },
  {
    path: '/sobre',
    name: 'About',
    component: About,
    meta: {
      metaTags: [
        { name: 'keywords', content: 'UX/UI Designer, UX Designer, UI Designer, Product Designer, Front-end Developer, Desenvolvedor Front-end, Designer de experiência do usuário, Designer de interfaces, Designer de produtos.' },
        { name: 'description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Will Leone | UX/UI Desginer, Product Designer, Front-end Developer' },
        { name: 'og:description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'og:image', content: 'http://leonewill.com/img/will-leone.e0380284.png' },
        { name: 'og:url', content: 'http://leonewill.com/' },
      ],
    }
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: Projects,
    meta: {
      metaTags: [
        { name: 'keywords', content: 'UX/UI Designer, UX Designer, UI Designer, Product Designer, Front-end Developer, Desenvolvedor Front-end, Designer de experiência do usuário, Designer de interfaces, Designer de produtos.' },
        { name: 'description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Will Leone | UX/UI Desginer, Product Designer, Front-end Developer' },
        { name: 'og:description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'og:image', content: 'http://leonewill.com/img/will-leone.e0380284.png' },
        { name: 'og:url', content: 'http://leonewill.com/' },
      ],
    }
  },
  {
    path: '/projetos/smash',
    name: 'Smash',
    component: Smash,
    meta: {
      metaTags: [
        { name: 'keywords', content: 'UX/UI Designer, UX Designer, UI Designer, Product Designer, Front-end Developer, Desenvolvedor Front-end, Designer de experiência do usuário, Designer de interfaces, Designer de produtos.' },
        { name: 'description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Will Leone | UX/UI Desginer, Product Designer, Front-end Developer' },
        { name: 'og:description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'og:image', content: 'http://leonewill.com/img/will-leone.e0380284.png' },
        { name: 'og:url', content: 'http://leonewill.com/' },
      ],
    }
  },
  {
    path: '/projetos/buddy',
    name: 'Buddy',
    component: Buddy,
    meta: {
      metaTags: [
        { name: 'keywords', content: 'UX/UI Designer, UX Designer, UI Designer, Product Designer, Front-end Developer, Desenvolvedor Front-end, Designer de experiência do usuário, Designer de interfaces, Designer de produtos.' },
        { name: 'description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Will Leone | UX/UI Desginer, Product Designer, Front-end Developer' },
        { name: 'og:description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'og:image', content: 'http://leonewill.com/img/will-leone.e0380284.png' },
        { name: 'og:url', content: 'http://leonewill.com/' },
      ],
    }
  },
  {
    path: '/projetos/charlie',
    name: 'Charlie',
    component: Charlie,
    meta: {
      metaTags: [
        { name: 'keywords', content: 'UX/UI Designer, UX Designer, UI Designer, Product Designer, Front-end Developer, Desenvolvedor Front-end, Designer de experiência do usuário, Designer de interfaces, Designer de produtos.' },
        { name: 'description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Will Leone | UX/UI Desginer, Product Designer, Front-end Developer' },
        { name: 'og:description', content: 'Atuo como UX/UI, Product Designer e desenvolvedor frontend há 10 anos. Com experiência em diferentes segmentos como startups, software houses, agências de publicidade, agências de marketing, entre outras.' },
        { name: 'og:image', content: 'http://leonewill.com/img/will-leone.e0380284.png' },
        { name: 'og:url', content: 'http://leonewill.com/' },
      ],
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  // Use the "meta" in route object for escape scroll to top in specific route
  // meta: { disableScroll: true }
  scrollBehavior (to, from, savedPosition) {
    if (to.matched.some(m => m.meta.disableScroll)) return;
  
    const position = {
      x: 0,
      y: 0
    };
  
    if (savedPosition) {
      position.x = savedPosition.x;
      position.y = savedPosition.y;
    }
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position, reject)
      }, 400)
    })
  },

  routes
});

export default router
