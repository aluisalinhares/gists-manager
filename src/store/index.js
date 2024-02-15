import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
  }),
  actions: {
    setAccessToken(accessToken) {
      this.accessToken = accessToken;
    },
  },
});

export default useAuthStore;