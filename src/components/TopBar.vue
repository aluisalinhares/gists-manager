<template>
  <div class="topBar h-[70px] fixed top-0 left-0 w-full px-12 py-5 border-b-2 flex items-center justify-between">
    <h1 class="text-start">
      <router-link
        class="text-lg topBar_name"
        to="/"
      >
        {{ userData.login }}
      </router-link>
    </h1>
    <div class="">
      <div class="actions">
        <slot name="customButtons" />
      </div>
    </div>
  </div>
</template>
  
<script>
import { useAuthStore } from '@/store';
import { computed } from 'vue';
export default {
  props: {
    pageTitle: String,
    count: Number
  },
  setup() {
    const authStore = useAuthStore();
    const userData = computed(() => authStore.getUserData);
    return { userData }
  }

};

</script>
  
<style scoped>
.topBar {
  background-color: var(--primary-dark);
}

.topBar_name {
  color: var(--accent);
}
</style>
  