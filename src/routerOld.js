import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home-page.vue'
import toyDetails from '../components/toy-details.vue';
import toyApp from '../components/toy-app.vue';
import userProfile from '../components/user-profile.vue';
import dashboardPage from '../views/dashboard-page.vue';
import toyEdit from '../components/toy-edit.vue';
import userLogin from '../components/user-login.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path:'/login',
    component:userLogin
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
  }

]

const router = new VueRouter({
  routes
})

export default router
