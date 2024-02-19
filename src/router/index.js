import { createRouter, createWebHistory } from 'vue-router';
import GistList from '@/views/GistList.vue';
import LoginPage from '@/views/LoginPage.vue';
import GistDetail from '@/views/GistDetail.vue'; 
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the route requires authentication
    console.log("here: ", authStore.isAuthenticated)
    if (!authStore.isAuthenticated) {
      // Redirect to login if not authenticated
      next('/login');
    } else {
      next(); // Proceed to the route
    }
  } else {
    next(); // Proceed to the route
  }
});

export default router;
