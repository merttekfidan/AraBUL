<script>
import { formatDate } from '../utils/functions'
export default {
  data: () => ({
    searchBarValue: '',
  }),
  methods: {
    onSearch() {
      this.$store.dispatch('catchNews', {
        keyword: this.searchBarValue, from: '2022-11-05', to: '2022-12-03', sortBy: 'popularity',
      });
    },
  },
};
</script>

<template>
      <v-text-field
        v-model='searchBarValue'
        density="compact"
        variant="solo"
        label="Search News"
        append-inner-icon="mdi-magnify"
        hide-details
        @click:append-inner="onSearch"
        v-on:keyup.enter="onSearch"
      ></v-text-field>
</template>
