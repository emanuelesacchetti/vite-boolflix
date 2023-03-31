<template>
    <div>
       <img :src="`https://image.tmdb.org/t/p/w342${imageF}`">
       <div>{{ languageF }}</div>
       <div>{{ titleF }}</div>
       <div>{{ titleItaF }}</div>
       <div>{{ voteF }}</div>
    </div>
</template>

<!--esempio path image
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
-->

<script>

    export default {
        name: 'SingleCardFilm',
        props: {
            imageF: String,
            languageF: String,
            titleF: String,
            titleItaF: String,
            voteF: Number,
        }
    }
</script>


<style lang="scss" scoped>

</style>