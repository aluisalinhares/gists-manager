<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login with GitHub</button>
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

    if(authStore.isAuthenticated){
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
/* Add your login page styles here */
</style>