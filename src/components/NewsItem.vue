<template v-if="this.articles.status === 'ok'">
    <div  v-if='this.articles.totalResults===0'>
        <h6 class='text-h6 d-flex justify-center'>No results found !</h6>
    </div>
    <div class='ma-3 pa-3' v-for='(article,i) in this.articles.articles' :key='i'>
    <v-row>
        <v-col cols="10">
            <div class='text-overline'>{{article.author!==null ? article.author + ' - ': ''}}{{article.source.name}}</div>
            <div class='text-h6'><a class='text-decoration-none' :href='article.url'>{{article.title}}</a></div>
            <p v-html="article.description"></p>
            <div class='text-caption d-flex justify-end'>{{article.publishedAt}}</div>
        </v-col>
        <v-col cols="2" class='d-flex'>
            <v-img
                :aspect-ratio="1"
                :src='article.urlToImage'
                cover
            ></v-img>
        </v-col>
    </v-row>
    </div>   
</template>

<script>
export default {
    props: ['articles'],

    created(){
        console.log('created:' , this.articles)
    },
    updated(){ 
        console.log('updated:' , this.articles)
    },
    
    
}
</script>

<style>
    .grid-date{
        position: absolute;
        bottom: 0;
    }
    .grid-position{
        position:static
    }
</style>