<template>
  <ScrollView>
    
    <WrapLayout backgroundColor="#fff" v-if="getHome">   
      <!-- <button @tap="showinfo">1212312</button>  -->
      <button @tap="eraseToken">8979878</button> 

      <MainHeadline :opening="first" v-if="home && home.opening && home.opening.length > 0"></MainHeadline>
      <WrapLayout backgroundColor="#fff" v-if="home && home.opening && home.opening.length > 0">
        <StandardHeadline v-for="hl in headLines" :key="hl.id" :headLine="hl"></StandardHeadline>
        <label v-for="hl in headLines" :key="hl.id">{{ hl.id }}</label>
      </WrapLayout>
    </WrapLayout>
  </ScrollView>
</template>

<script>
import { ApplicationSettings } from '@nativescript/core';
import gql from 'graphql-tag';

import MainHeadline from "../modules/headlines/MainHeadline.vue";
import StandardHeadline from "../modules/headlines/StandardHeadline.vue";

const LAST_NEWS_QUERY = gql`
query getLastNews {  
  home {    
    specialOpening {
      specialTitle
      relatedNews {
        id
        header
        title
        principalImage {
          url(size: 240)
        }
        urlApp
      }
    }
    opening {
      id
      header
      title
      principalImage {
        url(size: 480)
      }
      urlApp      
    }
  }
}
`;

export default {
  components: {
    MainHeadline,
    StandardHeadline
  },
  // apollo: {        
  //     home: LAST_NEWS_QUERY
  // },   
  data() {
    return {
      home: null
    }
  },
  computed: {

    first() {
      return this.home.opening[0];
    },
    headLines() {
      debugger;
      return this.home.opening.slice(1);
    },
    getHome() {
      if(this.home==null){
        this.home=this.$store.getters['lrgql/getHome']
      }
      return this.home != null
    }
  },
  methods: {
 
    showinfo(){

      debugger;
      this.$store.dispatch('lrmasgql/getMeInfo');
      // console.log("info in last news");
      // console.log(this.home);
    },
    eraseToken(){
      debugger;
      ApplicationSettings.setString("token","");
    }
  },
  async beforeMount() {
    console.log("beforeMount")
    this.$store.dispatch('lrgql/getLastNews');
    debugger;
  }


};
</script>

<style>
</style>
