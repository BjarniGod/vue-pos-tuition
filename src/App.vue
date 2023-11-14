<template>
  <main>
    <div class="tiger-border">
      <TheHeader class="tiger-headline" title="Replace" />
      <TheBlurb />
      <TheHeader class="tiger-headline" title="Full Text" />
      <full-text />
    </div>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheBlurb from './components/TheBlurb.vue';
import FullText from './components/FullText.vue';

export default {
    components: {
        TheHeader,
        TheBlurb,
        FullText
    },
}
</script>

<style scoped>

</style>
