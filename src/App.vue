<template>
  <main>
    <div>
      <TheHeader class="tiger-headline" title="Tuition" />
      <TheData />
    </div>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheData from './components/TuitionSelect.vue';

export default {
    components: {
        TheHeader,
        TheData
    },
}
</script>

<style scoped>

</style>
