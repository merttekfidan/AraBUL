<script>
import NewsItem from '../NewsItem.vue'
import Pagination from '../Pagination.vue'
export default {
  
  components:{NewsItem, Pagination},
  mounted() {
    this.$store.dispatch('catchNews', {});
  },
  computed: {
    getData() {
      return this.$store.state.apiData;
    },
    totalPageNumber(){
      let totalResults = this.$store.state.apiData.data.totalResults
      let chunk = this.$store.state.pagination.chunk
      return Math.ceil(totalResults/chunk)
    },
    currentPage(){
      return this.$store.state.pagination.currentPage 
    }
  },

};
</script>

<template>
  <v-container >
    <div v-if='getData.data'>
    <div v-if='getData.data.totalResults!==0' class='pa-2 ma-2 text-caption'>Total results found: {{getData.data.totalResults}}</div>
    <div class='pa-2 ma-2 text-caption'>Total Page Number: {{totalPageNumber}}</div>
    <Pagination :currentPage='currentPage' :totalPageNumber='totalPageNumber'/>  
    <NewsItem :articles='getData.data'/>
    </div>
  </v-container>
</template>

<style>

</style>
