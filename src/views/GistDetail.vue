<template>
  <div>
    <div v-if="isLoading">
      <PageLoader />
    </div>
    <div v-else>
      <TopBar page-title="Gist Detail" />
      <div
        v-if="gist"
        class="container mx-auto md:px-20 md:py-8 px-10 py-4"
      >
        <div class="inline-block sm:block">
          <h2 class="inline-block pr-7">
            {{ gist.description || 'Untitled' }}
          </h2>
          <IconButton
            icon-class="fa-regular fa-trash-can"
            label="Remove"
            size="sm"
            color="yellow"
            class="float-right ml-2 min-w-[80px]"
            :border="true"
            @click="showConfirmationDialog"
          />
          <IconButton
            icon-class="fa-regular fa-pen-to-square"
            label="Edit"
            size="sm"
            color="yellow"
            class="float-right min-w-[80px]"
            :border="true"
            @click="editGist"
          />
          <ConfirmationDialog
            :is-visible="isConfirmationDialogVisible"
            @confirm="onRemoveGist"
            @cancel="hideConfirmationDialog"
          />
        </div>
        <ul class="mt-5">
          <li
            v-for="(file, filename) in gist.files"
            :key="filename"
            class="mb-3 gist-file"
          >
            <div class="gist-file__header flex justify-between items-center h-12 px-5 py-1">
              <i class="fa-solid fa-code text-xs" />
              <span class="ml-2 text-s">{{ filename }}</span>
              <a
                :href="file.raw_url"
                target="_blank"
                class="float-right"
              >raw</a>
            </div>
            <div class="gist-file__content p-5">
              <pre>{{ file.content }}</pre>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/store';
import { fetchGistDetail, deleteGist } from '@/utils/api';
import { formatDate } from '@/utils/helpers';
import PageLoader from '@/components/PageLoader';
import TopBar from '@/components/TopBar';
import IconButton from '@/components/IconButton';
import ConfirmationDialog from '@/components/ConfirmationDialog.vue';

export default {
  name: 'GistDetail',
  components: {
    PageLoader,
    TopBar,
    IconButton,
    ConfirmationDialog
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const authStore = useAuthStore();
    const gist = ref(null);
    const isEditing = ref(false);
    const isLoading = computed(() => authStore.isLoading);
    const id = route.params.id;
    const isConfirmationDialogVisible = ref(false);

    onMounted(async () => {
      try {
        const accessToken = authStore.accessToken;
        if (!accessToken) return;

        const response = await fetchGistDetail(id);

        gist.value = response;
      } catch (error) {
        console.error('Error fetching user Gist Detail:', error);
      }
    });

    const getFileNames = (files) => {
      return Object.keys(files).join(', ');
    };

    const cancelEdit = () => {
      isEditing.value = false;
    };

    const editGist = () => {
      router.push({ name: 'EditGist', params: { id } });
    }

    const showConfirmationDialog = () => {
      isConfirmationDialogVisible.value = true;
    };

    const hideConfirmationDialog = () => {
      isConfirmationDialogVisible.value = false;
    };

    const onRemoveGist = async () => {
      try {
        const response = await deleteGist(id);
        router.push("/");
      } catch (err) {
        hideConfirmationDialog();
        console.error('Error deleting Gist', err);
      }
      
    };

    return {
      gist,
      getFileNames,
      formatDate,
      isEditing,
      editGist,
      cancelEdit,
      isLoading,
      isConfirmationDialogVisible,
      showConfirmationDialog,
      hideConfirmationDialog,
      onRemoveGist
    };
  },
};
</script>
  
<style scoped>
.gist-file {
  border: 1px solid var(--background-dark);
  box-sizing: border-box;
  border-radius: 6px;
}

.gist-file__header {
  background-color: var(--background-light);
  border-bottom: 1px solid var(--background-dark);
  color: var(--text);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.gist-file__header>* {
  color: var(--text);
}

.gist-file__header>a {
  border: 1px solid var(--background-dark);
  border-radius: 6px;
  padding: 5px 10px;
}

.gist-file__header>a:hover {
  color: var(--primary);
  text-decoration: underline;
  background-color: var(--background-darker);
}

.gist-file__content {
  font-size: 0.8rem;
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>
  