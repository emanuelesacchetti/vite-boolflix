<template>
    <li>
       <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`">
       <img src="" alt="">
       <div>{{ serie.original_language }}</div>
       <div>{{ serie.original_name }}</div>
       <div>{{ serie.name }}</div>
       <div>{{ serie.vote_average }}</div>
    </li>
</template>

<script>
import { flags } from '../assets/flags';


    export default {
        name: 'SingleCardSerie',
        props: {
            serie: Object
        },
        methods: {
            getFlag(){
                for(let i=0; i < flags.length; i++){
                    if([i].includes(this.serie.original_language)){
                        this.serie.original_language = [i]
                    }
                }
            }
        }
    }
</script>


<style lang="scss" scoped>

</style>





<!--esempio path image
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
-->