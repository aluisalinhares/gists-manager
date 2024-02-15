<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="login">Login with GitHub</button>
    <div>new</div>
  </div>
</template>

<script>
import { useAuthStore } from '@/store';
const clientId = process.env.VUE_APP_GITHUB_CLIENT_ID
const clientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET

console.log("here: ", process.env)
export default {
  name: 'App',
  methods: {
    async login() {
      console.log("login called")
      // Redirect to GitHub authorization endpoint
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;

    },
    async handleCallback() {
      console.log("handleCallback called")
      const code = new URLSearchParams(window.location.search).get('code');
      console.log("code", code);

      const response = await fetch(`https://github.com/login/oauth/access_token?client_id=${clientId}&code=${code}`, {
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

      const data = await response.json();
      const accessToken = data.access_token;
      // Save access token to local storage
      localStorage.setItem('accessToken', accessToken);

      // Redirect to home page or wherever you need to go after authentication
      window.location.href = '/test';
      useAuthStore().setAccessToken(accessToken); // Save access token to store
    },
    mounted() {
      if (window.location.search.includes('code')) {
        console.log("includes code")
        this.handleCallback();
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
