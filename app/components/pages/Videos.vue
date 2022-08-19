<template>
    <ScrollView>        
        
        <StackLayout v-if="videos && videos.posts">
        <label>{{showId}}</label>
           <VideoMainHeadline :headline="videos.posts[0]"></VideoMainHeadline>
           <VideoHeadline v-for="(item, index) in videos.posts.slice(1,20)" :key="index" :headline="item"></VideoHeadline>
        </StackLayout>
    </ScrollView>
</template>

<script>
import gql from 'graphql-tag';
import VideoMainHeadline from '../modules/headlines/VideoMainHeadline';
import VideoHeadline from '../modules/headlines/VideoHeadline';

const VIDEOS_QUERY = gql`
query videoposts($showId: Int!){
  videos {     
    posts(showId: $showId){
      id
      title
      youtubeThumb
      principalImage {
        url
      }
      section {
        id
        name               
      }
    }
  }
}
`


export default {
    props: ["showId"],
    apollo: {
        videos: {
            query: VIDEOS_QUERY,
            variables() {
                return { showId: parseInt(this.showId) };
            }
        }
    },
    methods: {
        showInfo() {
            debugger;
            console.log(this.videos);
            debugger;
        }
    },
    components: { VideoMainHeadline, VideoHeadline }
}
</script>