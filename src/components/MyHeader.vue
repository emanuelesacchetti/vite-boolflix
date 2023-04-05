<template>
    <header>
        <img :src="getImageUrl('logo')" alt="logo Boolflix">
        <div>
            <input type="text" placeholder="Cerca un film o serie tv" v-model="store.search">
            <button @click="$emit('startSearch')"> Cerca </button>
        </div>
    </header>
</template>


<script>
    import {store} from '../store.js';

    export default {
        name: 'MyHeader',
        data(){
            return{
                store
            }
        },
        methods: {
            getImageUrl(path){
                console.log('sto usando la funzione per le img')
                return new URL(`../assets/flags/${path}.png`,
                 import.meta.url).href;
                
            }
        }
    }
</script>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/mixins';
@use '../styles/variables' as *;

header {
    height: 70px;
    @include mixins.flexbox(space-between);
    background-color: black;
    padding: 10px;

    img{
        height: 40px;
    }
}
</style>