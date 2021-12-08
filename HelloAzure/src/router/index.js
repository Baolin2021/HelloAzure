import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import About from '@/views/about'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
export default router