<template>
  <ScrollView>
   <WrapLayout v-if="post"> 
    <HtmlView :html="post.content" />
   </WrapLayout>
   </ScrollView>

</template>

<script>
import gql from 'graphql-tag';

const POST_QUERY = gql `
query Post{
  post(id: 3128077) {
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
export default {
apollo:{
    post: POST_QUERY
}
}
</script>

<style>

</style>