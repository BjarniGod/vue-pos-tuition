<template>
  <div>
    <select v-model="selectedCredential">
      <option value="undergrad">Undergraduate</option>
      <option value="grad">Graduate Programs</option>
    </select>

    <select v-if="selectedCredential === 'grad'" v-model="selectedGradProgram">
      <option v-for="(program, name) in graduatePrograms" :value="name" :key="name">{{ program.title }}</option>
    </select>

    <select v-if="showModeSelector" :disabled="modeDisabled" v-model="selectedMode">
      <option v-for="mode in availableModes" :value="mode" :key="mode">{{ formatLocation(mode) }}</option>
    </select>

    <div class="tiger-text" v-html="currentDescription"></div>
    <div class="tiger-text" v-html="currentFootnote"></div>
  </div>

  <TheCalculator :pricePerHour="pricePerHour" />
</template>

<script>
import { tuitionInfo } from '../assets/replaceData';
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
      tuitionInfo: tuitionInfo.programs,
    }
  },
  computed: {
    graduatePrograms() {
      return Object.entries(this.tuitionInfo).reduce((acc, [key, value]) => {
        if (key !== 'undergrad') {
          acc[key] = value;
        }
        return acc;
      }, {});
    },
    availableModes() {
      const program = this.selectedCredential === 'grad' ? this.tuitionInfo[this.selectedGradProgram] : this.tuitionInfo[this.selectedCredential];
      return program.availability;
    },
    showModeSelector() {
      return this.availableModes.length > 0;
    },
    modeDisabled() {
      return this.availableModes.length === 1;
    },
    currentProgramInfo() {
      const programKey = this.selectedCredential === 'grad' ? this.selectedGradProgram : this.selectedCredential;
      const program = this.tuitionInfo[programKey];
      const tuitionData = program.tuition[this.selectedMode];
      if (!tuitionData) return null;
      return {
        title: program.title,
        price: tuitionData[0],
        creditHours: tuitionData[1]
      };
    },
    pricePerHour() {
      const info = this.currentProgramInfo;
      if (!info) return 0;
      return info.price / info.creditHours;
    },
    currentDescription() {
      const info = this.currentProgramInfo;
      if (!info) return 'Information not available';
      const template = this.selectedCredential === 'undergrad' ? this.UndergraduateText[0].description : this.GraduateText[0].description;
      return template.replace('${tuitionCost}', dollarAmount(info.price)).replace('${location}', this.formatLocation(this.selectedMode));
    },
    currentFootnote() {
      const info = this.currentProgramInfo;
      if (!info) return 'Information not available';
      const template = this.selectedCredential === 'undergrad' ? this.UndergraduateText[0].footnote : this.GraduateText[0].footnote;
      return template.replace('${creditHours}', info.creditHours).replace('${pricePerHour}', dollarAmount(this.pricePerHour));
    }
  },
  methods: {
    formatLocation(mode) {
      return mode === 'onCampus' ? 'On-Campus' : (mode.charAt(0).toUpperCase() + mode.slice(1));
    },
  },
  watch: {
    selectedCredential(newVal) {
      if (newVal === 'grad') {
        this.selectedGradProgram = Object.keys(this.graduatePrograms)[0];
      }
    },
    selectedGradProgram() {
      if (this.availableModes.length > 0) {
        this.selectedMode = this.availableModes[0];
      }
    }
  }
}
</script>
