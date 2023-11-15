Create two new VUE components, one for the select options, and then one for the 'tiger-class' div. This file is called TuitionSelect.vue. Use the imported asset in here and pass it down the new new components to use.
<template>
    <div>
      <select v-model="selectedModality">
        <option value="onCampus">On-Campus</option>
        <option value="online">Online</option>
      </select>
  
      <select v-model="selectedCredential">
        <option v-for="(credential, key) in availableCredentials" :key="key" :value="key">{{ credential.title }}</option>
      </select>
  
      <div  v-if="tuitionBlurb" class="tiger-text">
        <p v-html="tuitionBlurb"></p>
        <p v-html="footnote"></p>
      </div>
    </div>
  </template>
  
  <script>
  import { tuitionBlurbs } from '../assets/TheData.js';
  
  export default {
    data() {
      return {
        selectedModality: 'onCampus',
        selectedCredential: 'undergrad',
        tuitionBlurb: '',
        footnote: ''
      };
    },
    computed: {
      availableCredentials() {
        const modalityPrograms = tuitionBlurbs[this.selectedModality];
        return Object.keys(modalityPrograms).reduce((acc, key) => {
          acc[key] = { title: modalityPrograms[key].title };
          return acc;
        }, {});
      }
    },
    watch: {
      selectedModality: {
        handler: 'updateBlurb',
        immediate: true
      },
      selectedCredential: 'updateBlurb'
    },
    methods: {
      updateBlurb() {
        const programData = tuitionBlurbs[this.selectedModality][this.selectedCredential];
        if (programData) {
          this.tuitionBlurb = programData.description;
          this.footnote = programData.note;
        } else {
          this.tuitionBlurb = 'Not available';
          this.footnote = '';
          this.selectedCredential = Object.keys(this.availableCredentials)[0]; // Default to the first available program
        }
      }
    }
  };
  </script>
  