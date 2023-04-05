<template>
    
    <div class="container">
        <section>
            <h2 v-if="this.store.search != ''">MOVIE</h2>
            <ul>
                <li v-for="(film, index) in store.filmList" key="index">
                    <SingleCard 
                        :show = film
                    />
                </li>
            </ul>
        </section>

        <section>
            <h2 v-if="this.store.search != ''">TV SHOW</h2>
            <ul>
                <li v-for="(serie, index) in store.serieList" key="index">
                    <SingleCard 
                        :show = serie
                    />
                </li>
            </ul>
        </section>
    </div>
    
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
@use '../styles/mixins';
@use '../styles/variables' as *;

.container{
  background-color: black;
  width: 1200px;
  margin: auto;
  min-height: 100vh;
}

ul{
    @include mixins.flexbox(flex-start,start);
    flex-wrap: wrap;
    list-style: none;
    margin: 0 auto;
}
li{
        color: white;
        width: calc(100% / 6);
        background-color: rgb(12, 12, 12);
        border: 0.5px solid white;
        height: 250px;
        overflow: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }

h2{
    color: white;
    padding: 20px 0 5px;
}

@media all and (max-width: 1250px){
    .container{
        width: 980px;
        margin: auto
    } 
    li {
        width: calc(100% / 5)
    }
}
@media all and (max-width: 1040px){
    .container{
        width: 800px;
        margin: auto
    } 
    li {
        width: calc(100% / 4)
    }
}
</style>