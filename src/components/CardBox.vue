<template>
    <section>
        <h2>film</h2>
        <ul v-for="(film, index) in store.filmList" key="index">
            <SingleCardFilm 
                :film = film
            />
        </ul>
    </section>

    <section>
        <h2>serie tv</h2>
        <ul v-for="(serie, index) in store.serieList" key="index">
            <SingleCardSerie 
                :serie = serie
            />
        </ul>
    </section>
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