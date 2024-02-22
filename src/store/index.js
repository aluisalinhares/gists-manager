import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    accessToken: '',
    userData: {},
    loading: false
  }),
  actions: {
    initializeAccessToken() {
      const storedAccessToken = localStorage.getItem('accessToken');
      const userData = localStorage.getItem('userData');
      this.accessToken = storedAccessToken || '';
      this.isAuthenticated = !!storedAccessToken;
      this.userData = userData? JSON.parse(userData) : {};
    },
    login(accessToken) {
      this.$patch(state => {
        state.accessToken = accessToken;
        state.isAuthenticated = true;
      });

      localStorage.setItem('accessToken', accessToken);
    },
    setUserData(userData) {
      this.userData = userData;
      localStorage.setItem('userData', JSON.stringify(userData));
    },
    setLoading(loading) { 
      this.loading = loading;
    }
  },
  getters: {
    isLoading() { 
      return this.loading;
    },
    getUserData(){
      return this.userData;
    }
  },
});

export default useAuthStore;
