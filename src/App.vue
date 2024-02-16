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
      console.log("handleCallback!!")
      try {
        const code = new URLSearchParams(window.location.search).get('code');
        console.log("code: ", code)

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

        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Failed to fetch access token');
        }

        // Extract JSON data from the response
        const responseData = await response.json();

        // Access the access_token property
        const accessToken = responseData.access_token;
        console.log("access_token:", accessToken);
        
        localStorage.setItem('accessToken', accessToken);
        // Redirect to home page or wherever you need to go after authentication

        useAuthStore().setAccessToken(accessToken); // Save access token to store

      } catch (error) {
        console.log("error fetching: ", error)
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
