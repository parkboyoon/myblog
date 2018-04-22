import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import programmer from '@/pages/programmer'
import music from '@/pages/music'
import film from '@/pages/film'
import library from '@/pages/library'
import diary from '@/pages/diary'
import detail from '@/pages/detail'
import about from '@/pages/about'
import writer from '@/pages/writer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/programmer',
      name: 'programmer',
      component: programmer
    },{
      path: '/music',
      name: 'music',
      component: music
    },{
      path: '/film',
      name: 'film',
      component: film
    },{
      path: '/library',
      name: 'library',
      component: library
    },{
      path: '/diary',
      name: 'diary',
      component: diary
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/about',
      name: 'about',
      component: about
    },{
      path: '/admin/writer',
      name: 'writer',
      component: writer
    }
  ]
})
