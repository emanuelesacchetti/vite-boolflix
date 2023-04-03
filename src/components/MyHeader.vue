<template>
    <header>
        <h1>BOOLFLIX</h1>
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

    h1{
        color: $color_primary;
    }
}
</style>