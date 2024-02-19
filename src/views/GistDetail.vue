<template>
  <div>
    <div v-if="gist">
      <!-- Header -->
      <div class="flex justify-between">
        <h1 class="text-start">
          <a :href="gist.owner.html_url">{{ gist.owner.login }}</a>
        </h1>
        <!-- Edit, Save, Delete buttons -->
        <div>
          <button v-if="!isEditing" @click="toggleEditMode">
            Edit
          </button>
          <button v-if="isEditing" @click="saveChanges">
            Save
          </button>
          <button @click="deleteGist">
            Delete
          </button>
        </div>
      </div>
      <h3>{{ gist.description || 'Untitled' }} - {{ getFileNames(gist.files) }}</h3>
      <p>Created at: {{ formatDate(gist.created_at) }}</p>
      <p>Updated at: {{ formatDate(gist.updated_at) }}</p>
      <p>Owner: <a :href="gist.owner.html_url">{{ gist.owner.login }}</a></p>
      <p>Files:</p>
      <ul>
        <li v-for="(file, filename) in gist.files" :key="filename">
          <a :href="file.raw_url" target="_blank">{{ filename }}</a> - {{ file.language }}
        </li>
      </ul>
      <p>Gist Content:</p>
      <div v-for="(file, filename) in gist.files" :key="filename">
        <div v-if="!isEditing">
          <p><strong>{{ filename }}</strong></p>
          <pre>{{ file.content }}</pre>
        </div>
        <div v-else>
          <textarea v-model="editedContent" rows="10" cols="50"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/store';
import { fetchGistDetail } from '@/utils/api';

console.log("GIST DETAIL")

export default {
  name: 'GistDetail',
  setup() {
    const route = useRoute();
    const authStore = useAuthStore();
    const gist = ref(null);
    const isEditing = ref(false);
    const editedContent = ref('');

    onMounted(async () => {
      try {
        const accessToken = authStore.accessToken;
        if (!accessToken) return;

        const id = route.params.id;
        const response = await fetchGistDetail(id);
        console.log("response: ", response);
        gist.value = response;
      } catch (error) {
        console.error('Error fetching user Gist Detail:', error);
      }
    });

    const getFileNames = (files) => {
      return Object.keys(files).join(', ');
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };

    const toggleEditMode = () => {
      console.log("toggle!")
      isEditing.value = true;
      console.log("isEditing: ", isEditing.value)
    };

    const cancelEdit = () => {
      isEditing.value = false;
    };

    return { gist, getFileNames, formatDate, isEditing, toggleEditMode, cancelEdit };
  },
};
</script>
  
<style scoped>
/* Add your styles here */
</style>
  