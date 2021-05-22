import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Smash from '../views/projects/Smash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sobre',
    name: 'About',
    component: About,
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projetos/smash',
    name: 'Smash',
    component: Smash,
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
