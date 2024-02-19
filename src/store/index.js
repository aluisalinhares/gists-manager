// store/index.js

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    accessToken: '',
    gists: [],
    gistDetail: {}
  }),
  actions: {
    initializeAccessToken() {
      const storedAccessToken = localStorage.getItem('accessToken');
      this.accessToken = storedAccessToken || '';
      this.isAuthenticated = !!storedAccessToken;
    },
    login(accessToken) {
      this.$patch(state => {
        state.accessToken = accessToken;
        state.isAuthenticated = true;
      });

      localStorage.setItem('accessToken', accessToken);
    },
    setGists(gists) { 
      this.gists = gists;
    },
    setGistDetail(gist){
      this.gistDetail = gist;
    }
  },
  getters: {
    getGists() {
      return this.gists;
    },
  },
});

export default useAuthStore;
