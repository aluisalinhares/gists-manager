<template>
  <div class="flex items-center justify-center h-screen">
    <button class="github-btn" @click="login">Login with GitHub</button>
  </div>
</template>

<script>
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    if (authStore.isAuthenticated) {
      router.push('/');
    }

    const clientId = process.env.VUE_APP_GITHUB_CLIENT_ID;
    const login = () => {
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user,gist`;
    };

    return {
      login
    };
  }
}
</script>

<style scoped>
.github-btn {
  background-color: #24292e;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.github-btn:hover {
  background-color: #181c20;
}</style>