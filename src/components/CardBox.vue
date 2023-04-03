<template>
    <div class="container">
        <section>
            <h2>film</h2>
            <ul>
                <li v-for="(film, index) in store.filmList" key="index">
                    <SingleCardFilm 
                        :film = film
                    />
                </li>
            </ul>
        </section>

        <section>
            <h2>serie tv</h2>
            <ul>
                <li v-for="(serie, index) in store.serieList" key="index">
                    <SingleCardSerie 
                        :serie = serie
                    />
                </li>
            </ul>
        </section>
    </div>
    
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
@use '../styles/mixins';
@use '../styles/variables' as *;

.container{
  background-color: black;
  max-width: 1200px;
  margin: auto;
}
ul{
    @include mixins.flexbox(flex-start,start);
    flex-wrap: wrap;
    list-style: none;
    margin: 0 auto;
    

    li{
        color: white;
        width: 200px;
        background-color: red;
        border: 0.5px solid white;
        height: 250px;
        overflow: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    
    }
}
h2{
    color: white;
}


</style>