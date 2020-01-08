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
import TableOfContentsPage from '@/pages/TableOfContentsWrapper'
import Chapters from '@/pages/Chapters'
import ChapterOneContents from '@/pages/ChapterOneContents'




Vue.use(Router)

const router = new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage,
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
      path: '/chapter-seven',
      name: 'ChapterSeven',
      component: ChapterSeven
    },
    {
      path: '/chapter-eight',
      name: 'ChapterEight',
      component: ChapterEight
    },
    {
      path: '/chapter-nine',
      name: 'ChapterNine',
      component: ChapterNine
    },
    {
      path: '/table-of-contents',
      name: "TableOfContentsPage",
      component: TableOfContentsPage,
      children: [
        {
          path: "chapters",
          name: "Chapters",
          component: Chapters,
          children: [
            {
              path: "chapter-one",
              name: "ChapterOneContents",
              component: ChapterOneContents
            }
          ]
        }
      ]
    },
    {
      path: '*',
      component: StartPage
    } // catch all use case

    //publicPath: "/"
  ]
})

// router.afterEach(to => {
//   localStorage.setItem(LS_ROUTE_KEY, to.next);
// })

export default router;
