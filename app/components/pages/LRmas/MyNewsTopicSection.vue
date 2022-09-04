<template>
    <ScrollView>
      
      <WrapLayout backgroundColor="#fff">   
        <!-- <button @tap="showinfo">1212312</button>  -->
        <!-- <button @tap="showinfo">8979878</button>  -->
  
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
        return this.posts[0];
      },
      headLines() {
        debugger;
        return this.posts.slice(0);
      },
      getPosts() {
        console.log("+++++++++++++++++GETPOST");
        if(this.posts==null){
          this.posts=this.$store.getters['lrmasgql/getTopicPosts']          
        }
        return this.posts != null
      }
    },
    methods: {
        
      showinfo(){
  
        
        console.log(this.posts)
    
      },
      eraseToken(){
    
        ApplicationSettings.setString("token","");
      }
    },
    watch: {
        topicId:function(newVal, oldVal){
            console.log("---------------------------whtcher")
            this.$store.dispatch('lrmasgql/loadPostsByTopic',newVal).then(() => {
               
                this.posts=this.$store.getters['lrmasgql/getTopicPosts']
                
            })
        }
    }  
   
  }
 
  </script>
  
  <style>
  </style>
  