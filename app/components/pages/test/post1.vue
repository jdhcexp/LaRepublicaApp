<template>
  <GridLayout rows="*,auto" columns="*,*">
    <!-- <WebView src="https://www.nativescript.org" colSpan="2" /> -->
    <Button row="1" col="0" text="Button 1" class="btn btn-primary" @tap="getLastNews()" />
    <Button row="1" col="1" text="Button 2" class="btn btn-primary" />
    <label :text="home"></label>
</GridLayout>
</template>

<script>
import gql from 'graphql-tag';

const POST_QUERY = gql `
query Post{
  post(id: 3389481) {
    section {
      id
      name
    }
    header
    title
    create        
    author{
      id
      name
      photo {
        alt
        url
      }      
    }
    content(platform: WEB)    
    attachments{
      title
      url
    }
    relatedPosts{
      title
      id
      urlApp
    }
  }
}
`

import { useStore } from 'vuex'

export default {

// apollo:{
//     post: POST_QUERY
// },
// methods:{
//   getLastNews(){
//     this.$store.dispatch('lrgql/getLastNews'); 
//     console.log("ajshbdjas");
//     console.log(this.$store.getters["lrgql/getHome"]); 
//   }
// }
}
</script>

<style>

</style>