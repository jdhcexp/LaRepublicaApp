<template>
<ScrollView v-if="post">


        <!-- <button @tap="paserHtml">parse</button> -->
       <!-- <WebView src="<div><h1>Some static HTML</h1></div>" /> -->
          
        
        <WebView :src="post.content" />
   
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';

const POST_QUERY = gql `
query Post{
  post(id: 3406674) {
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
    content(platform: APP)    
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
export default {
    apollo: {
        post: POST_QUERY
    },
    data() {
        return {
            testvar : "<div>skldj ksd</div>"
        };
    },
   
}
</script>

<style>

</style>
