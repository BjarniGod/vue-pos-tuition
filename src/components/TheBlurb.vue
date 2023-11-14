<template>
  <div>
    <select v-model="selectedModality">
      <option value="onCampus">On-Campus</option>
      <option value="online">Online</option>
    </select>

    <select v-model="selectedCredential">
      <option value="undergrad">Undergrad</option>
      <option value="grad">Grad</option>
      <option value="mba">MBA</option>
      <option value="mls">MLS</option>
      <option value="mps">MPS</option>
      <option value="msCounseling">MS Counseling</option>
    </select>

    <div v-if="tuitionBlurb" class="tiger-text">
      <p v-html="tuitionBlurb"></p>
      <p v-html="footnote"></p>
    </div>
  </div>
</template>

<script>
import { tuitionBlurbs } from '../assets/replaceData.js';

export default {
  data() {
    return {
      selectedModality: 'onCampus',
      selectedCredential: 'undergrad',
      tuitionBlurb: '',
      footnote: ''
    };
  },
  watch: {
    selectedModality: 'updateBlurb',
    selectedCredential: 'updateBlurb'
  },
  methods: {
    updateBlurb() {
      const [price, creditHours] = tuitionBlurbs[this.selectedModality][this.selectedCredential];
      const textTemplate = tuitionBlurbs[`${this.selectedModality}Text`].text;
      const footnoteTemplate = tuitionBlurbs[`${this.selectedModality}Text`].footnote;

      this.tuitionBlurb = textTemplate.replace('${tuitionRate}', `$${price.toFixed(2)}`);
      this.footnote = footnoteTemplate.replace('${creditHours}', creditHours)
                                       .replace('${pricePerCreditHour}', `$${(price / creditHours).toFixed(2)}`);
    }
  },
  mounted() {
    this.updateBlurb();
  }
};

</script>
