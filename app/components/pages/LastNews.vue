<template>
  <ScrollView>

    <WrapLayout backgroundColor="#fff" v-if="getHome">
      <!-- <button @tap="showinfo">1212312</button>
      <button @tap="eraseToken">8979878</button>  -->
      <label :text="token"></label>
      <MainHeadline :opening="first" v-if="home && home.opening && home.opening.length > 0"></MainHeadline>
      <WrapLayout backgroundColor="#fff" v-if="home && home.opening && home.opening.length > 0">
        <StandardHeadline v-for="hl in headLines" :key="hl.id" :headLine="hl"></StandardHeadline>
        <!-- <label v-for="hl in headLines" :key="hl.id">{{ hl.id }}</label> -->
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
      home: null,
      token:''
    }
  },
  computed: {
    getToken() {
          return ApplicationSettings.getString('token');
        },
    first() {
      return this.home.opening[0];
    },
    headLines() {

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

      this.token = this.$store.getters["auth/getToken"]
      this.$store.dispatch('lrmasgql/getTopicsInfo');
    },
    eraseToken(){
      // this.$store.dispatch('lrmasgql/getTopicsInfo');
      ApplicationSettings.setString("token","");
      // this.showinfo();
    }
  },
  async beforeMount() {
    this.$store.dispatch('lrgql/getLastNews');
  }


};
</script>

<style>
</style>
