import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/pages/StartPage'
import ChapterOne from '@/pages/ChapterOne'
import ChapterTwo from '@/pages/ChapterTwo'
import ChapterThree from '@/pages/ChapterThree'
import ChapterFour from '@/pages/ChapterFour'
import ChapterFive from '@/pages/ChapterFive'
import ChapterSix from '@/pages/ChapterSix'
import ChapterSeven from '@/pages/ChapterSeven'
import ChapterEight from '@/pages/ChapterEight'
import ChapterNine from '@/pages/ChapterNine'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage,
      // beforeRouteLeave: (to, from, next) =>{
      //   console.log('13981239819');
      // }
    },
    {
      path: '/chapter-one',
      name: 'ChapterOne',
      component: ChapterOne
    },
    {
      path: '/chapter-two',
      name: 'ChapterTwo',
      component: ChapterTwo
    },
    {
      path: '/chapter-three',
      name: 'ChapterThree',
      component: ChapterThree
    },
    {
      path: '/chapter-four',
      name: 'ChapterFour',
      component: ChapterFour
    },
    {
      path: '/chapter-five',
      name: 'ChapterFive',
      component: ChapterFive
    },
    {
      path: '/chapter-six',
      name: 'ChapterSix',
      component: ChapterSix
    },
    {
      path: '/chapter-Seven',
      name: 'ChapterSeven',
      component: ChapterSeven
    },
    {
      path: '/chapter-eight',
      name: 'ChapterEight',
      component: ChapterEight
    },
    {
      path: '/chapter-Nine',
      name: 'ChapterNine',
      component: ChapterNine
    }
  ]
})
