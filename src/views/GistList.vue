<template>
  <div>
    <div v-if="isLoading">
      <PageLoader />
    </div>
    <div v-else class="gistList">
      <TopBar />
      <div class="container mx-auto md:px-20 md:py-8 px-10 py-4">
        <div>
          <div class="gistList__header flex items-center">
            <h2>All gists</h2>
            <div v-if="!!countGists" class="counter rounded-full w-6 h-6 flex justify-center items-center ml-2">
              <span class="text-white">{{ countGists }}</span>
            </div>
          </div>
          <div class="actions">
            <slot name="customButtons" />
          </div>
        </div>
        <ul>
          <li v-for="gist in gists" :key="gist.id">
            <div class="flex flex-col md:flex-row justify-between py-2">
              <div class="pt-2">
                <router-link :to="{ name: 'GistDetail', params: { id: gist.id } }">{{ Object.keys(gist.files)[0] ||
                  'Untitled' }}</router-link>
                <p>{{ formatDate(gist.created_at) }}</p>
                <p>{{ gist.description || 'Untitled' }}</p>
              </div>
              <div class="flex gap-5">
                <IconButton iconClass="far fa-file" label="20" size="sm" />
                <IconButton iconClass="far fa-comment" label="20" size="sm" />
                <IconButton iconClass="fa-regular fa-star" label="20" size="sm" />
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useAuthStore } from '@/store';
import { fetchUser, fetchGists } from '@/utils/api';
import PageLoader from '@/components/PageLoader.vue';
import IconButton from '@/components/IconButton.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'GistList',
  components: {
    PageLoader,
    IconButton,
    TopBar
  },
  setup() {
    const authStore = useAuthStore();
    const gists = ref([]);
    const countGists = ref(0);
    const isLoading = computed(() => authStore.isLoading);
    const userData = computed(() => authStore.getUserData);

    onMounted(async () => {
      try {
        const accessToken = authStore.accessToken;

        if (!accessToken) return;

        const userData = await fetchUser(accessToken);
        const gistsData = await fetchGists(accessToken);

        authStore.setUserData(userData);

        gists.value = gistsData;
        countGists.value = gistsData.length;
      } catch (error) {
        console.error('Error fetching user Gists:', error);
      }
    });

    const getFileNames = (files) => {
      return Object.keys(files).join(', ');
    };

    const formatDate = (createdAt) => {
      const now = new Date();
      const createdDate = new Date(createdAt);
      const diff = now.getTime() - createdDate.getTime();
      const diffInHours = diff / (1000 * 60 * 60);

      if (diffInHours < 24) {
        return `Created ${Math.round(diffInHours)} hours ago`;
      } else if (diffInHours > 48) {
        return 'Created yesterday'
      } else {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return createdDate.toLocaleDateString(undefined, options);
      }
    };

    return { gists, userData, countGists, getFileNames, formatDate, isLoading };
  },
};
</script>

<style scoped>
.counter {
  background-color: var(--text);
}

.gistList__header {
  border-bottom: 1px solid var(--text);
}
</style>
