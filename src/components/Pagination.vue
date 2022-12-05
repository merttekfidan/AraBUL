<template>
    <span v-for='page in this.totalPageNumber' :key='page'>
        <a href='#'>{{page}}.</a>
    </span>
</template>

<script>
export default {
    props:[
        'currentPage',
        'totalPageNumber'
    ]
}
</script>

<style>

</style>