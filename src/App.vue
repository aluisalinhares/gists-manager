<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useAuthStore } from '@/store';
import { fetchAccessToken } from '@/utils/auth';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    onMounted(() => {
      authStore.initializeAccessToken();

      if (window.location.search.includes('code')) {
        handleCallback();
      }
    });


    async function handleCallback() {
      try {
        const code = new URLSearchParams(window.location.search).get('code');
        const accessToken = await fetchAccessToken(code);
        authStore.login(accessToken);
        router.push('/');
      } catch (error) {
        console.log('Error fetching access token:', error);
      }
    }

    return {};
  }
};
</script>

<style>

</style>
