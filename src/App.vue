<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { useAuthStore } from '@/store';

const clientId = process.env.VUE_APP_GITHUB_CLIENT_ID
const clientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET

export default {
  name: 'App',
  mounted() {
    if (window.location.search.includes('code')) {
      this.handleCallback();
    }
  },
  methods: {
    async handleCallback() {
      try {
        const code = new URLSearchParams(window.location.search).get('code');

        const response = await fetch('/api/access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code: code
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch access token');
        }


        const responseData = await response.json();
        const accessToken = responseData.access_token;
        /* localStorage.setItem('accessToken', accessToken); */
        useAuthStore().login(accessToken);

        // Redirect to the home page after successful login
        this.$router.push('/');
      } catch (error) {
        console.log("Error fetching access token: ", error)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
