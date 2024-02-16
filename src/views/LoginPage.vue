<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login with GitHub</button>
  </div>
</template>
  
<script>
const clientId = process.env.VUE_APP_GITHUB_CLIENT_ID
export default {
  name: 'LoginPage',
  methods: {
    async login() {
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
    }
  }
}
</script>
  
<style scoped>
/* Add your login page styles here */
</style>