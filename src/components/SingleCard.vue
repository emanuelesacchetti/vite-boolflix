<template>
        <!--COPERTINA-->
        <div class="cover" v-if="imgView" @mouseover=changeView>
            <img :src="`https://image.tmdb.org/t/p/w342${show.poster_path}`">
        </div>
        <!--INFO-->
        <div v-else  class="info" @mouseleave=changeView>
            <!--LINGUA/BANDIERA-->
            <img class='flag' v-if="store.flagsText.includes(show.original_language)"
            :src='getImageUrl()'>
            <h6 v-else>{{ show.original_language }}</h6>
            <!--TITOLO ORIGINALE-->
            <h4>{{ show.original_title?show.original_title:show.original_name }}</h4>
            <!--TITOLO ITALIANO-->
            <h4 v-if="show.title!=show.original_title||show.name!=show.original_name">
                {{ show.title?show.title:show.name }}
            </h4>
            <!--VOTO IN STELLE-->
            <div>
                <span v-for="i in stellePiene">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="i in stelleVuote">
                    <i class="fa-regular fa-star"></i>
                </span>
            </div>
            <!--TRAMA-->
            <p>{{ show.overview }}</p>
        </div>
        
       

    
</template>

<script>
    import {store} from '../store.js'

    export default {
        name: 'SingleCardFilm',
        data(){
            return{
                store,
                stellePiene: this.getStarFull(this.show.vote_average),
                stelleVuote: this.getStarEmpty(this.show.vote_average),
                imgView: true
            }
        },
        props: {
            show: Object
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
            },
            originalTitle(){
                if(this.show.original_title){
                    this.show.original_title
                }else{
                    this.show.original_name
                }
            },
            title(){
                if(this.show.title){
                    this.show.title
                }else{
                    this.show.name
                }
            },
            getImageUrl(){
                console.log('sto usando la funzione per le img')
                return new URL(`../assets/flags/${this.show.original_language}.png`,
                 import.meta.url).href;
                
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

    img{
    width: 100%;
    object-fit: cover;
    object-position: center;
    }
}

.info {
    padding: 10px;

    div{
        padding: 10px;
    }
}

.flag{
    width: 30px;
    padding: 5px;
}
</style>