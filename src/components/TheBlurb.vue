<template>
  <div>
    <select v-model="selectedCredential">
      <option value="undergrad">Undergraduate</option>
      <option value="grad">Graduate Programs</option>
    </select>

    <select v-if="selectedCredential === 'grad'" v-model="selectedGradProgram">
      <option v-for="(program, name) in graduatePrograms" :value="name" :key="name">{{ program }}</option>
    </select>

    <select v-if="showModeSelector" v-model="selectedMode">
      <option value="onCampus">On-Campus</option>
      <option value="online">Online</option>
    </select>

    <div v-html="currentDescription"></div>
    <div v-html="currentFootnote"></div>
  </div>

  <TheCalculator :pricePerHour="pricePerHour" />
</template>

<script>
import { tuitionBlurbs } from '../assets/replaceData';
import TheCalculator from './TheCalculator.vue';
import { dollarAmount } from '../filters.js';

export default {
  props: {
    GraduateText: Array,
    UndergraduateText: Array
  },
  components: {
    TheCalculator
  },
  data() {
    return {
      selectedMode: 'onCampus',
      selectedCredential: 'undergrad',
      selectedGradProgram: 'grad',
      tuitionInfo: tuitionBlurbs,
      graduatePrograms: {
        grad: 'Graduate',
        mba: 'MBA',
        mls: 'MLS',
        mps: 'MPS',
        msCounseling: 'MS Counseling',
        RNtoDNP: 'RN to DNP',
        MSNtoDNP: 'MSN to DNP'
      },
      programAvailability: {
        msCounseling: 'online',
        RNtoDNP: null,
        MSNtoDNP: null,
      }
    }
  },
  methods: {
    formatLocation(mode) {
      return mode === 'onCampus' ? 'On-Campus' : 'Online';
    },
    dollarAmount(value) {
      if (typeof value !== "number") {
        return value;
      }
      var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
      });
      return formatter.format(value);
    }
  },
  computed: {
    showModeSelector() {
      return this.selectedCredential !== 'grad' ||
             (this.programAvailability[this.selectedGradProgram] !== null &&
              this.programAvailability[this.selectedGradProgram] !== undefined);
    },
    modeDisabled() {
      return this.selectedCredential === 'grad' && this.programAvailability[this.selectedGradProgram] === 'online';
    },
    pricePerHour() {
      let info = this.tuitionInfo[this.selectedMode][this.selectedCredential];
      return info[1] / info[2];
    },
    currentDescription() {
      let info;
      let descriptionTemplate;

      if (this.selectedCredential === 'undergrad') {
        info = this.tuitionInfo[this.selectedMode][this.selectedCredential];
        descriptionTemplate = this.UndergraduateText[0].description;
      } else {
        info = this.tuitionInfo[this.selectedMode][this.selectedGradProgram];
        descriptionTemplate = this.GraduateText[0].description;
      }
      return descriptionTemplate.replace('${tuitionCost}', dollarAmount(info[1])).replace('${location}', this.formatLocation(this.selectedMode));
    },
    currentFootnote() {
      let info;
      let footnoteTemplate;

      if (this.selectedCredential === 'undergrad') {
        info = this.tuitionInfo[this.selectedMode][this.selectedCredential];
        footnoteTemplate = this.UndergraduateText[0].footnote;
      } else {
        info = this.tuitionInfo[this.selectedMode][this.selectedGradProgram];
        footnoteTemplate = this.GraduateText[0].footnote;
      }
      let perHour = info[1] / info[2];
      return footnoteTemplate.replace('${creditHours}', info[2]).replace('${pricePerHour}', this.dollarAmount(perHour));
    }
  },
  watch: {
    selectedGradProgram(newVal) {
      if (this.programAvailability[newVal] === 'online') {
        this.selectedMode = 'online';
      } 
      // else if (this.programAvailability[newVal] === 'onCampus') {
      //   this.selectedMode = 'onCampus';
      // } else {
      //   this.selectedMode = null;
      // }
    }
  }
}
</script>
