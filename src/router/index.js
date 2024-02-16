import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import { useAuthStore } from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the route requires authentication
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
