<template>
    <div>
       <div>{{ 'imageS' }}</div>
       <div>{{ languageS }}</div>
       <div>{{ titleS }}</div>
       <div>{{ titleItaS }}</div>
       <div>{{ voteS }}</div>
    </div>
</template>

<!--esempio path image
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
-->

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