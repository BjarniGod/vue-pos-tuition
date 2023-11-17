<template>
  <main>
    <div>
      <TheHeader class="tiger-headline" title="Tuition" />
      <TheBlurb :GraduateText="GraduateText" :UndergraduateText="UndergraduateText" />

      <TheCalculator />
    </div>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheBlurb from './components/TheBlurb.vue';
import TheCalculator from './components/TheCalculator.vue';
import GraduateText from './assets/graduate.json';
import UndergraduateText from './assets/undergraduate.json';

export default {
  data() {
    return {
      GraduateText,
      UndergraduateText
    }
  },
  components: {
    TheHeader,
    TheBlurb,
    TheCalculator
  },
}
</script>

