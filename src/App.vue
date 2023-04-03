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

        let urlFilmApi = 'https://api.themoviedb.org/3/search/movie?api_key=7500f58cb271674f8e4901bbd9d46bc3&language=it-IT&query=';
        let urlSerieApi = 'https://api.themoviedb.org/3/search/tv?api_key=7500f58cb271674f8e4901bbd9d46bc3&language=it-IT&query=';

        if(store.search.length > 0){
          console.log(store.search)
          urlFilmApi += `${store.search}`
          urlSerieApi += `${store.search}`
          
          }else{
            urlFilmApi += `avengers`;
            urlSerieApi += 'avengers'
          }

          
          axios.get(urlFilmApi)
          .then(response => {
            this.store.filmList = response.data.results;
            console.log(this.store.filmList)
          })
          axios.get(urlSerieApi)
          .then(response => {
            this.store.serieList = response.data.results;
            console.log(this.store.serieList)
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
@use './styles/general.scss';
@use './styles/mixins';
@use './styles/variables' as *;


main{
  background-color: black;
}

</style>



<!--autenticazione API - 7500f58cb271674f8e4901bbd9d46bc3-->
