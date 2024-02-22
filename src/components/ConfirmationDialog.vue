<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
  >
    <div class="bg-white p-8 rounded-lg">
      <h2 class="text-lg">
        Are you sure you want to delete this gist?
      </h2>
      <div class="flex justify-end mt-3">
        <button
          class="bg-red-500 text-white px-4 py-2 rounded mr-2"
          @click="confirm"
        >
          Delete
        </button>
        <button
          class="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          @click="cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const confirm = () => {
            emit('confirm');
        };

        const cancel = () => {
            emit('cancel');
        };

        return {
            confirm,
            cancel
        };
    }
};
</script>
  
<style scoped>

</style>
  