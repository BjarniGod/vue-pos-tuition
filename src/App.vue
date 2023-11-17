<template>
  <main>
    <div>
      <TheHeader class="tiger-headline" title="Tuition" />
      <TheBlurb :GraduateText="GraduateText" :UndergraduateText="UndergraduateText" />
    </div>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheBlurb from './components/TheBlurb.vue';
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
  },
}
</script>

