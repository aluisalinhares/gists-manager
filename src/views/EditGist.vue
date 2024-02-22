<template>
  <div>
    <div v-if="isLoading">
      <PageLoader />
    </div>
    <div v-else>
      <TopBar page-title="Edit Gist" />
      <div
        v-if="gist"
        class="container mx-auto md:px-20 md:py-8 px-10 py-4"
      >
        <h2 class="inline-block w-full sm:w-1/2 pr-7">Editing {{ gist.description || 'Untitled' }} </h2>
        <IconButton
          icon-class="fa-regular fa-floppy-disk"
          label="Save"
          size="sm"
          color="yellow"
          class="float-right min-w-[80px]"
          :border="true"
          @click="saveChanges"
        />
        <ul class="mt-5">
          <CodeEditor
            v-for="(file, filename) in gist.files"
            :key="filename"
            :filename="filename"
            :content="file.content"
            :language="file.language"
            @updateContent="(content) => handleUpdateContent(file, filename, content)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import { useAuthStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import { fetchGistDetail, editGist } from '@/utils/api';
import { formatDate } from '@/utils/helpers';
import PageLoader from '@/components/PageLoader';
import IconButton from '@/components/IconButton';
import TopBar from '@/components/TopBar';
import CodeEditor from '@/components/CodeEditor.vue';

export default {
  name: 'EditGist',
  components: {
    PageLoader,
    TopBar,
    IconButton,
    CodeEditor
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const authStore = useAuthStore();
    const isLoading = computed(() => authStore.isLoading);
    const gist = ref(null);
    const id = route.params.id;

    onMounted(async () => {
      try {
        const response = await fetchGistDetail(id);
        gist.value = response;
      } catch (err) {
        console.error('Error fetching user Gist Detail:', err);
      }
    });

    const saveChanges = async () => {
      try {
        const response = await editGist(id, gist.value.files);
        router.push({ name: 'GistDetail', params: { id } });
      } catch (err) {
        console.error('Error saving changes:', err);
      }
    }

    const handleUpdateContent = (file, filename, content) => {
      if (gist.value && gist.value.files && gist.value.files[filename]) {
        gist.value.files[filename].content = content;
      }
    }

    return { gist, isLoading, formatDate, saveChanges, handleUpdateContent };
  }
};
</script>
  