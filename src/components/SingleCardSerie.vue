<template>
    <li>
       <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`">

       <div v-for="i in store.flagsText.length">
            <span v-if="serie.original_language == store.flagsText[i]">
                <img src="../assets/flags[i]" alt="">
            </span>
            <span v-else>
                {{ serie.original_language }}
            </span>
        </div>
       

       <div>{{ serie.original_name }}</div>
       <div>{{ serie.name }}</div>
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
        name: 'SingleCardSerie',
        data(){
            return{
                store,
                stellePiene: this.getStarFull(this.serie.vote_average),
                stelleVuote: this.getStarEmpty(this.serie.vote_average)

            }
        },
        props: {
            serie: Object
        },
        methods: {
            /*  
            getFlag(){
                
                this.store.flagsText.forEach((element,index) => {
                    if(this.serie.original_language == element){
                        console.log('flag'+ index)
                        //vorrei stampare l'img che si trova in assets/flags
                    }
                })
            }
            */
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





<!--esempio path image
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
-->