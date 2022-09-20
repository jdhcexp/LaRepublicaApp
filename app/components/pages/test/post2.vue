<template>
  <ScrollView>
   <button @tap="showInfo()">wertyuio</button>
   </ScrollView>

</template>

<script>
import gql from 'graphql-tag';

const POST_QUERY = gql `
query books{
  books {
    search(take: 10){
      id,
      thumbnail,
      detail {
        content
      }

    }
  }
}
`
export default {
apollo:{
  $client:'lrmasClient',
    books: POST_QUERY
},
methods: {
  showInfo(){
    
    console.log(this.books)
  }
},
}
</script>

<style>

</style>