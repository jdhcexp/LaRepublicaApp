<template>
	<Page class="page">
		<ScrollView>
		<label :text="postId"></label>
		<GridLayout rows="470 1000" v-if="post">
			<WrapLayout row="0" backgroundColor="#fff">
				<Label :text="post.header" class="category" />
				<label :text="post.title" class="titular-into" textWrap="true" />
				<Label text="2017/11/06" class="date" />
				<AbsoluteLayout backgroundColor="#fff">
					<Image :src="post.principalImage.url" top="0" class="img-ppal" />
				</AbsoluteLayout>
				<StackLayout orientation="horizontal" class="post-foot">
					<Image src="~/assets/icons/camara.png" width="15" class="" verticalAlignment="center" />
					<Label text="Bloomberg" class="text-bloom" />
				</StackLayout>
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
	.titular-into {
		width: 80%;
		margin-left: 10%;
		text-align: center;
		font-size: 19px;
		color: #000;
		font-family: 'Bitter', serif;
	}
	.date {
		width: 100%;
		text-align: center;
		margin-top: 16px;
		font-size: 12px;
		color: #808080;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		line-height: 16px;
		margin-bottom: 36px;
	}
	.post-foot {
		background-color: #F5F4F6;
		margin-left: 32px;
		margin-right: 32px;
		height: 86px;
		padding: 23px 30px;
		width: 95%;
		margin-top: -43px;
		z-index: 99;
	}
	.text-bloom {
		font: normal normal 600 10px/13px Montserrat;
		color: #808080;
		border-color: #C2C2C2;
  		border-width: 0 0 0 1;
		padding-left: 22px;
		margin-left: 22px;
	}
</style>