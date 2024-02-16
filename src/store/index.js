import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    accessToken: ''
  }),
  actions: {
    login(accessToken) {
      this.$patch(state => {
        state.isAuthenticated = true;
        state.accessToken = accessToken;
      });
    }
  }
});

export default useAuthStore;