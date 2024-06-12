import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RecoverPasswordView from '@/views/auth/RecoverPasswordView.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import AdminLayout from '@/layouts/admin/AdminLayout.vue'
import HomeView from '../views/admin/home/HomeView.vue'
import ResultsView from '../views/admin/results/ResultsView.vue'
import ProfileView from '../views/admin/profile/ProfileView.vue'
import HelpView from '../views/admin/help/HelpView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/recover-password',
    name: 'recover-password',
    component: RecoverPasswordView
  },
  {
    path: '/password-reset/:token',
    name: 'password-reset',
    component: ResetPassword,
    props: true
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'home',
        component: HomeView
      },
      {
        path: 'results',
        component: ResultsView
      },
      {
        path: 'help',
        component: HelpView
      },
      {
        path: 'profile',
        component: ProfileView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
