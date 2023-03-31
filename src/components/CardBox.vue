<template>
    <div v-for="(film, index) in store.filmList" key="index">
        <SingleCard 
            :image='film.backdrop_path'
            :language='film.original_language'
            :title='film.original_title'
            :titleIta='film.title'
            :vote="film.vote_average"
        />
    </div>
    
    <h1>elenco card</h1>
</template>


<script>
    import {store} from '../store.js';
    import SingleCard from './SingleCard.vue';

    export default {
        name: 'CardBox',
        data(){
            return{
                store
            }
        },
        components: {
            SingleCard
        }
    }
</script>


<style lang="scss" scoped>
@use '../styles/general.scss';


</style>