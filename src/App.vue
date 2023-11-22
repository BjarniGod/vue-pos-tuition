<template>
  <main>
    <div>
      <TheHeader class="tiger-headline" title="Tuition" />
      <TheBlurb :TheBlurbs="TheBlurbs" />
    </div>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheBlurb from './components/TheBlurb.vue';
import TheBlurbs from './assets/blurbs.json';

export default {
  data() {
    return {
      TheBlurbs
    }
  },
  components: {
    TheHeader,
    TheBlurb,
  },
}
</script>

