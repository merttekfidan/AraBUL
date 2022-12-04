<template>
    <v-row no-gutters>
        <v-col cols="10">
    
            <div class='text-overline'>Source</div>
            <div class='text-h6'><a class='text-decoration-none' href='#'>Title</a></div>
            <p>Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions Descriptions </p>
            <div class='text-caption'>26.03.1992</div>

      </v-col>
      <v-col cols="2" class='d-flex align-items'>
            <v-img
                class="bg-white"
                :aspect-ratio="1"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                cover
            ></v-img>
      </v-col>
    </v-row>
    
    <v-row></v-row>    
</template>

<script>
export default {
    props: ['article'],
    created(){
        console.log('news', this.article)
    }

}
</script>

<style>
    .detail-layout{
        grid-template-rows:100px 100px 100px;
    }
</style>