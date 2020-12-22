import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Test from './views/Test.vue'
// import UserDetails from './views/UserDetails.vue'
import homePage from '../src/views/home-page.vue'
import toyDetails from '../src/components/toy-details.vue';
import toyApp from '../src/components/toy-app.vue'
import userProfile from '../src/components/user-profile.vue';
import dashboardPage from '../src/views/dashboard-page.vue';
import toyEdit from '../src/components/toy-edit.vue';
import userLogin from '../src/components/user-login.vue';
import signup from '../src/views/singup.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/login',
      component: userLogin
    },
    {
      path:'/signup',
      component:signup
    },
    {
      path: '/toy',
      component: toyApp
    },
    {
      path: '/toy/:toyId',
      component: toyEdit
    },
    {
      path: '/toy/details/:toyId',
      component: toyDetails
    },
    {
      path: '/user-profile',
      component: userProfile
    },
    {
      path: '/dashboard',
      component: dashboardPage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: Test
    // },
    // {
    //   path: '/user/:id',
    //   name: 'user-details',
    //   component: UserDetails
    // }
  ]
})
