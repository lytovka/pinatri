import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/components/PageOne'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne
    }
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active"
})
