<template>
  <div>
    <h2>My Gists</h2>
    <ul>
      <li v-for="gist in gists" :key="gist.id">
        <router-link :to="{ name: 'GistDetail', params: { id: gist.id } }">
          {{ gist.description || 'Untitled' }} - {{ getFileNames(gist.files) }} - {{ formatDate(gist.created_at) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useAuthStore } from '@/store';
import { fetchGists } from '@/utils/api';

export default {
  name: 'GistList',
  setup() {
    const authStore = useAuthStore();
    const gists = computed(() => authStore.isAuthenticated ? authStore.getGists : []);

    onMounted(async () => {
      try {
        const accessToken = authStore.accessToken;
        if (!accessToken) return;

        const gistsData = await fetchGists();
        authStore.setGists(gistsData);
      } catch (error) {
        console.error('Error fetching user Gists:', error);
      }
    });

    const getFileNames = (files) => {
      return Object.keys(files).join(', ');
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };

    return { gists, getFileNames, formatDate };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
