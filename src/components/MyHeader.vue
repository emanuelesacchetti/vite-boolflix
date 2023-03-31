<template>
    <header>
        <input type="text" placeholder="Cerca un film o serie tv" v-model="store.search">
        <button @click="$emit(startSearch)"> Cerca </button>
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
        }
    }
</script>


<style lang="scss" scoped>
@use '../styles/general.scss';


</style>