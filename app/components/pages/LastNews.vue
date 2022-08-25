<template>
<ScrollView>
    <WrapLayout backgroundColor="#fff">
        <!-- <label> {{lastNews.data.menu.id}}</label> -->        
        <MainHeadline :opening="first" v-if="home && home.opening && home.opening.length > 0"></MainHeadline>
        <WrapLayout backgroundColor="#fff" v-if="home && home.opening && home.opening.length > 0">
            <StandardHeadline v-for="hl in headLines" :key="hl.id" :headLine="hl"></StandardHeadline>
            <label v-for="hl in headLines" :key="hl.id">{{hl.id}}</label>          
        </WrapLayout>
    </WrapLayout>
</ScrollView>

        <!-- <StackLayout>
            
            <label text="$269,89"></label>
            <label text="-1.57 <"></label>
        </StackLayout>
         <StackLayout>
            <label text="TRM"></label>
            <label text="$2.369,89"></label>
            <label text="2.57 >"></label>
        </StackLayout>
         <StackLayout>
            <label text="PETROLEO WTI"></label>
            <label text="$69,89"></label>
            <label text="1.57 >"></label>
        </StackLayout>
         <StackLayout>
            <label text="TRM"></label>
            <label text="$2.369,89"></label>
            <label text="2.57 >"></label>
        </StackLayout>
         <StackLayout>
            <label text="PETROLEO WTI"></label>
            <label text="$69,89"></label>
            <label text="1.57 >"></label>
        </StackLayout> -->

  
</template>

<script>
import gql from 'graphql-tag';

import MainHeadline from "../modules/headlines/MainHeadline.vue";
import StandardHeadline from "../modules/headlines/StandardHeadline.vue";

const LAST_NEWS_QUERY = gql `
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
    apollo: {        
        home: LAST_NEWS_QUERY
    },   
    computed: {
        first() {
            return this.home.opening[0];
        },
        headLines() {
            debugger;
            return this.home.opening.slice(1);
        }
    }

};
</script>

<style>
</style>
