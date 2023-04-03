<template>
        <div class="cover" v-if="imgView" @mouseover=changeView>
            <img :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`">
        </div>
        <div v-else  class="info" @mouseleave=changeView>
            <div>{{ film.original_language }}</div>
            <div>{{ film.original_title }}</div>
            <div>{{ film.title }}</div>
            <div>{{ film.overview }}</div>
            <div>
                <span v-for="i in stellePiene">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="i in stelleVuote">
                    <i class="fa-regular fa-star"></i>
                </span>
            </div>
        </div>
        
       

    
</template>

<script>
    import {store} from '../store.js'

    export default {
        name: 'SingleCardFilm',
        data(){
            return{
                store,
                stellePiene: this.getStarFull(this.film.vote_average),
                stelleVuote: this.getStarEmpty(this.film.vote_average),
                imgView: true
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
            },
            changeView(){
                this.imgView = !this.imgView
            }
        }
    }
</script>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/mixins';
@use '../styles/variables' as *;

.cover{
    height: 100%;
}
img{
    width: 100%;
    object-fit: cover;
    object-position: center;
}
.info {
    padding: 5px;

    div{
        padding: 5px;
    }
}
</style>