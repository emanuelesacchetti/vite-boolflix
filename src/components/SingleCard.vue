<template>
    <div>
       <div>{{ 'image' }}</div>
       <div>{{ language }}</div>
       <div>{{ title }}</div>
       <div>{{ titleIta }}</div>
       <div>{{ vote }}</div>
    </div>
</template>

<!--esempio path image
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
-->

<script>

    export default {
        name: 'SingleCard',
        props: {
            image: String,
            language: String,
            title: String,
            titleIta: String,
            vote: Number
        }
    }
</script>


<style lang="scss" scoped>

</style>