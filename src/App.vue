<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="login">Login with GitHub</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    async login() {
      // Redirect to GitHub authorization endpoint
      window.location.href = `https://github.com/login/oauth/authorize?client_id=d9e20d499a3894452cdd&scope=user`;
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
