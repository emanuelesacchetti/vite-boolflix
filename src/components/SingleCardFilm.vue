<template>
    <li>
       <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`">
       <div>{{ film.original_language }}</div>
       <div>{{ film.original_title }}</div>
       <div>{{ film.title }}</div>
       <div>
            <span v-for="i in stellePiene">
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-for="i in stelleVuote">
                <i class="fa-regular fa-star"></i>
            </span>
        </div>
    </li>
</template>

<script>
    import {store} from '../store.js'

    export default {
        name: 'SingleCardFilm',
        data(){
            return{
                store,
                stellePiene: this.getStarFull(this.film.vote_average),
                stelleVuote: this.getStarEmpty(this.film.vote_average)
            }
        },
        props: {
            film: Object
        },
        methods: {
            getStarFull(vote){
                let starFull = Math.ceil(vote / 2);
                return starFull 
            },
            getStarEmpty(vote){
                let starEmpty = 5 - this.getStarFull(vote);
                return starEmpty
            }
        }
    }
</script>


<style lang="scss" scoped>

</style>