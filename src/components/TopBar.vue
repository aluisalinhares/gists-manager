<template>
  <div class="topBar px-12 py-5 border-b-2 flex items-center justify-between">
    <h1 class="text-start">
      <router-link to="/" class="topBar_name">{{ userData.login }}</router-link>
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
.topBar{
    background-color: var(--primary-dark);
}
.topBar_name{
    color: var(--accent);
}
</style>
  