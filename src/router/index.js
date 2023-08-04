import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchMovies.vue')
  },
  {
    path: '/add-movie',
    name: 'AddMovie',
    component: () => import('../views/AddingMovie.vue')
  },
  {
    path: '/movie/:slug',
    name: 'Movie',
    component: () => import('../views/Movie.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
