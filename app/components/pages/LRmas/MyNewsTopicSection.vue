<template>
    <ScrollView>
      
      <WrapLayout backgroundColor="#fff" v-if="getPosts">   
        <!-- <button @tap="showinfo">1212312</button>  -->
        <button @tap="eraseToken">8979878</button> 
  
        <MainHeadline :opening="first" v-if="getPosts"></MainHeadline>
        <WrapLayout backgroundColor="#fff" v-if="getPosts">
          <StandardHeadline v-for="hl in headLines" :key="hl.id" :headLine="hl"></StandardHeadline>
          <label v-for="hl in headLines" :key="hl.id">{{ hl.id }}</label>
        </WrapLayout>
      </WrapLayout>
    </ScrollView>
  </template>
  
  <script>
  import { ApplicationSettings } from '@nativescript/core';

  
  import MainHeadline from "../../modules/headlines/MainHeadline.vue";
  import StandardHeadline from "../../modules/headlines/StandardHeadline.vue";
  
  
  
  export default {
    components: {
      MainHeadline,
      StandardHeadline
    },
    props:['topicId'],
    data() {
      return {
        home: null,
        posts: null
      }
    },
    computed: {
  
      first() {
        return this.posts[1];
      },
      headLines() {
        debugger;
        return this.posts.slice(1);
      },
      getPosts() {
        if(this.posts==null){
          this.posts=this.$store.getters['lrmasgql/getTopicPosts']
        }
        return this.posts != null
      }
    },
    methods: {
        
      showinfo(){
  
        debugger;
        this.$store.dispatch('lrmasgql/getTopicPosts');
        // console.log("info in last news");
        // console.log(this.home);
      },
      eraseToken(){
        debugger;
        ApplicationSettings.setString("token","");
      }
    },
    watch: {
        topicId:function(newVal, oldVal){
            console.log("newval: "+newVal+" oldval: "+oldVal);
            // await this.$store.dispatch('lrmasgql/loadPostsByTopic',newVal);
            // this.posts=this.$store.getters['lrmasgql/getTopicPosts'];
            this.$store.dispatch('lrmasgql/loadPostsByTopic',newVal).then(() => {
                console.log("changegvshdjasdjahbhsja")
                debugger;
                this.posts=this.$store.getters['lrmasgql/getTopicPosts']
            })
        }
    }
    // loaded(args) {
    //         console.log('loaded from page 2')
    // },
   
   
  }
 
  </script>
  
  <style>
  </style>
  