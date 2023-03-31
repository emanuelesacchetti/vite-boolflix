<template>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w342${imageS}`">
        <div>{{ languageS }}</div>
        <div>{{ titleS }}</div>
        <div>{{ titleItaS }}</div>
        <div>{{ voteS }}</div>
    </div>
</template>

<script>
    

    export default {
        name: 'SingleCardSerie',
        props: {
            imageS: String,
            languageS: String,
            titleS: String,
            titleItaS: String,
            voteS: Number
        }
    }
</script>


<style lang="scss" scoped>

</style>






<!--esempio path image
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
-->