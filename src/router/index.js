import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/atendimento',
    name: 'Atendimento',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Atendimento.vue')
  },
  {
    path: '/public',
    name: 'Publicacoes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pulicacoes.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contato.vue')
  },
  {
    path: '/educacional',
    name: 'Educacional',
    component: () => import(/* webpackChunkName: "about" */ '../views/Educacional.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import(/* webpackChunkName: "about" */ '../views/Faq.vue')
  },
  {
    path: '/equipe',
    name: 'Equipe',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipe.vue')
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
