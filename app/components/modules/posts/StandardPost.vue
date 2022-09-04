<template>
  <Page class="page">
    <ScrollView>
      <label :text="postId"></label>
      <GridLayout rows="250 1000" v-if="post">
        <WrapLayout row="0" backgroundColor="#fff">
          <Label :text="post.header" class="category" />
          <AbsoluteLayout backgroundColor="#fff">
            <Image :src="post.principalImage.url" top="55" class="img-ppal" />
            <StackLayout class="titular-box">
              <label :text="post.title" class="titular-ppal" textWrap="true" />
              
            </StackLayout>
          </AbsoluteLayout>
        </WrapLayout>

        
        <WebView row="1" :src="post.content" height="1000"/>
      </GridLayout>

    </ScrollView>
    <!-- <label :text="post.header" class="category" /> -->
    <!-- </GridLayout>  -->
  </Page>
  <!-- <Page>
    
      <GridLayout rows="75 * 50">
    <GridLayout row="0" rows="*" columns="50 * 50">
        <label>askjd dlka sdlada</label>
    </GridLayout>
    <WebView row="1" loaded="onWebViewLoaded" id="myWebView" src="https://www.yahoo.com/" />
    <Label row="2" text="sad kdlksalkasldas" />
</GridLayout>
    
  </Page> -->
</template>

<script>

import gql from 'graphql-tag';

const SPOST_QUERY = gql`
query Post($id: Int!){
  post(id: $id) {
    section {
      id
      name
    }
    header
    title
    create  
    principalImage {
          url(size: 240)
        }      
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
    post: {
      query: SPOST_QUERY,
      variables() {
        return { id: parseInt(this.postId) }
      }
    }
  },
  props: ['postId']
}

</script>

<style scoped>
.category {
  width: 100%;
  text-align: center;
  margin-top: 17px;
  font-size: 10px;
  color: #808080;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.titular-box {
  margin-left: 9%;
  width: 82%;
  background-color: #fff;
}

.titular-ppal {
  text-align: center;
  font-size: 19px;
  color: #000;
  font-family: 'Bitter', serif;
}
</style>