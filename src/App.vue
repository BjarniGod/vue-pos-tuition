<template>
  <main>
    <div>
      <TheHeader class="tiger-headline" title="Tuition" />
      <TheData />
      <TheCalculator />
    </div>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import TheBlurb from './components/TheBlurb.vue';
import TheData from './components/TuitionSelect.vue';
import TheCalculator from './components/TheCalculator.vue';

export default {
    components: {
        TheHeader,
        // TheBlurb,
        TheData,
        TheCalculator
    },
}
</script>

<style scoped>

</style>
