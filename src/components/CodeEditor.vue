<template>
    <div>
      <p>{{ filename }}</p>
      <v-ace-editor
        :value="editorContent"
        @input="updateContent"
        @init="editorInit"
        :mode="mode"
        theme="chrome"
        style="height: 300px"
      />
    </div>
  </template>
    
  <script>
  import { ref } from 'vue';
  import { VAceEditor } from 'vue3-ace-editor';
  
  export default {
      components: {
          VAceEditor
      },
      props: ['filename', 'content', 'language'],
      setup(props, { emit }) {
          const editorContent = ref(props.content || "a");
          let editorInstance = null;
  
          const mode = getFileMode(props.language);
  
          const editorInit = (editor) => {
              editorInstance = editor;
          };
  
          const updateContent = () => {
              if (editorInstance) {
                  const updatedContent = editorInstance.getValue();
                  emit('updateContent', updatedContent);
              }
          };
  
          function getFileMode(language) {
              switch (language.toLowerCase()) {
                  case 'javascript':
                      return 'javascript';
                  case 'html':
                      return 'htmlmixed';
                  case 'css':
                      return 'css';
                  default:
                      return '';
              }
          }
  
          return { editorContent, mode, editorInit, updateContent };
      }
  };
  </script>
  