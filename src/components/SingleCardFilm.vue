<template>
    <li>
       <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`">
       <div>{{ film.original_language }}</div>
       <div>{{ film.original_title }}</div>
       <div>{{ film.title }}</div>
       <div>{{ film.vote_average }}</div>
    </li>
</template>

<script>

    export default {
        name: 'SingleCardFilm',
        props: {
            film: Object
        }
    }
</script>


<style lang="scss" scoped>

</style>