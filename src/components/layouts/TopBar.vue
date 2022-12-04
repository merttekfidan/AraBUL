<script>
import SearchBar from '../SearchBar.vue';

export default {
  components: { SearchBar },
};
</script>

<template>
    <v-app-bar>
      <v-toolbar-title>AraBUL</v-toolbar-title>
      <v-toolbar-title><SearchBar/></v-toolbar-title>
      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>
</template>

<style>

</style>
