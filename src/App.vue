<script>
import TopBar from './components/layouts/TopBar.vue';
import Content from './components/layouts/Content.vue';

export default {
  components: { TopBar, Content },

};
</script>

<template>
  <v-app id="inspire">
    <TopBar/>
    <v-main class="bg-grey-lighten-2">
      <Content/>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
