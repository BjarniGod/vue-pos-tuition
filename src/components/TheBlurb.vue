<template>
  <div>
    <select v-model="selectedCredential">
      <option value="undergrad">Undergraduate</option>
      <option value="grad">Graduate</option>
      <option value="mba">MBA</option>
      <option value="mls">MLS</option>
      <option value="mps">MPS</option>
      <option value="msCounseling">MS Counseling</option>
    </select>

    <select v-model="selectedMode">
      <option value="onCampus">On-Campus</option>
      <option value="online">Online</option>
    </select>

    <div v-html="currentDescription"></div>
    <div v-html="currentFootnote"></div>
  </div>
</template>

<script>
import { tuitionBlurbs } from '../assets/replaceData';

export default {
  props: {
    GraduateText: Array,
    UndergraduateText: Array
  },
  data() {
    return {
      selectedMode: 'onCampus',
      selectedCredential: 'undergrad',
      tuitionInfo: tuitionBlurbs
    }
  },
  computed: {
    currentDescription() {
      const info = this.tuitionInfo[this.selectedMode][this.selectedCredential];
      const descriptionTemplate = this.GraduateText[0].description;
      return descriptionTemplate.replace('${tuitionCost}', info[1]).replace('${location}', info[0]);
    },
    currentFootnote() {
      const info = this.tuitionInfo[this.selectedMode][this.selectedCredential];
      const footnoteTemplate = this.GraduateText[0].footnote;
      return footnoteTemplate.replace('${creditHours}', info[2]).replace('${pricePerHour}',);
    }
  },
}
</script>
