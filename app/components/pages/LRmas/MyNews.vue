<template>
<GridLayout>
 
  <StackLayout>
  
<login-module  v-if="!checktok"></login-module>
</StackLayout>

<MyNewsTabMenu v-if="checktok"></MyNewsTabMenu>
</GridLayout>
<!-- <GridLayout> -->
<!-- <my-news-tab-menu v-if="getToken != ''"></my-news-tab-menu> -->
<!-- </GridLayout> -->
</template>

<script>
// var auth_service_1 = require("../../auth-service");


import gql from 'graphql-tag';
import LoginModule from '../../modules/LoginModule.vue';
import MyNewsTabMenu from  '../../layout/MyNewsTabMenu.vue'
import { ApplicationSettings } from '@nativescript/core';
  
const ME_QUERY = gql`
query meInfo{
  me {
    favorites{
      id
      postTitle
      post {
        id
      }
    }
    info {
      email
      firstName
      lastName
      isSubscriber
      topicsLimit
      favoritesLimit
    }
    news {
      topics{
        id
        topicName
        topicId
        topicSlug
      }
    }
    notifications{
      newsletterId
      sendTime
      allowSend
      isBanned
      info {
        id
        name
      }
      lastSend
    }
  }
  }
  `;

  export default {

    // apollo: {
    //     $client: "lrmasClient",
    //     me: {
    //         query: ME_QUERY,
    //         context: {
    //             headers: {
    //                 Authorization: "Bearer "
    //             }
    //         }
    //     }
    // },
    computed: {
      
        getToken() {
            return ApplicationSettings.getString('token');
        },
        checktok(){        
          console.log("QWERTYUISIJOISJOIJSOIJSOISJOSIJOSJOSIJOSIJSOIJOSI")
          return this.getToken != '';
        }
    },
    methods: {
      onLoaded(){
        debugger;
                console.log('page is loaded.')
            },
       showinfo(){
        debugger;
        console.log(ApplicationSettings.getString('token'));
       }
    },
    components: { LoginModule, MyNewsTabMenu },
    beforeMount() {
      if(this.checktok){
        this.$store.dispatch('lrmasgql/getTopicsInfo');
      }
    },
   
}
</script>