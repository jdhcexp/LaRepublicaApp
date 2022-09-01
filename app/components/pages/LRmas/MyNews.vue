<template>
<GridLayout>
  <StackLayout  v-if="getToken == ''">
<label text="MI SELECCIÓN DE NOTICIAS"></label>
<label text="Vea las noticias personalizadas de acuerdo con su top 20 de los temas de interes"></label>
<login-module></login-module>
</StackLayout>
<MyNewsTabMenu v-if="isAuthenticated" accestoken="qwertyudfghjxdcfvgbhfghj"></MyNewsTabMenu>
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
            return this.$store.getters["auth/getToken"];
        },
        isAuthenticated(){
          return this.getToken != '';
        }
    },
    methods: {
       
    },
    components: { LoginModule, MyNewsTabMenu }
}
</script>