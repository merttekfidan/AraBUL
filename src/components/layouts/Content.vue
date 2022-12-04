<script>
import NewsItem from '../NewsItem.vue'
export default {
  
  components:{NewsItem},
  mounted() {
    //this.$store.dispatch('catchNews', {});
  },
  computed: {
    getData() {
      return this.$store.state.apiData;
    },
  },

};
</script>

<template>
  <v-container>
    <NewsItem v-if='getData.data' :article='getData.data'/>
  </v-container>
</template>

<style>

</style>
