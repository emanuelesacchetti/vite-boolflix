<template>
        <!--COPERTINA-->
        <div class="cover" v-if="imgView" @mouseover=changeView>
            <img v-if="show.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${show.poster_path}`">
            <div v-else class="noCover">
                <img :src="getImageUrl('logo')" alt="logo Boolflix">
                {{ show.original_title?show.original_title:show.original_name }}
            </div>
        </div>
        <!--INFO-->
        <div v-else  class="info" @mouseleave=changeView>
            <!--LINGUA/BANDIERA-->
            <img class='flag' v-if="store.flagsText.includes(show.original_language)"
            :src='getImageUrl(this.show.original_language)'>
            <h6 v-else>Lingua: {{ show.original_language }}</h6>
            <!--TITOLO ORIGINALE-->
            <h4>Titolo originale: {{ show.original_title?show.original_title:show.original_name }}</h4>
            <!--TITOLO ITALIANO-->
            <h4 v-if="show.title!=show.original_title||show.name!=show.original_name">
                Titolo: {{ show.title?show.title:show.name }}
            </h4>
            <!--VOTO IN STELLE-->
            <div v-if="show.vote_average">
                <span v-for="i in stellePiene">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="i in stelleVuote">
                    <i class="fa-regular fa-star"></i>
                </span>
            </div>
            <!--CAST-->
            <div v-for="i in 5" class="cast">
                <span>{{store.cast[i].name}}</span>
                 as 
                 <span>{{ store.cast[i].character }}</span>
            </div>
            
            <!--TRAMA-->
            <p v-if="show.overview">
                <span>Trama: </span>
                <span>{{ show.overview }}</span>
            </p>
        </div>
        <!--https://api.themoviedb.org/3/search/movie/59427/credits?api_key=7500f58cb271674f8e4901bbd9d46bc3&language=it-IT&query=Hooded-->
       

    
</template>

<script>
    import axios from 'axios';
import {store} from '../store.js'

    export default {
        name: 'SingleCard',
        data(){
            return{
                store,
                stellePiene: this.getStarFull(this.show.vote_average),
                stelleVuote: this.getStarEmpty(this.show.vote_average),
                imgView: true,
                castArray: [],
                allCast: []
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
                this.findCast()
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
            getImageUrl(path){
                console.log('sto usando la funzione per le img')
                return new URL(`../assets/flags/${path}.png`,
                 import.meta.url).href;
                 
                
            },
            findCast(){
                console.log(this.show.id)
                axios.get(`https://api.themoviedb.org/3/movie/${this.show.id}/credits?api_key=7500f58cb271674f8e4901bbd9d46bc3`)
                .then(response => {
                    console.log(response.data.cast);
                    this.store.cast=response.data.cast;                    
                })
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
.noCover {
    text-align: center;
}

.info {
    padding: 10px;

    div{
        padding: 10px;
    }
}
.fa-solid{
    color: rgb(199, 199, 3);
}

.flag{
    width: 30px;
    padding: 5px;
}
.cast{
    font-size: 10px;
}
</style>