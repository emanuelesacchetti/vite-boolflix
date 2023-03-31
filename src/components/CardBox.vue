<template>
    <h1>ciao</h1>
</template>


<script>
    import {store} from '../store.js';

    export default {
        name: 'CardBox',
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