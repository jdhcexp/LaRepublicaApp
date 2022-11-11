<template>


    <WebView src="https://www.google.com"/>




</template>

<script>
import gql from 'graphql-tag';

const POST_QUERY = gql `
query Post{
  post(id: 3387160) {
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

apollo:{
    post: POST_QUERY
},
data(){
  return {
    testvar: ''
  }
}
}
</script>

<style>
.relatedNews{
  background-color: blue;
}
</style>
