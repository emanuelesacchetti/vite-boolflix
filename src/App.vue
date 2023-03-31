<script>
  import axios from 'axios';
  import {store} from './store.js'

  import CardBox from './components/CardBox.vue';
  import MyHeader from './components/MyHeader.vue';


  export default {
    data(){
      return {
        store
      }
    },
    components: {
      MyHeader,
      CardBox
    },
    methods: {
      findCard(){

        let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=7500f58cb271674f8e4901bbd9d46bc3&language=it-IT&query=';

        if(store.search.length > 0){
          urlApi += `${store.search}`
          }else{
            urlApi += `avengers`
          }

          
          axios.get(urlApi)
          .then(response => {
            this.store.filmList = response.data.results;
            console.log(this.store.filmList)
          })

      }
    
    },
    created(){
      this.findCard()
    }
  }
</script>


<template>
  <MyHeader @startSearch="findCard"/>

  <main>
    <CardBox />
  </main>
</template>


<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;

</style>



<!--autenticazione API - 7500f58cb271674f8e4901bbd9d46bc3-->
