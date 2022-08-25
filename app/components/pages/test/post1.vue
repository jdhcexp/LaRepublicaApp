<template>
  <GridLayout rows="*,auto" columns="*,*">
    <WebView src="https://www.nativescript.org" colSpan="2" />
    <Button row="1" col="0" text="Button 1" class="btn btn-primary" />
    <Button row="1" col="1" text="Button 2" class="btn btn-primary" />
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
export default {
apollo:{
    post: POST_QUERY
}
}
</script>

<style>

</style>