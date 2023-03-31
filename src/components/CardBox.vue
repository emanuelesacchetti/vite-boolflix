<template>
    <h2>film</h2>
    <div v-for="(film, index) in store.filmList" key="index">
        <SingleCardFilm 
            :imageF='film.poster_path'
            :languageF='film.original_language'
            :titleF='film.original_title'
            :titleItaF='film.title'
            :voteF="film.vote_average"
        />
    </div>
    <h2>serie tv</h2>
    <div v-for="(serie, index) in store.serieList" key="index">
        <SingleCardSerie 
            :imageS='serie.poster_path'
            :languageS='serie.original_language'
            :titleS='serie.original_name'
            :titleItaS='serie.name'
            :voteS="serie.vote_average"
        />
    </div>
    
    <h1>elenco card</h1>
</template>


<script>
    import {store} from '../store.js';
    import SingleCardFilm from './SingleCardFilm.vue';
    import SingleCardSerie from './SingleCardSerie.vue';

    export default {
        name: 'CardBox',
        data(){
            return{
                store
            }
        },
        components: {
            SingleCardFilm,
            SingleCardSerie
        }
    }
</script>


<style lang="scss" scoped>
@use '../styles/general.scss';


</style>