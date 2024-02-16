<template>
  <div id="app">
    <button @click="login">Login with GitHub</button>
  </div>
</template>

<script>
import { useAuthStore } from '@/store';

const clientId = process.env.VUE_APP_GITHUB_CLIENT_ID
const clientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET
console.log("process.env: ", process.env)
console.log("Client", clientId, clientSecret)

export default {
  name: 'App',
  mounted() {
    console.log("mounted called")
    if (window.location.search.includes('code')) {
      console.log("includes code")
      this.handleCallback();
    }
  },
  methods: {
    async login() {
      // Redirect to GitHub authorization endpoint
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
    },
    async handleCallback() {
      console.log("handleCallback called")
      const code = new URLSearchParams(window.location.search).get('code');
      console.log("code", code);

      const fetchOptions = {
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
      };

      const response = await fetch(`https://github.com/login/oauth/access_token`, {
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

      console.log("response: ", response)

      const data = await response.json();
      console.log("data: ", data)
      const accessToken = data.access_token;
      console.log("accessToken", accessToken);
      // Save access token to local storage
      localStorage.setItem('accessToken', accessToken);

      // Redirect to home page or wherever you need to go after authentication
      window.location.href = '/test';
      useAuthStore().setAccessToken(accessToken); // Save access token to store
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
