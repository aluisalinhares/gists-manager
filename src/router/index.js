import { createRouter, createWebHistory } from 'vue-router';
import GistList from '@/views/GistList.vue';
import LoginPage from '@/views/LoginPage.vue';
import GistDetail from '@/views/GistDetail.vue'; 
import EditGist from '@/views/EditGist.vue';
import { useAuthStore } from '@/store';

const routes = [
  {
    path: '/',
    name: 'GistList',
    component: GistList,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/gist/:id',
    name: 'GistDetail',
    component: GistDetail
  },
  {
    path: '/gist/:id/edit',
    name: 'EditGist',
    component: EditGist
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
