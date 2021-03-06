import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import p404 from '@/components/p404'
import Register from '@/components/Register'
import Proto from '@/components/Proto'
import SearchBooks from '@/components/SearchBooks'
import BrowseBooks from '@/components/BrowseBooks'
import NYBooks from '@/components/NYBooks'
import BookDetail from '@/components/BookDetail'
import SessionEnd from '@/components/SessionEnd'

Vue.use(Router)

export default new Router({
  // Named views - https://router.vuejs.org/en/essentials/named-routes.html
  // Note: One path needs to be / or when the page loads it will be blank.
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    { path: '*',
      name: 'p404',
      component: p404
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/proto',
      name: 'Proto',
      component: Proto
    },
    {
      path: '/search',
      name: 'SearchBooks',
      component: SearchBooks
    },
    {
      path: '/browse',
      name: 'BrowseBooks',
      component: BrowseBooks
    },
    {
      path: '/NYBooks',
      name: 'NYBooks',
      component: NYBooks
    },
    {
      path: '/book-detail',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/session-end',
      name: 'SessionEnd',
      component: SessionEnd
    }

  ]
})
